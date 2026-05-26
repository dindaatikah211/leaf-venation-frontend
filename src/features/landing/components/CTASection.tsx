import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/src/shared/components/ui/button'

export default function CTASection() {
  return (
    <section style={{
      background: 'var(--color-primary)',
      padding: '120px 24px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 6vw, 60px)',
          fontWeight: 400,
          color: '#F7F5F0',
          letterSpacing: '-2px',
          lineHeight: 1.05,
          marginBottom: '20px',
        }}>
          Siap mengidentifikasi
          <br />
          <em style={{ color: 'var(--color-accent)' }}>daun pertamamu?</em>
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.7,
          marginBottom: '44px',
        }}>
          Ready to identify your first leaf? No account needed — just a photo.
        </p>

        <Button asChild size="lg" style={{
          borderRadius: '999px',
          background: '#F7F5F0',
          color: 'var(--color-primary)',
          fontFamily: 'var(--font-body)',
          padding: '16px 40px',
          fontSize: '14px',
          height: 'auto',
          fontWeight: 500,
        }}>
          <Link href="/classify" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            Mulai Sekarang · Start Now
            <ArrowRight size={14} />
          </Link>
        </Button>
      </div>
    </section>
  )
}