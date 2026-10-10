'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { ArrowRight, BookOpen, Leaf } from 'lucide-react'
import { Badge } from '@/src/shared/components/ui/badge'
import { Button } from '@/src/shared/components/ui/button'
import { useSplash } from '@/src/shared/components/commons/SplashProvider'
import { CONTAINER } from '@/src/shared/constants/Layout'
import { EASE, REVEAL_VIEWPORT } from '@/src/shared/constants/Motion'
import { LINE_MASK, lineUp, rise, stagger } from '@/src/shared/constants/Variants'
import { HERO_FACTS } from '../constants/Landing'
import SpecimenCard from './SpecimenCard'

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
      minHeight: 'calc(100svh - 80px)',
      padding: '72px 24px 96px',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 70% 60% at 75% 20%, rgba(74,124,47,0.1) 0%, transparent 70%)',
    }}>
      <div style={{
        ...CONTAINER,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: '64px',
        alignItems: 'center',
      }}>

        <motion.div variants={container} initial="hidden" animate={active ? 'show' : 'hidden'}>
          <motion.div variants={rise} style={{ marginBottom: '32px' }}>
            <Badge variant="outline" style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '8px 18px',
              borderRadius: '999px',
              border: '1px solid rgba(45,80,22,0.25)',
              background: 'rgba(45,80,22,0.06)',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-body)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <Leaf size={12} />
              Pengolahan Citra · Image Processing
            </Badge>
          </motion.div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5.6vw, 72px)',
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
                dengan Kecerdasan
              </motion.em>
            </span>
            <span style={LINE_MASK}>
              <motion.em variants={lineUp} style={{ display: 'block', color: 'var(--color-primary-mid)' }}>
                Buatan.
              </motion.em>
            </span>
          </h1>

          <motion.p variants={rise} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--color-text-muted)',
            lineHeight: 1.75,
            maxWidth: '460px',
            marginBottom: '40px',
          }}>
            Identify leaf venation patterns — menyirip, menjari, melengkung, atau sejajar —
            hanya dengan satu foto menggunakan model deep learning.
          </motion.p>

          <motion.div variants={rise} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            <Button asChild size="lg" style={{
              borderRadius: '999px',
              background: 'var(--color-primary)',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              padding: '14px 32px',
              fontSize: '14px',
              height: 'auto',
            }}>
              <Link href="/classify" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                Mulai Klasifikasi
                <ArrowRight size={14} />
              </Link>
            </Button>

            <Button asChild variant="ghost" style={{
              borderRadius: '999px',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              height: 'auto',
              padding: '14px 20px',
            }}>
              <Link href="/learn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <BookOpen size={14} />
                Pelajari Tulang Daun
              </Link>
            </Button>
          </motion.div>

          <motion.ul variants={rise} style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px 28px',
            listStyle: 'none',
            padding: 0,
            margin: '48px 0 0',
          }}>
            {HERO_FACTS.map((fact) => (
              <li key={fact} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--color-text-muted)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-mid)' }} />
                {fact}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
        >
          <SpecimenCard active={active} />
        </motion.div>

      </div>
    </section>
  )
}