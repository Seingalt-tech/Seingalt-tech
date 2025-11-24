import Navigation from '@/components/Navigation'
import styles from './manifeste.module.css'

export default function Manifeste() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Le Manifeste</h1>
            <p className={styles.subtitle}>
              Pourquoi l&apos;IA comme collaborateur d&apos;écriture devrait être acceptée
            </p>
          </header>

          <section className={styles.content}>
            <div className={styles.placeholder}>
              <h2>📜 Les 7 Principes</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>❓ FAQ</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>🔍 Transparence</h2>
              <p>Section à venir...</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
