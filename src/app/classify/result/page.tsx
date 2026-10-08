import Navbar from '@/src/shared/components/commons/Navbar'
import Footer from '@/src/shared/components/commons/Footer'
import ResultContent from '@/src/features/classify/result/components/ResultContent'

export default function ResultPage() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <Navbar />
      <ResultContent />
      <Footer />
    </div>
  )
}