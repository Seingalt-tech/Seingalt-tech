import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
