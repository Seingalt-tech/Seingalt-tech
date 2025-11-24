import Navigation from '@/components/Navigation'
import styles from './maquet.module.css'

export default function Maquet() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Auguste Maquet</h1>
            <p className={styles.subtitle}>
              Le collaborateur oublié d&apos;Alexandre Dumas
            </p>
          </header>

          <section className={styles.content}>
            <div className={styles.placeholder}>
              <h2>📖 Biographie</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>📊 Tableau Interactif</h2>
              <p>Section à venir...</p>
            </div>

            <div className={styles.placeholder}>
              <h2>⏳ Timeline</h2>
              <p>Section à venir...</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
