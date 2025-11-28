import { Metadata } from 'next'
import Link from 'next/link'
import './blog.css'

export const metadata: Metadata = {
  title: 'Blog | La boite à écrire',
  description: "Réflexions sur l'écriture, la technologie et la créativité",
}

export default function BlogPage() {
  return (
    <main className="container">
      <div className="blog-content">
        <header className="blog-header">
          <h1>Blog</h1>
          <p className="subtitle">
            Réflexions sur l&apos;écriture, la technologie et la créativité
          </p>
        </header>

        <section className="blog-coming-soon">
          <div className="coming-soon-icon">✍️</div>
          <h2>Bientôt disponible</h2>
          <p>
            Le blog est en cours de préparation. Vous y trouverez prochainement des articles sur :
          </p>

          <div className="blog-topics">
            <div className="topic-card">
              <h3>🤖 Intelligence Artificielle</h3>
              <p>
                Réflexions sur les modèles de langage, leurs capacités et leurs limites, inspirées
                de mes recherches sur le Syndrome du Perroquet.
              </p>
            </div>

            <div className="topic-card">
              <h3>📖 Processus créatif</h3>
              <p>
                Partage de mon expérience d&apos;écriture, des défis rencontrés et des techniques
                utilisées pour mes différents projets.
              </p>
            </div>

            <div className="topic-card">
              <h3>🔍 Recherche historique</h3>
              <p>
                Notes et découvertes issues de mes recherches pour La Conjuration et autres projets
                historiques.
              </p>
            </div>

            <div className="topic-card">
              <h3>💡 Technologie & Société</h3>
              <p>
                Analyses sur l&apos;impact de la technologie sur notre société, inspirées de DATASET
                et de l&apos;actualité.
              </p>
            </div>
          </div>

          <div className="blog-cta">
            <p>En attendant, découvrez mes projets en cours :</p>
            <Link href="/projects" className="cta-button">
              Voir les projets
            </Link>
          </div>
        </section>

        <section className="blog-future">
          <h2>À venir</h2>
          <div className="future-feature">
            <div className="feature-icon">📝</div>
            <div className="feature-content">
              <h3>Intégration Notion</h3>
              <p>
                Les articles seront synchronisés automatiquement depuis Notion, permettant une
                publication fluide et une gestion simplifiée du contenu.
              </p>
            </div>
          </div>

          <div className="future-feature">
            <div className="feature-icon">🏷️</div>
            <div className="feature-content">
              <h3>Système de tags</h3>
              <p>
                Navigation facilitée par thématiques : fiction, recherche, technologie, histoire,
                etc.
              </p>
            </div>
          </div>

          <div className="future-feature">
            <div className="feature-icon">🔔</div>
            <div className="feature-content">
              <h3>Notifications</h3>
              <p>Recevez une notification lors de la publication de nouveaux articles.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
