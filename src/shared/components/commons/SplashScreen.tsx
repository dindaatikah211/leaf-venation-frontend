'use client'

import { useEffect, useState } from 'react'
import { animate, motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import { EASE, SPLASH_DURATION } from '../../constants/Motion'
import LeafVeins from './LeafVeins'

type SplashScreenProps = {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const lenis = useLenis()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    lenis?.stop()
    return () => lenis?.start()
  }, [lenis])

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: SPLASH_DURATION,
      ease: 'easeInOut',
      onUpdate: (latest) => setProgress(Math.round(latest)),
      onComplete,
    })
    return () => controls.stop()
  }, [onComplete])

  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: EASE }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'var(--color-bg-dark)',
        color: '#F7F5F0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '32px 40px',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '11px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
      }}>
        Memuat · Loading
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
        <LeafVeins
          draw
          stroke="var(--color-accent)"
          strokeWidth={1.6}
          duration={1.6}
          style={{ height: 'min(46vh, 380px)', width: 'auto' }}
        />
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 44px)',
          letterSpacing: '-1px',
        }}>
          VenaLeaf
        </p>
      </div>

      <div>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 9vw, 120px)',
          lineHeight: 1,
          letterSpacing: '-3px',
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums',
          marginBottom: '16px',
        }}>
          {String(progress).padStart(2, '0')}
        </p>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'var(--color-accent)' }} />
        </div>
      </div>
    </motion.div>
  )
}