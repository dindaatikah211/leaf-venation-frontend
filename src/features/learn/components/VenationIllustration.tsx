'use client'

import { motion } from 'motion/react'
import { EASE } from '@/src/shared/constants/Motion'
import { LEAF_OUTLINE } from '../constants/Learn'
import type { LearnVenation } from '../types/Learn'

type VenationIllustrationProps = Pick<LearnVenation, 'name' | 'color' | 'veins'> & {
  draw?: boolean
  size?: number
}

export default function VenationIllustration({
  name,
  color,
  veins,
  draw = true,
  size = 260,
}: VenationIllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label={`Ilustrasi tulang daun ${name}`}
    >
      <motion.path
        d={LEAF_OUTLINE}
        fill={color}
        stroke={color}
        strokeWidth={1.6}
        strokeLinejoin="round"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={draw ? { pathLength: 1, fillOpacity: 0.12 } : { pathLength: 0, fillOpacity: 0 }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      {veins.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          stroke={color}
          strokeWidth={1.6}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: draw ? 1 : 0 }}
          transition={{ duration: 0.9, delay: draw ? 0.35 + index * 0.1 : 0, ease: EASE }}
        />
      ))}
    </svg>
  )
}