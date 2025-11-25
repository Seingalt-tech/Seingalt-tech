# Configuration Notion

Ce document explique comment configurer vos bases de données Notion pour La Boîte à Écrire.

## Prérequis

1. Un compte Notion
2. Créer une intégration Notion sur [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
3. Récupérer l'API key de votre intégration

## Structure des Bases de Données

### 1. Base de Données: Characters (Personnages)

**Propriétés requises:**

| Nom | Type | Description |
|-----|------|-------------|
| Name | Title | Nom du personnage |
| Description | Rich Text | Description du personnage |
| Avatar | Files & Media | Photo/avatar du personnage |
| Role | Select | Rôle (Protagoniste, Antagoniste, Secondaire) |
| Traits | Multi-select | Traits de caractère |

**Exemple de configuration:**

```
Name: Jean Dupont
Description: Détective privé de 45 ans, cynique mais au grand cœur
Avatar: [Photo]
Role: Protagoniste
Traits: Courageux, Intelligent, Solitaire
```

---

### 2. Base de Données: Chapters (Chapitres)

**Propriétés requises:**

| Nom | Type | Description |
|-----|------|-------------|
| Title | Title | Titre du chapitre |
| Order | Number | Ordre du chapitre (1, 2, 3...) |
| Status | Select | État (draft, in_progress, reviewing, completed) |
| Description | Rich Text | Résumé du chapitre |

**Options pour Status:**
- `draft` - Brouillon
- `in_progress` - En cours
- `reviewing` - En révision
- `completed` - Terminé

---

### 3. Base de Données: Scenes (Scènes)

**Propriétés requises:**

| Nom | Type | Description |
|-----|------|-------------|
| Title | Title | Titre de la scène |
| Chapter | Relation | Lien vers le chapitre parent |
| Order | Number | Ordre dans le chapitre |
| Content | Rich Text | Contenu de la scène |
| Status | Select | État (draft, reviewing, validated) |
| WordCount | Number | Nombre de mots |
| Notes | Rich Text | Notes pour cette scène |

**Options pour Status:**
- `draft` - Brouillon
- `reviewing` - En révision
- `validated` - Validé

---

### 4. Base de Données: Timeline (Chronologie)

**Propriétés requises:**

| Nom | Type | Description |
|-----|------|-------------|
| Title | Title | Nom de l'événement |
| Description | Rich Text | Description de l'événement |
| Date | Date | Date de l'événement |
| Type | Select | Type (event, milestone, character_intro) |

**Options pour Type:**
- `event` - Événement
- `milestone` - Jalon important
- `character_intro` - Introduction personnage

---

## Configuration de l'Intégration

### Étape 1: Créer l'Intégration

1. Allez sur [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Cliquez sur "New integration"
3. Nommez votre intégration "La Boîte à Écrire"
4. Sélectionnez votre workspace
5. Définissez les capabilities:
   - ✅ Read content
   - ✅ Update content
   - ✅ Insert content
6. Copiez l'**Internal Integration Token**

### Étape 2: Partager les Bases avec l'Intégration

Pour chaque base de données créée:

1. Ouvrez la base dans Notion
2. Cliquez sur "..." en haut à droite
3. Sélectionnez "Add connections"
4. Choisissez "La Boîte à Écrire"
5. Confirmez

### Étape 3: Récupérer les Database IDs

Pour chaque base de données:

1. Ouvrez la base dans Notion
2. Copiez l'URL de la page
3. L'ID est la partie après le dernier `/` et avant le `?`

Exemple:
```
URL: https://notion.so/workspace/abc123def456?v=xyz
Database ID: abc123def456
```

### Étape 4: Configurer le Backend

Mettez à jour votre fichier `.env` du backend:

```env
# Notion Configuration
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxx

# Database IDs
NOTION_DB_CHARACTERS=abc123def456...
NOTION_DB_CHAPTERS=def456ghi789...
NOTION_DB_SCENES=ghi789jkl012...
NOTION_DB_TIMELINE=jkl012mno345...
```

---

## Template Notion (Optionnel)

Vous pouvez dupliquer ce template Notion pré-configuré:

[🔗 Template La Boîte à Écrire](#) _(À créer et partager)_

Le template inclut:
- Les 4 bases de données pré-configurées
- Des exemples de données
- Des vues personnalisées

---

## Vérification de la Configuration

Pour tester que tout fonctionne:

1. Démarrez le backend: `cd backend && npm run dev`
2. Testez l'endpoint characters:
   ```bash
   curl -H "x-api-key: your-api-key" \
        http://localhost:3001/api/characters
   ```
3. Vous devriez recevoir vos personnages en JSON

---

## Bonnes Pratiques

1. **Organisation**: Créez une page "La Boîte à Écrire" dans Notion pour regrouper toutes vos bases
2. **Sauvegardes**: Exportez régulièrement vos bases Notion
3. **Permissions**: Utilisez une intégration interne (pas publique)
4. **Données de test**: Créez quelques entrées de test avant de commencer

---

## Exemple de Données de Test

### Characters
```
1. Jean Moreau - Détective - Protagoniste
2. Marie Laurent - Journaliste - Secondaire
3. Le Baron - Criminel - Antagoniste
```

### Chapters
```
1. Le Commencement - Chapitre 1 - draft
2. La Découverte - Chapitre 2 - in_progress
```

### Scenes
```
Chapitre 1:
  - Scène 1: L'appel mystérieux
  - Scène 2: Première enquête

Chapitre 2:
  - Scène 1: L'indice crucial
```

---

## Troubleshooting

**Erreur: "API key invalide"**
- Vérifiez que vous avez copié la clé complète
- Vérifiez qu'elle commence par `secret_`

**Erreur: "Base de données non trouvée"**
- Vérifiez que vous avez partagé la base avec l'intégration
- Vérifiez que le Database ID est correct

**Données ne s'affichent pas:**
- Vérifiez que les noms de propriétés correspondent exactement
- Vérifiez que les types de propriétés sont corrects

---

## Ressources

- [Documentation Notion API](https://developers.notion.com/)
- [Guide des intégrations Notion](https://www.notion.so/help/create-integrations-with-the-notion-api)
