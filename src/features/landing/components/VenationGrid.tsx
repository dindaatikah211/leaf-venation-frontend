'use client'

import { motion } from 'motion/react'
import Reveal from '@/src/shared/components/commons/Reveal'
import { CONTAINER } from '@/src/shared/constants/Layout'
import { EASE } from '@/src/shared/constants/Motion'
import { VENATION_TYPES } from '../constants/Landing'
import SectionHeader from './SectionHeader'

export default function VenationGrid() {
  return (
    <section style={{ background: 'var(--color-bg-dark)', padding: '120px 24px' }}>
      <div style={CONTAINER}>

        <SectionHeader
          index="01"
          eyebrow="4 Jenis Tulang Daun · 4 Venation Types"
          title="Yang bisa kami"
          highlight="kenali."
          description="Empat pola utama yang dipelajari model, dari yang bercabang rapi hingga yang berjalan lurus."
          tone="dark"
        />

        <Reveal delay={0.1} y={48}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}>
            {VENATION_TYPES.map(({ name, latin, desc, example, color }, index) => (
              <motion.div key={name} whileHover="hover" style={{
                position: 'relative',
                background: 'var(--color-bg-dark)',
                padding: '40px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <motion.span
                  variants={{ hover: { opacity: 1 } }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255,255,255,0.04)',
                    opacity: 0,
                    pointerEvents: 'none',
                  }}
                />
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.2)',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <motion.div
                  variants={{ hover: { scale: 1.25 } }}
                  transition={{ duration: 0.4, ease: EASE }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: color,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '-0.02em', color: '#F7F5F0', marginBottom: '2px' }}>
                    {name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontStyle: 'italic', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
                    {latin}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '10px' }}>
                    {desc}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>
                    Contoh: {example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}