'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useLenis } from 'lenis/react'
import { Menu, X } from 'lucide-react'
import { CONTAINER } from '../../constants/Layout'
import { EASE } from '../../constants/Motion'
import { NAV_ITEMS } from '../../constants/Navbar'
import { rise, stagger } from '../../constants/Variants'

const HEIGHT = 72
const menuContainer = stagger(0.1)

type NavLinkProps = {
  label: string
  href: string
  active: boolean
}

function NavLink({ label, href, active }: NavLinkProps) {
  return (
    <motion.li
      initial="rest"
      animate={active ? 'active' : 'rest'}
      whileHover="hover"
      style={{ position: 'relative', display: 'flex', padding: '6px 0' }}
    >
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
      <motion.span
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 }, active: { scaleX: 1 } }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '1px',
          background: 'var(--color-primary)',
          transformOrigin: 'left',
        }}
      />
    </motion.li>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const lenis = useLenis()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setScrolled(latest > 24)
    setHidden(latest > previous && latest > 160)
  })

  useEffect(() => {
    if (!open) return
    lenis?.stop()
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => {
      lenis?.start()
      window.removeEventListener('keydown', close)
    }
  }, [open, lenis])

  const solid = scrolled || open
  const blur = solid ? 'blur(14px)' : 'none'

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease: EASE }}
        style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%' }}
      >
        <div style={{
          background: solid ? 'rgba(247,245,240,0.82)' : 'transparent',
          backdropFilter: blur,
          WebkitBackdropFilter: blur,
          borderBottom: `1px solid ${solid ? 'var(--color-border)' : 'transparent'}`,
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}>
          <div style={{
            ...CONTAINER,
            padding: '0 24px',
            height: `${HEIGHT}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>

            <Link href="/" onClick={() => setOpen(false)} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}>
              <Image src="/logo.svg" alt="VenaLeaf logo" width={32} height={32} />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                color: 'var(--color-primary)',
                fontWeight: 400,
              }}>
                VenaLeaf
              </span>
            </Link>

            <ul
              className="hidden items-center gap-9 md:flex"
              style={{ listStyle: 'none', margin: 0, padding: 0 }}
            >
              {NAV_ITEMS.map(({ label, href }) => (
                <NavLink key={href} label={label} href={href} active={pathname === href} />
              ))}
            </ul>

            <Link
              href="/classify"
              className="hidden md:inline-flex"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                borderRadius: '999px',
                padding: '9px 22px',
                background: 'var(--color-primary)',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Coba Sekarang
            </Link>

            <button
              type="button"
              className="inline-flex md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              style={{
                width: '40px',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: '1px solid var(--color-border)',
                background: '#fff',
                color: 'var(--color-primary)',
                cursor: 'pointer',
              }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="menu"
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'var(--color-bg)',
              padding: `${HEIGHT + 32}px 24px 40px`,
              overflowY: 'auto',
            }}
          >
            <motion.div
              variants={menuContainer}
              initial="hidden"
              animate="show"
              style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}
            >
              {NAV_ITEMS.map(({ label, href }, index) => {
                const active = pathname === href
                return (
                  <motion.div key={href} variants={rise}>
                    <Link href={href} onClick={() => setOpen(false)} style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '16px',
                      padding: '20px 0',
                      borderBottom: '1px solid var(--color-border)',
                      textDecoration: 'none',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        color: 'var(--color-text-light)',
                      }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(36px, 10vw, 56px)',
                        letterSpacing: '-0.03em',
                        fontStyle: active ? 'italic' : 'normal',
                        color: active ? 'var(--color-primary-mid)' : 'var(--color-text-main)',
                      }}>
                        {label}
                      </span>
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div variants={rise} style={{ marginTop: '40px' }}>
                <Link href="/classify" onClick={() => setOpen(false)} style={{
                  display: 'inline-flex',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  borderRadius: '999px',
                  padding: '14px 32px',
                  background: 'var(--color-primary)',
                  color: '#fff',
                  textDecoration: 'none',
                }}>
                  Coba Sekarang
                </Link>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}