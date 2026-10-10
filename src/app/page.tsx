import Navbar from '../shared/components/commons/Navbar'
import Footer from '../shared/components/commons/Footer'
import Hero from '../features/landing/components/Hero'
import VenationGrid from '../features/landing/components/VenationGrid'
import HowItWorks from '../features/landing/components/HowItWorks'
import FeaturesSection from '../features/landing/components/FeaturesSection'
import StatsSection from '../features/landing/components/StatsSection'
import CTASection from '../features/landing/components/CTASection'

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <Navbar />
      <Hero />
      <VenationGrid />
      <HowItWorks />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  )
}