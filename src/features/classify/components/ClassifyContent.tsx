'use client'

import { useRef, useState } from 'react'
import { ImagePlus, Loader2, X } from 'lucide-react'
import { Button } from '@/src/shared/components/ui/button'
import { useClassify } from '../hooks/useClassify'
import { ACCEPTED_TYPES, MAX_FILE_SIZE, TIPS } from '../constants/Classify'
import ClassifyNotice from './ClassifyNotice'

export default function ClassifyContent() {
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
    <section style={{ padding: '80px 24px 100px', minHeight: '70vh' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-text-light)',
            fontFamily: 'var(--font-body)',
            marginBottom: '12px',
          }}>
            Klasifikasi · Classify
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 400,
            letterSpacing: '-1.5px',
            color: 'var(--color-text-main)',
          }}>
            Unggah foto <em style={{ color: 'var(--color-primary-mid)' }}>daunmu.</em>
          </h1>
        </div>

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

        {preview ? (
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            background: '#fff',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="Pratinjau daun"
              style={{ display: 'block', width: '100%', maxHeight: '420px', objectFit: 'contain' }}
            />
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
          </div>
        ) : (
          <div
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
              borderRadius: '20px',
              border: `2px dashed ${dragging ? 'var(--color-primary)' : 'var(--color-border)'}`,
              background: dragging ? 'rgba(45,80,22,0.05)' : '#fff',
              padding: '72px 24px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
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
              margin: '0 auto 20px',
            }}>
              <ImagePlus size={22} color="var(--color-primary)" />
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--color-text-main)', marginBottom: '6px' }}>
              Seret foto ke sini atau klik untuk memilih
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-light)' }}>
              JPG, PNG, atau WebP · maksimal {MAX_FILE_SIZE / 1024 / 1024} MB
            </p>
          </div>
        )}

        {error && <ClassifyNotice error={error} onPickAnother={rejected ? pickAnother : undefined} />}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
          <Button
            onClick={submit}
            disabled={!file || loading || rejected}
            size="lg"
            style={{
              borderRadius: '999px',
              background: 'var(--color-primary)',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              padding: '14px 40px',
              fontSize: '14px',
              height: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {loading && <Loader2 size={14} className="animate-spin" />}
            {loading ? 'Menganalisis...' : 'Klasifikasi Sekarang'}
          </Button>
        </div>

        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '48px 0 0',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
        }}>
          {TIPS.map((tip) => (
            <li key={tip} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'var(--color-text-muted)',
              padding: '8px 16px',
              borderRadius: '999px',
              border: '1px solid var(--color-border)',
              background: '#fff',
            }}>
              {tip}
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}