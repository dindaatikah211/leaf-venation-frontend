import Navbar from '@/src/shared/components/commons/Navbar'
import Footer from '@/src/shared/components/commons/Footer'
import ClassifyContent from '@/src/features/classify/components/ClassifyContent'

export default function ClassifyPage() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <Navbar />
      <ClassifyContent />
      <Footer />
    </div>
  )
}