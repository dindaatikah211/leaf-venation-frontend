'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ImagePlus, Loader2, X } from 'lucide-react'
import { Button } from '@/src/shared/components/ui/button'
import { useSplash } from '@/src/shared/components/commons/SplashProvider'
import { CONTAINER } from '@/src/shared/constants/Layout'
import { EASE } from '@/src/shared/constants/Motion'
import { LINE_MASK, lineUp, rise, stagger } from '@/src/shared/constants/Variants'
import { useClassify } from '../hooks/useClassify'
import { ACCEPTED_TYPES, MAX_FILE_SIZE, TIPS } from '../constants/Classify'
import ClassifyNotice from './ClassifyNotice'

const container = stagger(0.2)
const STAGE_HEIGHT = '340px'

const swap = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.97 },
  transition: { duration: 0.4, ease: EASE },
}

const formatSize = (bytes: number) =>
  bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`

export default function ClassifyContent() {
  const { ready } = useSplash()
  const { file, preview, loading, error, rejected, selectFile, reset, submit } = useClassify()
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    selectFile(e.dataTransfer.files[0] ?? null)
  }

  const pickAnother = () => {
    reset()
    inputRef.current?.click()
  }

  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      minHeight: 'calc(100svh - 72px)',
      padding: '72px 24px 100px',
      background: 'radial-gradient(ellipse 70% 60% at 85% 10%, rgba(74,124,47,0.08) 0%, transparent 70%)',
    }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={ready ? 'show' : 'hidden'}
        style={{
          ...CONTAINER,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '56px 80px',
          alignItems: 'center',
        }}
      >

        <div>
          <motion.p variants={rise} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-text-light)',
            marginBottom: '24px',
          }}>
            Klasifikasi · Classify
          </motion.p>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 6vw, 80px)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: 'var(--color-text-main)',
            marginBottom: '24px',
          }}>
            <span style={LINE_MASK}>
              <motion.span variants={lineUp} style={{ display: 'block' }}>
                Unggah foto
              </motion.span>
            </span>
            <span style={LINE_MASK}>
              <motion.em variants={lineUp} style={{ display: 'block', color: 'var(--color-primary-mid)' }}>
                daunmu.
              </motion.em>
            </span>
          </h1>

          <motion.p variants={rise} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            lineHeight: 1.75,
            color: 'var(--color-text-muted)',
            maxWidth: '420px',
            marginBottom: '48px',
          }}>
            Pilih satu foto daun, lalu model akan mengenali pola tulang daunnya dalam hitungan detik.
          </motion.p>

          <motion.div variants={rise} style={{ maxWidth: '420px' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-text-light)',
              marginBottom: '12px',
            }}>
              Tips foto yang baik
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              borderBottom: '1px solid var(--color-border)',
            }}>
              {TIPS.map((tip, index) => (
                <li key={tip} style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '16px',
                  padding: '14px 0',
                  borderTop: '1px solid var(--color-border)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--color-text-main)',
                }}>
                  <span style={{
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    color: 'var(--color-text-light)',
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div variants={rise} style={{
          padding: '20px',
          borderRadius: '28px',
          border: '1px solid var(--color-border)',
          background: '#fff',
        }}>
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED_TYPES.join(',')}
            style={{ display: 'none' }}
            onChange={(e) => {
              selectFile(e.target.files?.[0] ?? null)
              e.target.value = ''
            }}
          />

          <AnimatePresence mode="wait">
            {preview ? (
              <motion.div
                key="preview"
                {...swap}
                style={{
                  position: 'relative',
                  height: STAGE_HEIGHT,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'var(--color-bg)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="Pratinjau daun"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    opacity: loading ? 0.7 : 1,
                    transition: 'opacity 0.4s ease',
                  }}
                />
                {loading && (
                  <motion.div
                    initial={{ top: '0%' }}
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--color-accent)',
                      boxShadow: '0 0 24px 6px var(--color-accent)',
                      pointerEvents: 'none',
                    }}
                  />
                )}
                <button
                  type="button"
                  onClick={reset}
                  disabled={loading}
                  aria-label="Hapus foto"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: 'none',
                    background: 'rgba(0,0,0,0.55)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <X size={16} />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="dropzone"
                {...swap}
                role="button"
                tabIndex={0}
                onClick={() => inputRef.current?.click()}
                onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault()
                  setDragging(true)
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: STAGE_HEIGHT,
                  borderRadius: '20px',
                  border: `2px dashed ${dragging ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  background: dragging ? 'rgba(45,80,22,0.05)' : 'var(--color-bg)',
                  padding: '24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(45,80,22,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <ImagePlus size={22} color="var(--color-primary)" />
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--color-text-main)', marginBottom: '6px' }}>
                  Seret foto ke sini atau klik untuk memilih
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-light)' }}>
                  JPG, PNG, atau WebP · maksimal {MAX_FILE_SIZE / 1024 / 1024} MB
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {file && (
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '16px',
              marginTop: '14px',
              padding: '0 4px',
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'var(--color-text-muted)',
            }}>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</span>
              <span style={{ flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{formatSize(file.size)}</span>
            </div>
          )}

          <AnimatePresence>
            {error && (
              <motion.div
                key="notice"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <ClassifyNotice error={error} onPickAnother={rejected ? pickAnother : undefined} />
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            onClick={submit}
            disabled={!file || loading || rejected}
            size="lg"
            style={{
              width: '100%',
              marginTop: '16px',
              borderRadius: '999px',
              background: 'var(--color-primary)',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              padding: '16px 40px',
              fontSize: '14px',
              height: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {loading && <Loader2 size={14} className="animate-spin" />}
            {loading ? 'Menganalisis...' : 'Klasifikasi Sekarang'}
          </Button>
        </motion.div>

      </motion.div>
    </section>
  )
}