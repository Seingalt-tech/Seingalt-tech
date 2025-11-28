/**
 * Configuration Notion API
 *
 * Pour utiliser cette intégration :
 *
 * 1. Installer le SDK Notion :
 *    npm install @notionhq/client
 *
 * 2. Créer une intégration Notion :
 *    - Aller sur https://www.notion.so/my-integrations
 *    - Cliquer sur "New integration"
 *    - Donner un nom (ex: "La boite à écrire")
 *    - Copier le "Internal Integration Token"
 *
 * 3. Configurer les variables d'environnement :
 *    - Copier .env.example vers .env.local
 *    - Ajouter votre NOTION_API_KEY
 *
 * 4. Partager vos databases avec l'intégration :
 *    - Ouvrir votre database Notion
 *    - Cliquer sur "..." en haut à droite
 *    - Cliquer sur "Add connections"
 *    - Sélectionner votre intégration
 *
 * 5. Récupérer les IDs de vos databases :
 *    - L'ID est dans l'URL : notion.so/workspace/DATABASE_ID?v=...
 *    - Ajouter ces IDs dans .env.local
 */

// Décommentez pour activer l'intégration Notion
// import { Client } from '@notionhq/client'

// export const notion = new Client({
//   auth: process.env.NOTION_API_KEY,
// })

/**
 * Exemple de fonction pour récupérer les projets depuis Notion
 *
 * Structure attendue dans Notion :
 * - title (Title)
 * - description (Rich Text)
 * - status (Select: "en-cours", "planifie", "complete", "en-pause")
 * - category (Select: "fiction", "non-fiction", "technique", "recherche", "personnel")
 * - tags (Multi-select)
 * - startDate (Date)
 * - progress (Number 0-100)
 */

// export async function getProjectsFromNotion() {
//   if (!process.env.NOTION_PROJECTS_DATABASE_ID) {
//     console.warn('NOTION_PROJECTS_DATABASE_ID non configuré')
//     return []
//   }
//
//   const response = await notion.databases.query({
//     database_id: process.env.NOTION_PROJECTS_DATABASE_ID,
//     sorts: [
//       {
//         property: 'startDate',
//         direction: 'descending',
//       },
//     ],
//   })
//
//   return response.results.map((page: any) => {
//     const properties = page.properties
//
//     return {
//       id: page.id,
//       title: properties.title.title[0]?.plain_text || '',
//       slug: properties.title.title[0]?.plain_text.toLowerCase().replace(/\s+/g, '-') || '',
//       description: properties.description.rich_text[0]?.plain_text || '',
//       status: properties.status.select?.name || 'planifie',
//       category: properties.category.select?.name || 'personnel',
//       tags: properties.tags.multi_select.map((tag: any) => tag.name),
//       startDate: properties.startDate.date?.start || new Date().toISOString(),
//       progress: properties.progress?.number || 0,
//       createdAt: page.created_time,
//       updatedAt: page.last_edited_time,
//     }
//   })
// }

/**
 * Exemple de fonction pour récupérer les articles de blog depuis Notion
 *
 * Structure attendue dans Notion :
 * - title (Title)
 * - content (Rich Text ou Content property)
 * - published (Checkbox)
 * - publishDate (Date)
 * - tags (Multi-select)
 * - excerpt (Rich Text)
 */

// export async function getBlogPostsFromNotion() {
//   if (!process.env.NOTION_BLOG_DATABASE_ID) {
//     console.warn('NOTION_BLOG_DATABASE_ID non configuré')
//     return []
//   }
//
//   const response = await notion.databases.query({
//     database_id: process.env.NOTION_BLOG_DATABASE_ID,
//     filter: {
//       property: 'published',
//       checkbox: {
//         equals: true,
//       },
//     },
//     sorts: [
//       {
//         property: 'publishDate',
//         direction: 'descending',
//       },
//     ],
//   })
//
//   return response.results.map((page: any) => {
//     const properties = page.properties
//
//     return {
//       id: page.id,
//       title: properties.title.title[0]?.plain_text || '',
//       slug: properties.title.title[0]?.plain_text.toLowerCase().replace(/\s+/g, '-') || '',
//       excerpt: properties.excerpt.rich_text[0]?.plain_text || '',
//       tags: properties.tags.multi_select.map((tag: any) => tag.name),
//       publishDate: properties.publishDate.date?.start || new Date().toISOString(),
//       createdAt: page.created_time,
//       updatedAt: page.last_edited_time,
//     }
//   })
// }

// Pour obtenir le contenu complet d'une page :
// export async function getPageContent(pageId: string) {
//   const response = await notion.blocks.children.list({
//     block_id: pageId,
//   })
//   return response.results
// }

export {}
