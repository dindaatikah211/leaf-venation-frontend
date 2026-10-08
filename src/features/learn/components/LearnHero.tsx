import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/src/shared/components/ui/button'

export default function LearnHero() {
  return (
    <section style={{
      padding: '90px 24px 60px',
      textAlign: 'center',
      background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(74,124,47,0.1) 0%, transparent 70%)',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-text-light)',
          fontFamily: 'var(--font-body)',
          marginBottom: '16px',
        }}>
          Belajar · Learn
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-2px',
          color: 'var(--color-text-main)',
          marginBottom: '20px',
        }}>
          Kenali empat pola
          <br />
          <em style={{ color: 'var(--color-primary-mid)' }}>tulang daun.</em>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          color: 'var(--color-text-muted)',
          lineHeight: 1.7,
          maxWidth: '520px',
          margin: '0 auto 36px',
        }}>
          Tulang daun adalah susunan urat yang menyalurkan air dan nutrisi. Polanya berbeda-beda
          dan bisa dikenali dari bentuk dan arah percabangannya.
        </p>

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
      </div>
    </section>
  )
}