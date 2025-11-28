import Link from 'next/link'
import './not-found.css'

export default function NotFound() {
  return (
    <main className="container">
      <div className="hero">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-subtitle">Page non trouvée</p>
        <p className="not-found-text">
          La page que vous recherchez semble avoir disparu dans les méandres de l&apos;écriture...
        </p>
        <Link href="/" className="not-found-link">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  )
}
