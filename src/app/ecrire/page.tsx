'use client'

import { useState } from 'react'
import Editor from '@/components/Editor'
import styles from './page.module.css'

export default function EcrirePage() {
  const [content, setContent] = useState('')

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
    // La sauvegarde automatique sera ajoutée dans la prochaine étape
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Nouvelle écriture</h1>
        <nav className={styles.nav}>
          <a href="/" className={styles.link}>← Accueil</a>
        </nav>
      </header>

      <main className={styles.main}>
        <Editor
          initialContent={content}
          onContentChange={handleContentChange}
        />
      </main>
    </div>
  )
}
