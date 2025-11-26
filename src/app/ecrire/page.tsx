'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Editor from '@/components/Editor'
import { createWriting, updateWriting, getWritingById } from '@/lib/storage'
import { Writing } from '@/types/writing'
import styles from './page.module.css'

export default function EcrirePage() {
  const searchParams = useSearchParams()
  const writingId = searchParams.get('id')

  const [writing, setWriting] = useState<Writing | null>(null)
  const [title, setTitle] = useState('Sans titre')
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const saveTimeoutRef = useRef<NodeJS.Timeout>()

  // Charger ou créer l'écrit au montage
  useEffect(() => {
    if (writingId) {
      // Charger un écrit existant
      const existing = getWritingById(writingId)
      if (existing) {
        setWriting(existing)
        setTitle(existing.title)
      }
    } else {
      // Créer un nouvel écrit
      const newWriting = createWriting({
        title: 'Sans titre',
        content: '',
        wordCount: 0,
        charCount: 0,
      })
      setWriting(newWriting)

      // Mettre à jour l'URL avec l'ID du nouvel écrit
      window.history.replaceState({}, '', `/ecrire?id=${newWriting.id}`)
    }
  }, [writingId])

  // Sauvegarde automatique avec debounce
  const saveWriting = useCallback((content: string, wordCount: number, charCount: number) => {
    if (!writing) return

    // Annuler le timeout précédent
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current)
    }

    setIsSaving(true)

    // Sauvegarder après 1 seconde d'inactivité
    saveTimeoutRef.current = setTimeout(() => {
      updateWriting(writing.id, {
        content,
        title,
        wordCount,
        charCount,
      })
      setIsSaving(false)
      setLastSaved(new Date())
    }, 1000)
  }, [writing, title])

  // Sauvegarder le titre
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value || 'Sans titre'
    setTitle(newTitle)

    if (writing) {
      updateWriting(writing.id, { title: newTitle })
      setLastSaved(new Date())
    }
  }

  // Gérer les changements de contenu
  const handleContentChange = useCallback((content: string, wordCount: number, charCount: number) => {
    saveWriting(content, wordCount, charCount)
  }, [saveWriting])

  // Nettoyer le timeout au démontage
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }
    }
  }, [])

  if (!writing) {
    return <div className={styles.container}>Chargement...</div>
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className={styles.titleInput}
          placeholder="Titre de votre écrit"
        />
        <div className={styles.headerActions}>
          <span className={styles.saveStatus}>
            {isSaving ? (
              '💾 Sauvegarde...'
            ) : lastSaved ? (
              `✓ Sauvegardé ${formatLastSaved(lastSaved)}`
            ) : (
              ''
            )}
          </span>
          <a href="/" className={styles.link}>← Accueil</a>
        </div>
      </header>

      <main className={styles.main}>
        <Editor
          initialContent={writing.content}
          onContentChange={handleContentChange}
        />
      </main>
    </div>
  )
}

function formatLastSaved(date: Date): string {
  const now = new Date()
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diff < 10) return 'à l\'instant'
  if (diff < 60) return `il y a ${diff}s`
  if (diff < 3600) return `il y a ${Math.floor(diff / 60)}min`

  return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}
