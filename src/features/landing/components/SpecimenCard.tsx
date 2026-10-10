'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LEAF_OUTLINE, LEARN_VENATIONS } from '@/src/features/learn/constants/Learn'
import { EASE } from '@/src/shared/constants/Motion'

const INTERVAL = 4200

type SpecimenCardProps = {
  active: boolean
}

export default function SpecimenCard({ active }: SpecimenCardProps) {
  const [index, setIndex] = useState(0)
  const current = LEARN_VENATIONS[index]
  const total = LEARN_VENATIONS.length

  useEffect(() => {
    if (!active) return
    const timer = setInterval(() => setIndex((value) => (value + 1) % total), INTERVAL)
    return () => clearInterval(timer)
  }, [active, index, total])

  return (
    <div style={{
      width: '100%',
      maxWidth: '460px',
      marginLeft: 'auto',
      padding: '28px',
      borderRadius: '28px',
      border: '1px solid var(--color-border)',
      background: '#fff',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        fontFamily: 'var(--font-body)',
        fontSize: '11px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--color-text-light)',
      }}>
        <span>Spesimen · Specimen</span>
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '320px',
        borderRadius: '20px',
        background: 'var(--color-bg)',
        backgroundImage: 'radial-gradient(rgba(45,80,22,0.14) 1px, transparent 1px)',
        backgroundSize: '18px 18px',
      }}>
        <AnimatePresence mode="wait">
          <motion.svg
            key={current.id}
            viewBox="0 0 120 120"
            width="260"
            height="260"
            fill="none"
            role="img"
            aria-label={`Ilustrasi tulang daun ${current.name}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <motion.path
              d={LEAF_OUTLINE}
              fill={current.color}
              fillOpacity={0.12}
              stroke={current.color}
              strokeWidth={1.6}
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: EASE }}
            />
            {current.veins.map((d, veinIndex) => (
              <motion.path
                key={d}
                d={d}
                stroke={current.color}
                strokeWidth={1.6}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.35 + veinIndex * 0.1, ease: EASE }}
              />
            ))}
          </motion.svg>
        </AnimatePresence>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '16px',
        marginTop: '24px',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              letterSpacing: '-0.03em',
              color: 'var(--color-text-main)',
              lineHeight: 1.1,
            }}>
              {current.name}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontStyle: 'italic',
              color: 'var(--color-text-light)',
              marginTop: '4px',
            }}>
              {current.latin} · {current.examples.join(', ')}
            </p>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingBottom: '6px' }}>
          {LEARN_VENATIONS.map((item, dotIndex) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Tampilkan ${item.name}`}
              style={{
                width: dotIndex === index ? '28px' : '8px',
                height: '8px',
                padding: 0,
                border: 'none',
                borderRadius: '999px',
                background: dotIndex === index ? item.color : 'var(--color-border)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}