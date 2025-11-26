import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>La boite à écrire</h1>
        <p className="subtitle">Un espace dédié à l'écriture et à la créativité littéraire</p>
      </div>

      <section className="content">
        <div className="card">
          <h2>📝 Commencer à écrire</h2>
          <p>
            Laissez libre cours à votre créativité. Créez vos histoires, poèmes,
            essais ou tout ce qui vous inspire.
          </p>
          <Link href="/ecrire" className="button">
            Nouvelle écriture
          </Link>
        </div>

        <div className="card">
          <h2>📚 Mes écrits</h2>
          <p>
            Retrouvez et organisez tous vos textes. Suivez votre progression
            et revisitez vos créations.
          </p>
          <Link href="/bibliotheque" className="button secondary">
            Ma bibliothèque
          </Link>
        </div>
      </section>
    </main>
  )
}
