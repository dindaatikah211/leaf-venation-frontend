'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/src/shared/components/ui/button'
import { useSplash } from '@/src/shared/components/commons/SplashProvider'
import { CONTAINER } from '@/src/shared/constants/Layout'
import { LINE_MASK, lineUp, rise, stagger } from '@/src/shared/constants/Variants'
import { LEARN_VENATIONS } from '../constants/Learn'

const container = stagger(0.2)

export default function LearnHero() {
  const { ready } = useSplash()
  const lenis = useLenis()

  const jumpTo = (id: string) => {
    if (lenis) lenis.scrollTo(`#${id}`, { offset: -96 })
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      padding: '96px 24px 64px',
      background: 'radial-gradient(ellipse 70% 60% at 20% 0%, rgba(74,124,47,0.1) 0%, transparent 70%)',
    }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={ready ? 'show' : 'hidden'}
        style={CONTAINER}
      >
        <motion.p variants={rise} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-text-light)',
          marginBottom: '24px',
        }}>
          Belajar · Learn
        </motion.p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(44px, 7vw, 92px)',
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: 'var(--color-text-main)',
          marginBottom: '28px',
        }}>
          <span style={LINE_MASK}>
            <motion.span variants={lineUp} style={{ display: 'block' }}>
              Kenali empat pola
            </motion.span>
          </span>
          <span style={LINE_MASK}>
            <motion.em variants={lineUp} style={{ display: 'block', color: 'var(--color-primary-mid)' }}>
              tulang daun.
            </motion.em>
          </span>
        </h1>

        <motion.p variants={rise} style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          color: 'var(--color-text-muted)',
          lineHeight: 1.75,
          maxWidth: '520px',
          marginBottom: '40px',
        }}>
          Tulang daun adalah susunan urat yang menyalurkan air dan nutrisi. Polanya berbeda-beda
          dan bisa dikenali dari bentuk dan arah percabangannya.
        </motion.p>

        <motion.div variants={rise} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {LEARN_VENATIONS.map(({ id, name, color }) => (
            <motion.button
              key={id}
              type="button"
              onClick={() => jumpTo(id)}
              whileHover={{ y: -2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                borderRadius: '999px',
                border: '1px solid var(--color-border)',
                background: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-text-main)',
                cursor: 'pointer',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
              {name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div variants={rise}>
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
              Coba Klasifikasi
              <ArrowRight size={14} />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}