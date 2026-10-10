'use client'

import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react'
import { EASE, REVEAL_VIEWPORT } from '../../constants/Motion'

const PATTERN = /^(\d+(?:\.\d+)?)(.*)$/

type CountUpProps = {
  value: string
  duration?: number
}

export default function CountUp({ value, duration = 1.8 }: CountUpProps) {
  const match = PATTERN.exec(value)
  const number = match?.[1] ?? '0'
  const suffix = match?.[2] ?? ''
  const target = Number(number)
  const decimals = number.split('.')[1]?.length ?? 0

  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, REVEAL_VIEWPORT)
  const motionValue = useMotionValue(0)
  const text = useTransform(motionValue, (latest) => `${latest.toFixed(decimals)}${suffix}`)

  useEffect(() => {
    if (!inView) {
      motionValue.set(0)
      return
    }
    const controls = animate(motionValue, target, { duration, ease: EASE })
    return () => controls.stop()
  }, [inView, motionValue, target, duration])

  return <motion.span ref={ref}>{text}</motion.span>
}