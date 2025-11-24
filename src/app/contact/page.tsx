import Navigation from '@/components/Navigation'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Contact</h1>
            <p className={styles.subtitle}>
              Rejoignez la conversation autour de l&apos;IA et l&apos;écriture
            </p>
          </header>

          <section className={styles.content}>
            <div className={styles.placeholder}>
              <h2>📧 Newsletter</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>🌐 Réseaux Sociaux</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>💬 Discord</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>✉️ Contact Direct</h2>
              <p>Section à venir...</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
