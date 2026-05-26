import { VENATION_TYPES } from '../constants/Landing'

export default function VenationGrid() {
  return (
    <section style={{ background: 'var(--color-bg-dark)', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ marginBottom: '52px' }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'var(--font-body)',
            marginBottom: '12px',
          }}>
            4 Jenis Tulang Daun · 4 Venation Types
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 400,
            color: '#F7F5F0',
            letterSpacing: '-1px',
          }}>
            Yang bisa kami kenali.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          {VENATION_TYPES.map(({ name, latin, desc, example, color }) => (
            <div key={name} style={{
              background: 'var(--color-bg-dark)',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: color,
                flexShrink: 0,
              }} />
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#F7F5F0', marginBottom: '2px' }}>
                  {name}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontStyle: 'italic', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
                  {latin}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '10px' }}>
                  {desc}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>
                  Contoh: {example}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}