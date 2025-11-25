# La Boîte à Écrire

> Plateforme de littérature augmentée - Version Beta 0.1.0

Une plateforme privée pour gérer vos projets d'écriture avec l'aide de l'intelligence artificielle. Synchronisez vos données depuis Notion, analysez votre style, générez des alternatives et suivez l'évolution de votre histoire.

## ✨ Fonctionnalités

- 📚 **Atelier d'écriture**: Gérez vos chapitres et scènes
- 👥 **Personnages**: Visualisez et organisez vos personnages
- 🤖 **Workflows IA**: Évaluez le style et générez des alternatives
- 🔄 **Synchronisation Notion**: Vos données restent dans Notion
- ⚡ **Temps réel**: Suivez l'exécution de vos workflows

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18.0.0 ou supérieur
- npm ou yarn
- Un compte Notion avec bases de données configurées
- Une instance N8N (optionnel pour les workflows)

### Installation

#### 1. Cloner le projet

```bash
git clone https://github.com/votre-username/la-boite-a-ecrire.git
cd la-boite-a-ecrire
```

#### 2. Configuration Frontend

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Éditer .env.local avec vos valeurs
nano .env.local
```

Variables d'environnement Frontend (`.env.local`):

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_API_KEY=your-secure-api-key-here
```

#### 3. Configuration Backend

```bash
# Aller dans le dossier backend
cd backend

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env

# Éditer .env avec vos valeurs
nano .env
```

Variables d'environnement Backend (`.env`):

```env
# Server
PORT=3001
NODE_ENV=development

# Authentication
API_KEY=your-secure-api-key-here

# Notion
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxx
NOTION_DB_CHARACTERS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_CHAPTERS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_SCENES=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_TIMELINE=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# N8N
N8N_BASE_URL=http://localhost:5678
N8N_WEBHOOK_URL=
N8N_API_KEY=
```

#### 4. Configuration Notion

Suivez le guide détaillé: [📖 Configuration Notion](./docs/NOTION_SETUP.md)

**Résumé:**
1. Créez une intégration sur [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Créez 4 bases de données: Characters, Chapters, Scenes, Timeline
3. Partagez chaque base avec votre intégration
4. Copiez les Database IDs dans `.env`

#### 5. Configuration N8N (Optionnel)

Suivez le guide détaillé: [🔧 Workflows N8N](./docs/N8N_WORKFLOWS.md)

**Workflows disponibles:**
- Style Evaluation (Claude API)
- Alternative Generation (OpenAI API)

### Lancement en Développement

#### Terminal 1: Backend

```bash
cd backend
npm run dev
```

Backend disponible sur: http://localhost:3001

#### Terminal 2: Frontend

```bash
npm run dev
```

Frontend disponible sur: http://localhost:3000

## 📁 Structure du Projet

```
la-boite-a-ecrire/
├── src/                    # Frontend (Next.js)
│   ├── app/               # Pages et routes
│   │   ├── atelier/       # Vue Atelier
│   │   ├── personnages/   # Vue Personnages
│   │   └── workflows/     # Vue Workflows
│   ├── components/        # Composants React
│   ├── lib/              # Utilitaires et API client
│   └── types/            # Types TypeScript
├── backend/               # Backend (Express)
│   └── src/
│       ├── routes/        # Routes API
│       ├── services/      # Services (Notion, N8N)
│       ├── middleware/    # Authentification, erreurs
│       └── config/        # Configuration
├── docs/                  # Documentation
│   ├── NOTION_SETUP.md   # Config Notion
│   └── N8N_WORKFLOWS.md  # Config N8N
└── public/               # Assets statiques
```

## 🛠️ Stack Technique

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **UI**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Déploiement**: Vercel

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express
- **Langage**: TypeScript
- **APIs**: Notion, N8N
- **Déploiement**: Railway

## 🔒 Sécurité

- Authentification par API Key
- Variables d'environnement pour les secrets
- CORS configuré
- Pas de données sensibles en frontend

**Important**: Changez `API_KEY` en production !

## 📚 Documentation

- [Configuration Notion](./docs/NOTION_SETUP.md) - Guide complet Notion
- [Workflows N8N](./docs/N8N_WORKFLOWS.md) - Configuration des workflows IA

## 🚢 Déploiement

### Frontend sur Vercel

1. Importez le projet sur [Vercel](https://vercel.com)
2. Configurez les variables d'environnement
3. Déployez !

```bash
# Ou en ligne de commande
vercel --prod
```

### Backend sur Railway

1. Créez un nouveau projet sur [Railway](https://railway.app)
2. Connectez votre repo GitHub
3. Ajoutez les variables d'environnement
4. Railway déploiera automatiquement

**Variables Railway:**
```
NODE_ENV=production
PORT=3001
API_KEY=votre-api-key-production
NOTION_API_KEY=...
NOTION_DB_CHARACTERS=...
NOTION_DB_CHAPTERS=...
NOTION_DB_SCENES=...
NOTION_DB_TIMELINE=...
N8N_BASE_URL=...
CORS_ORIGIN=https://votre-app.vercel.app
```

## 🧪 Tests

```bash
# Frontend
npm run lint

# Backend
cd backend
npm run type-check
```

## 🗺️ Roadmap

### Phase 1 (Actuelle - Beta)
- [x] Interface de base
- [x] Synchronisation Notion
- [x] Workflows N8N
- [x] Vues Atelier, Personnages, Workflows

### Phase 2 (Prochaine)
- [ ] Édition inline des scènes
- [ ] Export PDF/EPUB
- [ ] Statistiques avancées
- [ ] Mode collaboratif
- [ ] Tests automatisés

### Phase 3 (Future)
- [ ] Application mobile
- [ ] Intégrations supplémentaires
- [ ] Multi-projets
- [ ] Marketplace de workflows

## 🤝 Contribution

Ce projet est actuellement privé et en développement actif.

## 📄 Licence

MIT License - Voir [LICENSE](./LICENSE)

## 🆘 Support

Pour toute question ou problème:
- Consultez la [documentation](./docs/)
- Ouvrez une issue sur GitHub

## 👨‍💻 Auteur

Développé pour Olivier - Projet de littérature augmentée

---

**Version**: 0.1.0-beta
**Dernière mise à jour**: 2025-11-25
