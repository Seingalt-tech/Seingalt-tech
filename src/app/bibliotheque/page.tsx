'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllWritings, deleteWriting } from '@/lib/storage'
import { Writing } from '@/types/writing'
import styles from './page.module.css'

export default function BibliotequePage() {
  const [writings, setWritings] = useState<Writing[]>([])
  const [sortBy, setSortBy] = useState<'recent' | 'oldest' | 'title'>('recent')

  useEffect(() => {
    loadWritings()
  }, [sortBy])

  const loadWritings = () => {
    let allWritings = getAllWritings()

    // Trier les écrits
    switch (sortBy) {
      case 'recent':
        allWritings.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
        break
      case 'oldest':
        allWritings.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        break
      case 'title':
        allWritings.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    setWritings(allWritings)
  }

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Êtes-vous sûr de vouloir supprimer "${title}" ?`)) {
      deleteWriting(id)
      loadWritings()
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h1 className={styles.title}>Ma bibliothèque</h1>
          <Link href="/" className={styles.link}>← Accueil</Link>
        </div>

        <div className={styles.headerActions}>
          <div className={styles.stats}>
            <span className={styles.stat}>
              <strong>{writings.length}</strong> {writings.length <= 1 ? 'écrit' : 'écrits'}
            </span>
            <span className={styles.stat}>
              <strong>{writings.reduce((sum, w) => sum + w.wordCount, 0).toLocaleString()}</strong> mots au total
            </span>
          </div>

          <div className={styles.controls}>
            <label htmlFor="sort" className={styles.label}>Trier par :</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className={styles.select}
            >
              <option value="recent">Plus récents</option>
              <option value="oldest">Plus anciens</option>
              <option value="title">Titre (A-Z)</option>
            </select>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {writings.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyIcon}>📝</p>
            <h2 className={styles.emptyTitle}>Aucun écrit pour le moment</h2>
            <p className={styles.emptyText}>
              Commencez à écrire pour voir vos créations apparaître ici.
            </p>
            <Link href="/ecrire" className={styles.button}>
              Commencer à écrire
            </Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {writings.map((writing) => (
              <article key={writing.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{writing.title}</h3>
                  <time className={styles.cardDate}>
                    {formatDate(writing.updatedAt)}
                  </time>
                </div>

                <p className={styles.cardPreview}>
                  {writing.content.substring(0, 150) || 'Aucun contenu'}
                  {writing.content.length > 150 && '...'}
                </p>

                <div className={styles.cardFooter}>
                  <div className={styles.cardStats}>
                    <span>{writing.wordCount} mots</span>
                    <span>·</span>
                    <span>{writing.charCount} caractères</span>
                  </div>

                  <div className={styles.cardActions}>
                    <Link
                      href={`/ecrire?id=${writing.id}`}
                      className={styles.cardButton}
                    >
                      Ouvrir
                    </Link>
                    <button
                      onClick={() => handleDelete(writing.id, writing.title)}
                      className={`${styles.cardButton} ${styles.cardButtonDanger}`}
                      title="Supprimer"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diff < 60) return 'À l\'instant'
  if (diff < 3600) return `Il y a ${Math.floor(diff / 60)} min`
  if (diff < 86400) return `Il y a ${Math.floor(diff / 3600)}h`

  const days = Math.floor(diff / 86400)
  if (days === 1) return 'Hier'
  if (days < 7) return `Il y a ${days} jours`

  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  })
}
