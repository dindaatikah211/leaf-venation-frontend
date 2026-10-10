'use client'

import { useCallback, useEffect, useRef } from 'react'

const FADE_MS = 250
const FADE_OUT_REMAINING = 0.55
const RESTART_DELAY_MS = 100

type VideoBackgroundProps = {
  src: string
}

export default function VideoBackground({ src }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const frameRef = useRef<number | null>(null)
  const restartRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)

  const cancelFrame = useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    frameRef.current = null
  }, [])

  const fadeTo = useCallback(
    (target: number) => {
      const video = videoRef.current
      if (!video) return
      cancelFrame()
      const from = parseFloat(video.style.opacity) || 0
      const start = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - start) / FADE_MS, 1)
        video.style.opacity = String(from + (target - from) * progress)
        frameRef.current = progress < 1 ? requestAnimationFrame(step) : null
      }
      frameRef.current = requestAnimationFrame(step)
    },
    [cancelFrame]
  )

  const handleLoaded = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      video.style.opacity = '1'
      return
    }
    fadingOutRef.current = false
    fadeTo(1)
  }, [fadeTo])

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || fadingOutRef.current || !Number.isFinite(video.duration)) return
    if (video.duration - video.currentTime <= FADE_OUT_REMAINING) {
      fadingOutRef.current = true
      fadeTo(0)
    }
  }

  const handleEnded = () => {
    const video = videoRef.current
    if (!video) return
    cancelFrame()
    video.style.opacity = '0'
    restartRef.current = window.setTimeout(() => {
      video.currentTime = 0
      video.play().catch(() => {})
      fadingOutRef.current = false
      fadeTo(1)
    }, RESTART_DELAY_MS)
  }

  useEffect(() => {
    const video = videoRef.current
    if (video && video.readyState >= 2) handleLoaded()
    return () => {
      cancelFrame()
      if (restartRef.current !== null) clearTimeout(restartRef.current)
    }
  }, [handleLoaded, cancelFrame])

  return (
    <div aria-hidden="true" style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedData={handleLoaded}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '115%',
          height: '115%',
          maxWidth: 'none',
          transform: 'translateX(-50%)',
          objectFit: 'cover',
          objectPosition: 'top',
          opacity: 0,
        }}
      />
    </div>
  )
}