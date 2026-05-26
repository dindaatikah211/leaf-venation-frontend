import Link from 'next/link'
import { ArrowRight, BookOpen, Leaf } from 'lucide-react'
import { Badge } from '@/src/shared/components/ui/badge'
import { Button } from '@/src/shared/components/ui/button'

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      padding: '100px 24px 120px',
      textAlign: 'center',
      background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(74,124,47,0.1) 0%, transparent 70%)',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        <div className="animate-fade-rise" style={{ marginBottom: '36px' }}>
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
        </div>

        <h1 className="animate-fade-rise" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(42px, 7vw, 80px)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-2px',
          color: 'var(--color-text-main)',
          marginBottom: '24px',
        }}>
          Kenali Tulang Daun
          <br />
          <em style={{ color: 'var(--color-primary-mid)' }}>dengan Kecerdasan Buatan.</em>
        </h1>

        <p className="animate-fade-rise-delay" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '17px',
          color: 'var(--color-text-muted)',
          lineHeight: 1.7,
          maxWidth: '540px',
          margin: '0 auto 44px',
        }}>
          Identify leaf venation patterns — menyirip, menjari, melengkung, atau sejajar —
          hanya dengan satu foto menggunakan model deep learning.
        </p>

        <div className="animate-fade-rise-delay-2" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
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
        </div>

      </div>
    </section>
  )
}