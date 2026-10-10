import type { Variants } from 'motion/react'
import { EASE } from './Motion'

export const stagger = (delayChildren = 0.3): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren } },
})

export const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

export const lineUp: Variants = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 1.05, ease: EASE } },
}

export const LINE_MASK = { display: 'block', overflow: 'hidden', paddingBottom: '0.12em', marginBottom: '-0.12em' } as const