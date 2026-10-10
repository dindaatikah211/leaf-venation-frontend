import type { CSSProperties } from 'react'

export const CONTAINER = { maxWidth: '1120px', margin: '0 auto' } as const

export const STAGE_HEIGHT = '340px'

export const PAGE_SECTION: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  minHeight: 'calc(100svh - 72px)',
  padding: '72px 24px 100px',
  background: 'radial-gradient(ellipse 70% 60% at 85% 10%, rgba(74,124,47,0.08) 0%, transparent 70%)',
}

export const SPLIT_GRID: CSSProperties = {
  ...CONTAINER,
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
  gap: '56px 80px',
  alignItems: 'center',
}

export const PANEL: CSSProperties = {
  padding: '20px',
  borderRadius: '28px',
  border: '1px solid var(--color-border)',
  background: '#fff',
}

export const EYEBROW: CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'var(--color-text-light)',
}

export const PAGE_TITLE: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(44px, 6vw, 80px)',
  fontWeight: 400,
  lineHeight: 1.05,
  letterSpacing: '-0.04em',
  color: 'var(--color-text-main)',
  marginBottom: '24px',
}