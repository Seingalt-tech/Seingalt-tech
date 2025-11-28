import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    title: 'DATASET',
    slug: 'dataset',
    description:
      "Un thriller contemporain explorant les dérives de l'IA et la surveillance de masse.",
    longDescription:
      "DATASET est un thriller technologique qui suit une journaliste d'investigation découvrant un réseau de surveillance basé sur l'intelligence artificielle. Le roman explore les questions d'éthique, de vie privée et de contrôle social à l'ère du Big Data.",
    status: 'en-cours',
    category: 'fiction',
    tags: ['thriller', 'technologie', 'IA', 'surveillance'],
    startDate: '2024-01-15',
    progress: 45,
    links: {
      notion: 'https://notion.so/dataset-project',
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2025-11-28T10:00:00Z',
  },
  {
    id: '2',
    title: 'La Conjuration',
    slug: 'la-conjuration',
    description: 'Roman historique sur les complots et intrigues de la Renaissance italienne.',
    longDescription:
      'Un roman historique se déroulant dans la Florence du XVe siècle, explorant les machinations politiques, les complots de palais et les luttes de pouvoir entre les grandes familles italiennes.',
    status: 'planifie',
    category: 'fiction',
    tags: ['historique', 'Renaissance', 'Italie', 'politique'],
    startDate: '2024-06-01',
    progress: 15,
    links: {
      notion: 'https://notion.so/la-conjuration',
    },
    createdAt: '2024-06-01T10:00:00Z',
    updatedAt: '2025-11-20T10:00:00Z',
  },
  {
    id: '3',
    title: 'Le Syndrome du Perroquet',
    slug: 'syndrome-du-perroquet',
    description:
      "Exploration des mécanismes d'apprentissage et de répétition dans les modèles de langage.",
    longDescription:
      "Une analyse approfondie du phénomène de régurgitation dans les systèmes d'IA, inspirée des travaux d'Alexander von Humboldt sur la perception et la cognition. Le projet explore comment les modèles de langage reproduisent sans comprendre.",
    status: 'en-cours',
    category: 'recherche',
    tags: ['IA', 'linguistique', 'cognition', 'Humboldt'],
    startDate: '2024-03-10',
    progress: 60,
    links: {
      notion: 'https://notion.so/syndrome-perroquet',
    },
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2025-11-27T10:00:00Z',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter((project) => project.status === status)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category)
}
