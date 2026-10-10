import Link from 'next/link'
import { ArrowRight, ImagePlus } from 'lucide-react'
import { LEARN_VENATIONS } from '@/src/features/learn/constants/Learn'

export default function HeroPanel() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '728px',
      margin: '0 auto',
      padding: '8px',
      borderRadius: '28px',
      background: 'rgba(255,255,255,0.4)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: '0 24px 60px -24px rgba(14,19,17,0.4)',
    }}>
      <div style={{
        borderRadius: '20px',
        background: '#fff',
        overflow: 'hidden',
        textAlign: 'left',
      }}>
        <Link
          href="/classify"
          className="transition-colors hover:bg-[#f8f8f8]"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px 24px',
            textDecoration: 'none',
          }}
        >
          <span style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(45,80,22,0.08)',
            flexShrink: 0,
          }}>
            <ImagePlus size={20} color="var(--color-primary)" />
          </span>

          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-text-main)',
              marginBottom: '2px',
            }}>
              Klik untuk memilih foto daun
            </span>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'var(--color-text-light)',
            }}>
              JPG, PNG, atau WebP · maksimal 5 MB · tanpa akun
            </span>
          </span>

          <span style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--color-primary)',
            flexShrink: 0,
          }}>
            <ArrowRight size={16} color="#fff" />
          </span>
        </Link>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '8px',
          padding: '14px 24px 18px',
          borderTop: '1px solid var(--color-border)',
        }}>
          <span style={{
            marginRight: '6px',
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-text-light)',
          }}>
            Dikenali
          </span>
          {LEARN_VENATIONS.map(({ id, name, color }) => (
            <Link
              key={id}
              href={`/learn#${id}`}
              className="transition-colors hover:bg-[#ecece6]"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '8px',
                background: '#f8f8f8',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--color-text-main)',
                textDecoration: 'none',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}