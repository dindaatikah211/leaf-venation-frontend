import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}