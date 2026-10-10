'use client'

import { useEffect, useMemo, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'motion/react'
import { BookOpen, RotateCcw } from 'lucide-react'
import { Button } from '@/src/shared/components/ui/button'
import CountUp from '@/src/shared/components/commons/CountUp'
import { CONTAINER } from '@/src/shared/constants/Layout'
import { EASE } from '@/src/shared/constants/Motion'
import { LINE_MASK, lineUp, rise, stagger } from '@/src/shared/constants/Variants'
import { CLASS_META, CLASS_NAMES, LOW_CONFIDENCE_THRESHOLD } from '../../constants/Classify'
import { getStoredRaw, parseStoredResult } from '../helpers/storage'

const subscribe = () => () => {}
const container = stagger(0.25)
const percent = (value: number) => `${(value * 100).toFixed(1)}%`

export default function ResultContent() {
  const router = useRouter()
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)
  const raw = useSyncExternalStore(subscribe, getStoredRaw, () => null)
  const result = useMemo(() => parseStoredResult(raw), [raw])

  useEffect(() => {
    if (mounted && !result) router.replace('/classify')
  }, [mounted, result, router])

  if (!result) return null

  const meta = CLASS_META[result.label]
  const ranked = [...CLASS_NAMES].sort((a, b) => result.probabilities[b] - result.probabilities[a])
  const isLowConfidence = result.confidence < LOW_CONFIDENCE_THRESHOLD

  return (
    <section style={{ padding: '80px 24px 100px' }}>
      <div style={{
        ...CONTAINER,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: '48px 72px',
        alignItems: 'start',
      }}>

        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            background: '#fff',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={result.image}
            alt="Foto daun yang dianalisis"
            style={{ display: 'block', width: '100%', maxHeight: '520px', objectFit: 'contain' }}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >

          <div>
            <motion.p variants={rise} style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-text-light)',
              fontFamily: 'var(--font-body)',
              marginBottom: '16px',
            }}>
              Hasil · Result
            </motion.p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
              <motion.span variants={rise} style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: meta.color,
                flexShrink: 0,
              }} />
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 6vw, 72px)',
                fontWeight: 400,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: 'var(--color-text-main)',
              }}>
                <span style={LINE_MASK}>
                  <motion.span variants={lineUp} style={{ display: 'block' }}>
                    {meta.name}
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.p variants={rise} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontStyle: 'italic',
              color: 'var(--color-text-light)',
              marginBottom: '28px',
            }}>
              {meta.latin}
            </motion.p>

            <motion.div variants={rise} style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 6vw, 64px)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: 'var(--color-primary)',
                fontVariantNumeric: 'tabular-nums',
              }}>
                <CountUp value={percent(result.confidence)} />
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                keyakinan model
              </p>
            </motion.div>
          </div>

          {isLowConfidence && (
            <motion.p variants={rise} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'var(--color-text-muted)',
              padding: '14px 18px',
              borderRadius: '14px',
              background: 'rgba(201,162,39,0.1)',
              border: '1px solid rgba(201,162,39,0.3)',
            }}>
              Keyakinan model masih rendah. Coba foto ulang dengan satu daun saja dan background polos.
            </motion.p>
          )}

          <motion.div variants={rise} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {ranked.map((name, index) => {
              const value = result.probabilities[name]
              return (
                <div key={name}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-text-main)',
                    marginBottom: '8px',
                  }}>
                    <span>{CLASS_META[name].name} · {CLASS_META[name].latin}</span>
                    <span style={{ color: 'var(--color-text-muted)', fontVariantNumeric: 'tabular-nums' }}>
                      <CountUp value={percent(value)} />
                    </span>
                  </div>
                  <div style={{ height: '8px', borderRadius: '999px', background: 'var(--color-border)', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value * 100}%` }}
                      transition={{ duration: 1.1, delay: 0.6 + index * 0.12, ease: EASE }}
                      style={{ height: '100%', borderRadius: '999px', background: CLASS_META[name].color }}
                    />
                  </div>
                </div>
              )
            })}
          </motion.div>

          <motion.div variants={rise} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button asChild size="lg" style={{
              borderRadius: '999px',
              background: 'var(--color-primary)',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              padding: '14px 28px',
              fontSize: '14px',
              height: 'auto',
            }}>
              <Link href="/classify" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <RotateCcw size={14} />
                Coba Foto Lain
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
        </motion.div>
      </div>
    </section>
  )
}