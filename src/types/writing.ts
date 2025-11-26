export interface Writing {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  wordCount: number
  charCount: number
}

export type WritingCreate = Omit<Writing, 'id' | 'createdAt' | 'updatedAt'>
export type WritingUpdate = Partial<Omit<Writing, 'id' | 'createdAt'>>
