import { Stagger, StaggerItem } from '@/src/shared/components/commons/Stagger'
import { CONTAINER } from '@/src/shared/constants/Layout'
import { HOW_IT_WORKS } from '../constants/Landing'
import SectionHeader from './SectionHeader'

export default function HowItWorks() {
  return (
    <section style={{ background: 'var(--color-bg)', padding: '120px 24px 0' }}>
      <div style={CONTAINER}>

        <SectionHeader
          index="02"
          eyebrow="Cara Kerja · How it works"
          title="Tiga langkah,"
          highlight="satu foto."
          description="Dari foto sampai hasil, semuanya terjadi dalam satu halaman tanpa perlu membuat akun."
        />

        <Stagger style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '20px',
        }}>
          {HOW_IT_WORKS.map(({ step, icon: Icon, title, titleEn, desc }) => (
            <StaggerItem key={step} style={{ height: '100%' }}>
              <div style={{
                position: 'relative',
                height: '100%',
                padding: '32px',
                borderRadius: '24px',
                border: '1px solid var(--color-border)',
                background: '#fff',
                overflow: 'hidden',
              }}>
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '24px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '88px',
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                  color: 'rgba(45,80,22,0.07)',
                }}>
                  {step}
                </span>

                <div style={{
                  position: 'relative',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(45,80,22,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '72px',
                }}>
                  <Icon size={18} color="var(--color-primary)" />
                </div>

                <p style={{ fontFamily: 'var(--font-display)', fontSize: '24px', letterSpacing: '-0.02em', color: 'var(--color-text-main)', marginBottom: '2px' }}>
                  {title}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontStyle: 'italic', color: 'var(--color-text-light)', marginBottom: '14px' }}>
                  {titleEn}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.65, color: 'var(--color-text-muted)' }}>
                  {desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  )
}