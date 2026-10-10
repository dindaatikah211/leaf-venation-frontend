'use client'

import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'motion/react'
import { EASE, REVEAL_VIEWPORT } from '../../constants/Motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  style?: CSSProperties
}

export default function Reveal({ children, delay = 0, y = 32, style }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.9, delay, ease: EASE }}
      style={style}
    >
      {children}
    </motion.div>
  )
}