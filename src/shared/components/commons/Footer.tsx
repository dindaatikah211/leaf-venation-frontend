import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { CONTAINER } from '../../constants/Layout'
import { LINKS } from '../../constants/Footer'
import Reveal from './Reveal'

const TECH = ['Next.js', 'Flask · TensorFlow', 'MobileNetV2 · EfficientNetB0']

const headingStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'var(--color-text-light)',
  marginBottom: '20px',
} as const

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
} as const

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-bg)',
      padding: '80px 24px 0',
    }}>
      <div style={CONTAINER}>

        <Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '48px 40px',
          }}>

            <div style={{ gridColumn: 'span 2', minWidth: 'min(100%, 280px)' }}>
              <Link href="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                marginBottom: '20px',
              }}>
                <Image src="/logo.svg" alt="VenaLeaf logo" width={28} height={28} />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  color: 'var(--color-primary)',
                }}>
                  VenaLeaf
                </span>
              </Link>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--color-text-muted)',
                maxWidth: '320px',
                marginBottom: '24px',
              }}>
                Mengenali pola tulang daun dari satu foto dengan model deep learning.
              </p>

              <Link href="/classify" className="hover:opacity-85" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                borderRadius: '999px',
                padding: '10px 22px',
                background: 'var(--color-primary)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}>
                Coba Klasifikasi
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div>
              <p style={headingStyle}>Jelajahi</p>
              <ul style={listStyle}>
                {LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-[var(--color-primary)]"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--color-text-muted)',
                        textDecoration: 'none',
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p style={headingStyle}>Teknologi</p>
              <ul style={listStyle}>
                {TECH.map((item) => (
                  <li key={item} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--color-text-muted)',
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Reveal>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '8px 24px',
          marginTop: '64px',
          paddingTop: '24px',
          borderTop: '1px solid var(--color-border)',
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: 'var(--color-text-light)',
        }}>
          <p>© {new Date().getFullYear()} VenaLeaf · Klasifikasi Tulang Daun</p>
          <p>Dibuat untuk mata kuliah Pengolahan Citra</p>
        </div>

      </div>

      <p aria-hidden="true" style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(88px, 21vw, 280px)',
        lineHeight: 0.8,
        letterSpacing: '-0.05em',
        textAlign: 'center',
        color: 'rgba(45,80,22,0.07)',
        userSelect: 'none',
        margin: '40px 0 -0.08em',
        whiteSpace: 'nowrap',
      }}>
        VenaLeaf
      </p>
    </footer>
  )
}