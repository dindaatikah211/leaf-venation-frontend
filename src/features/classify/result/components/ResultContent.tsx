'use client'

import { useEffect, useMemo, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BookOpen, RotateCcw } from 'lucide-react'
import { Button } from '@/src/shared/components/ui/button'
import { CLASS_META, CLASS_NAMES, LOW_CONFIDENCE_THRESHOLD } from '../../constants/Classify'
import { getStoredRaw, parseStoredResult } from '../helpers/storage'

const subscribe = () => () => {}

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
        maxWidth: '960px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        alignItems: 'start',
      }}>

        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
          background: '#fff',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={result.image}
            alt="Foto daun yang dianalisis"
            style={{ display: 'block', width: '100%', maxHeight: '460px', objectFit: 'contain' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-text-light)',
              fontFamily: 'var(--font-body)',
              marginBottom: '12px',
            }}>
              Hasil · Result
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: meta.color, flexShrink: 0 }} />
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 400,
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
                color: 'var(--color-text-main)',
              }}>
                {meta.name}
              </h1>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontStyle: 'italic', color: 'var(--color-text-light)' }}>
              {meta.latin} · keyakinan {(result.confidence * 100).toFixed(1)}%
            </p>
          </div>

          {isLowConfidence && (
            <p style={{
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
            </p>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {ranked.map((name) => {
              const value = result.probabilities[name]
              return (
                <div key={name}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-text-main)',
                    marginBottom: '6px',
                  }}>
                    <span>{CLASS_META[name].name} · {CLASS_META[name].latin}</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>{(value * 100).toFixed(1)}%</span>
                  </div>
                  <div style={{ height: '8px', borderRadius: '999px', background: 'var(--color-border)', overflow: 'hidden' }}>
                    <div style={{
                      width: `${value * 100}%`,
                      height: '100%',
                      borderRadius: '999px',
                      background: CLASS_META[name].color,
                      transition: 'width 0.6s ease',
                    }} />
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
          </div>

        </div>
      </div>
    </section>
  )
}