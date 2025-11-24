import Navigation from '@/components/Navigation'
import styles from './roman.module.css'

export default function Roman() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>La Conjuration</h1>
            <p className={styles.subtitle}>
              Un roman historique écrit avec l&apos;assistance de l&apos;IA
            </p>
          </header>

          <section className={styles.content}>
            <div className={styles.placeholder}>
              <h2>📝 Synopsis</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>📄 Extraits</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>📚 4 Formats Disponibles</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>⚙️ Processus de Création</h2>
              <p>Section à venir...</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
