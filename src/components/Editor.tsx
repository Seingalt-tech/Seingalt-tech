'use client'

import { useState, useEffect } from 'react'
import styles from './Editor.module.css'

interface EditorProps {
  initialContent?: string
  onContentChange?: (content: string, wordCount: number, charCount: number) => void
}

export default function Editor({ initialContent = '', onContentChange }: EditorProps) {
  const [content, setContent] = useState(initialContent)
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    // Calculer le nombre de mots et de caractères
    const words = content.trim().split(/\s+/).filter(word => word.length > 0)
    const newWordCount = words.length
    const newCharCount = content.length

    setWordCount(newWordCount)
    setCharCount(newCharCount)

    // Notifier le parent avec les stats
    onContentChange?.(content, newWordCount, newCharCount)
  }, [content, onContentChange])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
  }

  return (
    <div className={styles.editorContainer}>
      <div className={styles.toolbar}>
        <div className={styles.stats}>
          <span className={styles.stat}>
            <strong>{wordCount}</strong> {wordCount <= 1 ? 'mot' : 'mots'}
          </span>
          <span className={styles.stat}>
            <strong>{charCount}</strong> {charCount <= 1 ? 'caractère' : 'caractères'}
          </span>
        </div>
      </div>

      <textarea
        className={styles.editor}
        value={content}
        onChange={handleChange}
        placeholder="Commencez à écrire votre histoire..."
        spellCheck="true"
      />
    </div>
  )
}
