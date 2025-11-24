import type { Metadata } from 'next'
import { Crimson_Text, Inter } from 'next/font/google'
import './globals.css'

const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'La boite à écrire',
  description: 'Un espace dédié à l\'écriture et à la créativité littéraire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${crimsonText.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
