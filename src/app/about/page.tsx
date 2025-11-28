import { Metadata } from 'next'
import Link from 'next/link'
import './about.css'

export const metadata: Metadata = {
  title: 'À propos | La boite à écrire',
  description: 'Découvrez mon univers créatif et mes explorations littéraires',
}

export default function AboutPage() {
  return (
    <main className="container">
      <div className="about-content">
        <header className="about-header">
          <h1 className="about-title">À propos</h1>
          <p className="about-intro">
            Bienvenue dans mon espace dédié à l&apos;écriture, à la créativité et à
            l&apos;exploration des idées.
          </p>
        </header>

        <section className="about-section">
          <h2>Mon univers créatif</h2>
          <p>
            La boite à écrire est née d&apos;une passion pour les mots, les histoires et les idées.
            C&apos;est un espace où convergent fiction, recherche et réflexion sur notre monde en
            constante évolution.
          </p>
          <p>
            De la Renaissance italienne aux algorithmes d&apos;intelligence artificielle, mes
            projets explorent les facettes multiples de l&apos;expérience humaine, de la technologie
            et de la société.
          </p>
        </section>

        <section className="about-section">
          <h2>Mes domaines d&apos;exploration</h2>
          <div className="about-domains">
            <div className="domain-card">
              <div className="domain-icon">📚</div>
              <h3>Fiction</h3>
              <p>
                Thrillers technologiques et romans historiques qui interrogent le pouvoir, la
                surveillance et les intrigues de palais.
              </p>
            </div>

            <div className="domain-card">
              <div className="domain-icon">🔬</div>
              <h3>Recherche</h3>
              <p>
                Analyses approfondies sur l&apos;IA, les modèles de langage et leurs implications
                cognitives et sociales.
              </p>
            </div>

            <div className="domain-card">
              <div className="domain-icon">🎭</div>
              <h3>Dialogues créatifs</h3>
              <p>
                Exploration de nouvelles formes narratives et expérimentations avec les technologies
                émergentes.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Projets en cours</h2>
          <p>
            Actuellement, je travaille sur plusieurs projets passionnants qui mêlent technologie,
            histoire et créativité :
          </p>
          <ul className="projects-list">
            <li>
              <strong>DATASET</strong> - Un thriller contemporain sur les dérives de
              l&apos;intelligence artificielle
            </li>
            <li>
              <strong>La Conjuration</strong> - Un roman historique plongé dans les intrigues de la
              Renaissance italienne
            </li>
            <li>
              <strong>Le Syndrome du Perroquet</strong> - Une recherche sur les mécanismes
              d&apos;apprentissage dans les modèles de langage
            </li>
          </ul>
          <Link href="/projects" className="cta-link">
            Découvrir tous mes projets →
          </Link>
        </section>

        <section className="about-section">
          <h2>Ma vision</h2>
          <p>
            Je crois que l&apos;écriture est un outil puissant pour comprendre le monde, explorer
            des idées complexes et créer des ponts entre le passé, le présent et le futur.
          </p>
          <p>
            À travers mes projets, je cherche à questionner notre rapport à la technologie, au
            pouvoir et à l&apos;information, tout en racontant des histoires qui captivent et font
            réfléchir.
          </p>
        </section>

        <section className="about-section">
          <h2>Restons connectés</h2>
          <p>
            Ce site est un espace vivant qui évolue avec mes projets. N&apos;hésitez pas à explorer
            mes différents travaux et à suivre leur progression.
          </p>
          <div className="about-links">
            <Link href="/projects" className="about-link-button">
              Voir les projets
            </Link>
            <Link href="/blog" className="about-link-button">
              Lire le blog
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
