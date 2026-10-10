import Navbar from '@/src/shared/components/commons/Navbar'
import Footer from '@/src/shared/components/commons/Footer'
import LearnHero from '@/src/features/learn/components/LearnHero'
import VenationCard from '@/src/features/learn/components/VenationCard'
import { LEARN_VENATIONS } from '@/src/features/learn/constants/Learn'
import { CONTAINER } from '@/src/shared/constants/Layout'

export default function LearnPage() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <Navbar />
      <LearnHero />
      <section style={{ padding: '0 24px 120px' }}>
        <div style={CONTAINER}>
          {LEARN_VENATIONS.map((venation, index) => (
            <VenationCard key={venation.id} index={index} {...venation} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}