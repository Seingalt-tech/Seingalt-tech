export type ProjectStatus = 'en-cours' | 'planifie' | 'complete' | 'en-pause'

export type ProjectCategory = 'fiction' | 'non-fiction' | 'technique' | 'recherche' | 'personnel'

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription?: string
  status: ProjectStatus
  category: ProjectCategory
  tags: string[]
  startDate: string
  endDate?: string
  coverImage?: string
  progress?: number // 0-100
  links?: {
    notion?: string
    github?: string
    website?: string
  }
  createdAt: string
  updatedAt: string
}

export interface ProjectFormData {
  title: string
  description: string
  longDescription?: string
  status: ProjectStatus
  category: ProjectCategory
  tags: string[]
  coverImage?: string
}
