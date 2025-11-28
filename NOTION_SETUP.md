# 🔗 Guide d'Intégration Notion API

Ce guide vous explique comment connecter votre site à Notion pour synchroniser automatiquement vos projets et articles de blog.

## 📋 Prérequis

- Un compte Notion
- Des databases Notion pour vos projets et articles
- Accès aux paramètres de votre workspace Notion

## 🚀 Étape 1 : Installation du SDK Notion

```bash
npm install @notionhq/client
```

## 🔑 Étape 2 : Créer une Intégration Notion

1. Aller sur [My Integrations](https://www.notion.so/my-integrations)
2. Cliquer sur **"New integration"**
3. Remplir les informations :
   - **Name** : "La boite à écrire" (ou le nom de votre choix)
   - **Associated workspace** : Sélectionner votre workspace
   - **Type** : Internal
4. Cliquer sur **"Submit"**
5. **Copier le "Internal Integration Token"** (commence par `secret_`)

## 📝 Étape 3 : Configurer les Variables d'Environnement

1. Créer un fichier `.env.local` à la racine du projet :

```bash
cp .env.example .env.local
```

2. Ouvrir `.env.local` et ajouter votre token :

```env
NOTION_API_KEY=secret_votre_token_ici
```

## 🗂️ Étape 4 : Créer les Databases Notion

### Database "Projets"

Créer une nouvelle database avec les propriétés suivantes :

| Nom         | Type         | Options                                                        |
| ----------- | ------------ | -------------------------------------------------------------- |
| title       | Title        | -                                                              |
| description | Rich Text    | -                                                              |
| status      | Select       | "en-cours", "planifie", "complete", "en-pause"                 |
| category    | Select       | "fiction", "non-fiction", "technique", "recherche", "personnel" |
| tags        | Multi-select | Créer les tags selon vos besoins                               |
| startDate   | Date         | -                                                              |
| progress    | Number       | Format: 0-100                                                  |

### Database "Blog"

Créer une nouvelle database avec les propriétés suivantes :

| Nom         | Type         | Options                          |
| ----------- | ------------ | -------------------------------- |
| title       | Title        | -                                |
| excerpt     | Rich Text    | Court résumé de l'article        |
| published   | Checkbox     | Cocher pour publier l'article    |
| publishDate | Date         | -                                |
| tags        | Multi-select | Créer les tags selon vos besoins |
| content     | -            | Le contenu de votre page Notion  |

## 🔗 Étape 5 : Connecter les Databases à l'Intégration

Pour chaque database :

1. Ouvrir la database dans Notion
2. Cliquer sur **"..."** en haut à droite
3. Sélectionner **"Add connections"**
4. Chercher et sélectionner votre intégration ("La boite à écrire")
5. Cliquer sur **"Confirm"**

## 🆔 Étape 6 : Récupérer les IDs des Databases

1. Ouvrir votre database dans Notion
2. Regarder l'URL dans votre navigateur :
   ```
   https://www.notion.so/votreespace/DATABASE_ID?v=...
   ```
3. Copier la partie `DATABASE_ID` (32 caractères)
4. Ajouter dans `.env.local` :

```env
NOTION_PROJECTS_DATABASE_ID=votre_id_projets_ici
NOTION_BLOG_DATABASE_ID=votre_id_blog_ici
```

## 🔓 Étape 7 : Activer l'Intégration dans le Code

Dans le fichier `src/lib/notion.ts`, décommenter le code :

```typescript
// Décommenter ces lignes :
import { Client } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

// Décommenter aussi les fonctions getProjectsFromNotion() et getBlogPostsFromNotion()
```

## 📊 Étape 8 : Utiliser les Données Notion dans vos Pages

### Pour la page Projets

Modifier `src/app/projects/page.tsx` :

```typescript
import { getProjectsFromNotion } from '@/lib/notion'

export default async function ProjectsPage() {
  const projects = await getProjectsFromNotion()

  // Le reste du code...
}
```

### Pour la page Blog

Modifier `src/app/blog/page.tsx` :

```typescript
import { getBlogPostsFromNotion } from '@/lib/notion'

export default async function BlogPage() {
  const posts = await getBlogPostsFromNotion()

  // Le reste du code...
}
```

## 🧪 Étape 9 : Tester

1. Ajouter quelques entrées de test dans vos databases Notion
2. Lancer le serveur de développement :

```bash
npm run dev
```

3. Aller sur `http://localhost:3000/projects` pour voir vos projets
4. Aller sur `http://localhost:3000/blog` pour voir vos articles

## 🔄 Revalidation et Cache

Par défaut, Next.js met en cache les données. Pour actualiser automatiquement :

```typescript
export const revalidate = 3600 // Revalider toutes les heures
```

Ou pour forcer la revalidation à chaque requête :

```typescript
export const dynamic = 'force-dynamic'
```

## ⚠️ Troubleshooting

### Erreur "Unauthorized"

- Vérifier que votre `NOTION_API_KEY` est correcte
- Vérifier que vous avez bien partagé la database avec votre intégration

### Erreur "object_not_found"

- Vérifier que le `DATABASE_ID` est correct
- Vérifier que la database est bien partagée avec l'intégration

### Les propriétés ne s'affichent pas

- Vérifier que les noms des propriétés dans Notion correspondent exactement au code
- Notion est sensible à la casse (majuscules/minuscules)

## 📚 Ressources

- [Documentation Notion API](https://developers.notion.com/)
- [SDK JavaScript/TypeScript](https://github.com/makenotion/notion-sdk-js)
- [Exemples d'intégration](https://developers.notion.com/docs/getting-started)

## 🎉 C'est Terminé !

Votre site est maintenant connecté à Notion. Chaque fois que vous modifierez vos databases Notion, les changements apparaîtront sur votre site (selon votre configuration de revalidation).
