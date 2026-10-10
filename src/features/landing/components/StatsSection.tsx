import CountUp from '@/src/shared/components/commons/CountUp'
import Reveal from '@/src/shared/components/commons/Reveal'
import { STATS } from '../constants/Landing'

export default function StatsSection() {
  return (
    <section style={{ background: '#fff', padding: '100px 24px' }}>
      <Reveal y={48}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1px',
          background: 'var(--color-border)',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
        }}>
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ background: '#fff', padding: '48px 32px', textAlign: 'center', position: 'relative' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 6vw, 72px)',
                fontWeight: 400,
                color: 'var(--color-primary)',
                letterSpacing: '-2px',
                lineHeight: 1,
                marginBottom: '8px',
                fontVariantNumeric: 'tabular-nums',
              }}>
                <CountUp value={value} />
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.05em',
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}