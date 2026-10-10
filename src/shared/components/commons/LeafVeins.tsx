'use client'

import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import { EASE } from '../../constants/Motion'
import { LEAF_PATHS } from '../../constants/Leaf'

type LeafVeinsProps = {
  draw: boolean
  stroke?: string
  strokeWidth?: number
  duration?: number
  delay?: number
  style?: CSSProperties
}

export default function LeafVeins({
  draw,
  stroke = 'currentColor',
  strokeWidth = 1.5,
  duration = 1.6,
  delay = 0,
  style,
}: LeafVeinsProps) {
  return (
    <svg viewBox="0 0 400 600" fill="none" aria-hidden="true" style={style}>
      {LEAF_PATHS.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={draw ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration, delay: delay + index * 0.12, ease: EASE }}
        />
      ))}
    </svg>
  )
}