import Link from 'next/link'
import Image from 'next/image'
import { LINKS } from '../../constants/Footer'

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-bg)',
      padding: '40px 24px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}>

        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
        }}>
          <Image
            src="/logo.svg"
            alt="VenaLeaf logo"
            width={24}
            height={24}
          />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            color: 'var(--color-primary)',
          }}>
            VenaLeaf
          </span>
        </Link>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: 'var(--color-text-light)',
          textAlign: 'center',
        }}>
          Tubes Pengolahan Citra · Klasifikasi Tulang Daun · {new Date().getFullYear()}
        </p>

        <div style={{ display: 'flex', gap: '24px' }}>
          {LINKS.map(({ label, href }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
            }}>
              {label}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}