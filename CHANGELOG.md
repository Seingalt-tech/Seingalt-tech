# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [0.1.0] - 2025-11-25

### Ajouté

#### Frontend
- Interface utilisateur complète avec Next.js 14 et TypeScript
- Système de layout avec sidebar de navigation
- Page d'accueil avec cartes de navigation
- Vue **Atelier**: Affichage des chapitres et scènes depuis Notion
  - Liste déroulante des chapitres
  - Affichage des scènes par chapitre
  - Badges de statut colorés
- Vue **Personnages**: Affichage des personnages en cartes
  - Avatars et descriptions
  - Rôles et traits de caractère
  - Grille responsive
- Vue **Workflows**: Gestion des workflows IA
  - Liste des workflows disponibles
  - Déclenchement manuel des workflows
  - Historique des exécutions
  - Suivi du statut en temps réel
- Intégration Tailwind CSS pour le styling
- Composants réutilisables (LoadingSpinner, ErrorMessage, PageHeader)
- Client API typé avec gestion d'erreurs
- Utilitaires (formatage dates, statuts, etc.)

#### Backend
- API REST avec Express et TypeScript
- Système d'authentification par API Key
- Service d'intégration Notion
  - Récupération des personnages
  - Récupération des chapitres avec scènes
  - Récupération de la timeline
- Service d'intégration N8N
  - Déclenchement de workflows
  - Suivi des exécutions
  - Gestion du statut asynchrone
- Routes API complètes:
  - `GET /api/characters` - Liste des personnages
  - `GET /api/chapters` - Liste des chapitres et scènes
  - `GET /api/timeline` - Timeline des événements
  - `GET /api/workflows` - Workflows disponibles
  - `POST /api/workflows/:id/trigger` - Déclencher un workflow
  - `GET /api/workflows/executions/:id/status` - Statut d'exécution
  - `GET /api/workflows/executions` - Historique des exécutions
- Middleware de gestion d'erreurs centralisé
- Configuration via variables d'environnement
- Support CORS configuré

#### Types TypeScript
- Types complets pour Character, Scene, Chapter
- Types pour WorkflowExecution et Workflow
- Types pour Timeline et API responses
- Types partagés entre frontend et backend

#### Documentation
- README complet avec instructions d'installation
- Guide de configuration Notion (NOTION_SETUP.md)
- Guide de configuration N8N (N8N_WORKFLOWS.md)
- Exemples de workflows:
  - Style Evaluation (Claude API)
  - Alternative Generation (OpenAI API)
- Fichiers .env.example pour frontend et backend

#### Infrastructure
- Configuration Tailwind CSS
- Configuration TypeScript stricte
- Structure de projet organisée
- Configuration Vercel pour le frontend
- Configuration Railway pour le backend
- Licence MIT

### Sécurité
- Authentification par API Key
- Variables d'environnement pour les secrets
- CORS configuré
- Validation des requêtes

### Notes de version
Cette première version beta établit l'infrastructure complète de la plateforme. Les workflows N8N doivent être configurés manuellement selon la documentation.

**Testé avec:**
- Node.js 18.0.0+
- Next.js 14.0.0
- Notion API v2023-06-01

---

## [Non publié]

### À venir (v0.2.0)
- Édition inline des scènes
- Export PDF/EPUB
- Statistiques d'écriture
- Tests automatisés
- Mode sombre
