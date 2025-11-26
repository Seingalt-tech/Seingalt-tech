import { Writing, WritingCreate, WritingUpdate } from '@/types/writing'

const STORAGE_KEY = 'la-boite-a-ecrire:writings'

/**
 * Génère un ID unique simple
 */
function generateId(): string {
  return `writing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Récupère tous les écrits depuis le localStorage
 */
export function getAllWritings(): Writing[] {
  if (typeof window === 'undefined') return []

  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Erreur lors de la récupération des écrits:', error)
    return []
  }
}

/**
 * Récupère un écrit par son ID
 */
export function getWritingById(id: string): Writing | null {
  const writings = getAllWritings()
  return writings.find(w => w.id === id) || null
}

/**
 * Sauvegarde tous les écrits dans le localStorage
 */
function saveAllWritings(writings: Writing[]): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(writings))
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des écrits:', error)
  }
}

/**
 * Crée un nouvel écrit
 */
export function createWriting(data: WritingCreate): Writing {
  const now = new Date().toISOString()
  const writing: Writing = {
    id: generateId(),
    ...data,
    createdAt: now,
    updatedAt: now,
  }

  const writings = getAllWritings()
  writings.push(writing)
  saveAllWritings(writings)

  return writing
}

/**
 * Met à jour un écrit existant
 */
export function updateWriting(id: string, updates: WritingUpdate): Writing | null {
  const writings = getAllWritings()
  const index = writings.findIndex(w => w.id === id)

  if (index === -1) return null

  const updated: Writing = {
    ...writings[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  writings[index] = updated
  saveAllWritings(writings)

  return updated
}

/**
 * Supprime un écrit
 */
export function deleteWriting(id: string): boolean {
  const writings = getAllWritings()
  const filtered = writings.filter(w => w.id !== id)

  if (filtered.length === writings.length) return false

  saveAllWritings(filtered)
  return true
}

/**
 * Sauvegarde automatique d'un écrit en cours
 */
export function autoSaveWriting(id: string, content: string, title: string, wordCount: number, charCount: number): void {
  updateWriting(id, { content, title, wordCount, charCount })
}
