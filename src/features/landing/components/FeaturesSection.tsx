import { Stagger, StaggerItem } from '@/src/shared/components/commons/Stagger'
import { CONTAINER } from '@/src/shared/constants/Layout'
import { FEATURES } from '../constants/Landing'
import SectionHeader from './SectionHeader'

const LIGHT = {
  background: '#fff',
  border: '1px solid var(--color-border)',
  title: 'var(--color-text-main)',
  sub: 'var(--color-text-light)',
  body: 'var(--color-text-muted)',
  iconBg: 'rgba(45,80,22,0.08)',
  icon: 'var(--color-primary)',
}

const DARK = {
  background: 'var(--color-primary)',
  border: '1px solid var(--color-primary)',
  title: '#F7F5F0',
  sub: 'rgba(255,255,255,0.5)',
  body: 'rgba(255,255,255,0.7)',
  iconBg: 'rgba(255,255,255,0.12)',
  icon: '#F7F5F0',
}

const TONES = [LIGHT, LIGHT, LIGHT, DARK]
const SPANS = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-4']

export default function FeaturesSection() {
  return (
    <section style={{ background: 'var(--color-bg)', padding: '120px 24px' }}>
      <div style={CONTAINER}>

        <SectionHeader
          index="03"
          eyebrow="Fitur · Features"
          title="Sederhana namun"
          highlight="powerful."
          description="Dirancang supaya kamu bisa fokus pada daunnya, bukan pada aplikasinya."
        />

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {FEATURES.map(({ icon: Icon, title, titleEn, desc }, index) => {
            const tone = TONES[index % TONES.length]
            return (
              <StaggerItem key={title} className={SPANS[index % SPANS.length]} whileHover={{ y: -6 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '56px',
                  height: '100%',
                  minHeight: '240px',
                  padding: '32px',
                  borderRadius: '24px',
                  border: tone.border,
                  background: tone.background,
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: tone.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={18} color={tone.icon} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '24px', letterSpacing: '-0.02em', color: tone.title, marginBottom: '2px' }}>
                      {title}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontStyle: 'italic', color: tone.sub, marginBottom: '12px' }}>
                      {titleEn}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.65, color: tone.body, maxWidth: '440px' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>

      </div>
    </section>
  )
}