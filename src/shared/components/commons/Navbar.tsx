'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '../../constants/Navbar'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav style={{
      width: '100%',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      background: 'rgba(247,245,240,0.88)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}>
          <Image
            src="/logo.svg"
            alt="VenaLeaf logo"
            width={32}
            height={32}
          />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            color: 'var(--color-primary)',
            fontWeight: 400,
          }}>
            VenaLeaf
          </span>
        </Link>

        <ul style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
          listStyle: 'none',
        }}>
          {NAV_ITEMS.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={href} style={{ display: 'flex' }}>
                <Link href={href} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  fontWeight: active ? 500 : 400,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}>
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <Link href="/classify" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          fontWeight: 500,
          borderRadius: '999px',
          padding: '9px 22px',
          background: 'var(--color-primary)',
          color: '#fff',
          textDecoration: 'none',
          transition: 'opacity 0.2s',
        }}>
          Coba Sekarang
        </Link>

      </div>
    </nav>
  )
}