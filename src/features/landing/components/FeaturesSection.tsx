import { Card, CardContent } from '@/src/shared/components/ui/card'
import { FEATURES } from '../constants/Landing'

export default function FeaturesSection() {
  return (
    <section style={{ background: 'var(--color-bg)', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-text-light)',
            fontFamily: 'var(--font-body)',
            marginBottom: '12px',
          }}>
            Fitur · Features
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 400,
            letterSpacing: '-1px',
            color: 'var(--color-text-main)',
          }}>
            Sederhana namun{' '}
            <em style={{ color: 'var(--color-primary-mid)' }}>powerful.</em>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {FEATURES.map(({ icon: Icon, title, titleEn, desc }) => (
            <Card key={title} style={{
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              background: '#fff',
              boxShadow: 'none',
            }}>
              <CardContent style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(45,80,22,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} color="var(--color-primary)" />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--color-text-main)', marginBottom: '2px' }}>
                    {title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontStyle: 'italic', color: 'var(--color-text-light)', marginBottom: '10px' }}>
                    {titleEn}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                    {desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}