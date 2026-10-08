import Navbar from '@/src/shared/components/commons/Navbar'
import Footer from '@/src/shared/components/commons/Footer'
import LearnHero from '@/src/features/learn/components/LearnHero'
import VenationCard from '@/src/features/learn/components/VenationCard'
import { LEARN_VENATIONS } from '@/src/features/learn/constants/Learn'

export default function LearnPage() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <Navbar />
      <LearnHero />
      <section style={{ padding: '20px 24px 100px' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          {LEARN_VENATIONS.map((venation) => (
            <VenationCard key={venation.id} {...venation} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}