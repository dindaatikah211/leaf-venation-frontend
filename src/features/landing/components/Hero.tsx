'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import VideoBackground from '@/src/shared/components/commons/VideoBackground'
import { useSplash } from '@/src/shared/components/commons/SplashProvider'
import { CONTAINER } from '@/src/shared/constants/Layout'
import { REVEAL_VIEWPORT } from '@/src/shared/constants/Motion'
import { LINE_MASK, lineUp, rise, stagger } from '@/src/shared/constants/Variants'
import { HERO_VIDEO_URL } from '../constants/Hero'
import HeroPanel from './HeroPanel'

const container = stagger()

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { ready } = useSplash()
  const inView = useInView(ref, REVEAL_VIEWPORT)
  const active = ready && inView

  return (
    <section ref={ref} style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100svh - 72px)',
      padding: '72px 24px 96px',
      overflow: 'hidden',
      background: 'var(--color-bg)',
    }}>
      <VideoBackground src={HERO_VIDEO_URL} />

      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 65% 60% at 50% 48%, rgba(247,245,240,0.72) 0%, rgba(247,245,240,0) 75%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate={active ? 'show' : 'hidden'}
        style={{
          ...CONTAINER,
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(38px, 5.8vw, 80px)',
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: 'var(--color-text-main)',
          marginBottom: '28px',
        }}>
          <span style={LINE_MASK}>
            <motion.span variants={lineUp} style={{ display: 'block' }}>
              Kenali Tulang Daun
            </motion.span>
          </span>
          <span style={LINE_MASK}>
            <motion.em variants={lineUp} style={{ display: 'block', color: 'var(--color-primary-mid)' }}>
              dengan Kecerdasan Buatan.
            </motion.em>
          </span>
        </h1>

        <motion.p variants={rise} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '17px',
          lineHeight: 1.7,
          color: 'var(--color-text-muted)',
          maxWidth: '560px',
          marginBottom: '44px',
        }}>
          Unggah satu foto daun dan kenali pola tulang daunnya, menyirip, menjari, melengkung,
          atau sejajar, dalam hitungan detik.
        </motion.p>

        <motion.div variants={rise} style={{ width: '100%' }}>
          <HeroPanel />
        </motion.div>
      </motion.div>
    </section>
  )
}