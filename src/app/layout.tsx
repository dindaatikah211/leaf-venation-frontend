import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/src/shared/components/commons/Providers'

export const metadata: Metadata = {
  title: 'VenaLeaf',
  description: 'Identifikasi jenis tulang daun dengan kecerdasan buatan. Menyirip, menjari, melengkung, dan sejajar.',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}