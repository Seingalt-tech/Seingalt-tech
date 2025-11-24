import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        {/* Hero Split Screen */}
        <section className={styles.hero}>
          <div className={styles.splitContainer}>
            <div className={styles.splitLeft}>
              <div className={styles.imageOverlay}>
                <div className={styles.imageContent}>
                  <h3>Alexandre Dumas</h3>
                  <h4>+ Auguste Maquet</h4>
                  <span className={styles.year}>1850</span>
                </div>
              </div>
            </div>
            <div className={styles.splitRight}>
              <div className={styles.imageOverlay}>
                <div className={styles.imageContent}>
                  <h3>Olivier</h3>
                  <h4>+ Intelligence Artificielle</h4>
                  <span className={styles.year}>2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroMessage}>
            <h1 className={styles.heroTitle}>
              &quot;L&apos;IA est le Maquet du 21ème Siècle&quot;
            </h1>
            <p className={styles.heroSubtitle}>
              Dumas accepté. Olivier aussi.
            </p>
            <Link href="/manifeste" className={styles.btnPrimary}>
              EXPLORER LA QUESTION
            </Link>
          </div>
        </section>

        {/* Comparison Section */}
        <section className={styles.comparison}>
          <div className={styles.compareCard}>
            <div className={styles.compareYear}>1844</div>
            <div className={styles.compareLine}></div>
            <div className={styles.compareContent}>
              <h3>Dumas + Maquet</h3>
              <p className={styles.compareWork}>Les Trois Mousquetaires</p>
              <div className={styles.compareStatus}>
                <span className={styles.statusIcon}>✓</span>
                <span className={styles.statusText}>ACCEPTÉ</span>
              </div>
            </div>
          </div>

          <div className={`${styles.compareCard} ${styles.compareCardRight}`}>
            <div className={styles.compareYear}>2025</div>
            <div className={styles.compareLine}></div>
            <div className={styles.compareContent}>
              <h3>Olivier + IA</h3>
              <p className={styles.compareWork}>La Conjuration</p>
              <div className={`${styles.compareStatus} ${styles.statusSuspect}`}>
                <span className={styles.statusIcon}>?</span>
                <span className={styles.statusText}>SUSPECTE ???</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className={styles.ctas}>
          <Link href="/manifeste" className={styles.ctaButton}>
            <span className={styles.ctaIcon}>📜</span>
            <span className={styles.ctaText}>Lire le Manifeste</span>
          </Link>
          <Link href="/maquet" className={styles.ctaButton}>
            <span className={styles.ctaIcon}>🎭</span>
            <span className={styles.ctaText}>Découvrir Maquet</span>
          </Link>
          <Link href="/roman" className={styles.ctaButton}>
            <span className={styles.ctaIcon}>📖</span>
            <span className={styles.ctaText}>Lire le Roman</span>
          </Link>
        </section>
      </main>
    </>
  )
}
