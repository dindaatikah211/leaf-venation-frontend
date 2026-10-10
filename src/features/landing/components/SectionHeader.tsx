import Reveal from '@/src/shared/components/commons/Reveal'

type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  tone?: 'light' | 'dark'
}

const TONES = {
  light: {
    eyebrow: 'var(--color-text-light)',
    title: 'var(--color-text-main)',
    accent: 'var(--color-primary-mid)',
    body: 'var(--color-text-muted)',
    rule: 'var(--color-border)',
  },
  dark: {
    eyebrow: 'rgba(255,255,255,0.35)',
    title: '#F7F5F0',
    accent: 'var(--color-accent)',
    body: 'rgba(255,255,255,0.55)',
    rule: 'rgba(255,255,255,0.12)',
  },
}

export default function SectionHeader({
  index,
  eyebrow,
  title,
  highlight,
  description,
  tone = 'light',
}: SectionHeaderProps) {
  const palette = TONES[tone]

  return (
    <Reveal style={{ marginBottom: '56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: palette.eyebrow,
          whiteSpace: 'nowrap',
        }}>
          {index} — {eyebrow}
        </p>
        <span style={{ flex: 1, height: '1px', background: palette.rule }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        gap: '20px 64px',
        alignItems: 'end',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(34px, 4.6vw, 60px)',
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: '-0.035em',
          color: palette.title,
        }}>
          {title}
          {highlight && (
            <>
              {' '}
              <em style={{ color: palette.accent }}>{highlight}</em>
            </>
          )}
        </h2>
        {description && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            lineHeight: 1.7,
            color: palette.body,
            maxWidth: '420px',
          }}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}