# 📚 La boite à écrire - Documentation Projet Notion

> Un espace dédié à l'écriture et à la créativité littéraire

---

## 🎯 Vue d'ensemble du projet

### Description
**La boite à écrire** est une plateforme web dédiée à l'écriture et à la créativité littéraire. Elle offre un espace accueillant pour les écrivains de tous niveaux.

### Objectifs
- Créer un espace d'écriture inspirant
- Fournir des outils et ressources pour les écrivains
- Encourager la créativité littéraire
- Construire une communauté d'écrivains

### Statut actuel
🟢 En développement initial - Infrastructure mise en place

---

## 🛠️ Stack Technique

### Technologies principales

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 14.0.0 | Framework React avec App Router |
| **React** | 18.2.0 | Bibliothèque UI |
| **TypeScript** | 5.0.0 | Langage de programmation |
| **Node.js** | ≥18.0.0 | Runtime JavaScript |

### DevDependencies

| Package | Version | Usage |
|---------|---------|-------|
| **ESLint** | 8.0.0 | Linting du code |
| **@types/node** | 20.0.0 | Types TypeScript pour Node.js |
| **@types/react** | 18.2.0 | Types TypeScript pour React |

---

## 📁 Architecture du projet

```
la-boite-a-ecrire/
├── 📂 src/
│   ├── 📂 app/                    # Pages et routes (Next.js App Router)
│   │   ├── layout.tsx            # Layout racine avec metadata
│   │   ├── page.tsx              # Page d'accueil
│   │   └── globals.css           # Styles globaux
│   ├── 📂 components/            # Composants réutilisables (à développer)
│   ├── 📂 lib/                   # Utilitaires et fonctions (à développer)
│   ├── 📂 styles/                # Styles additionnels (à développer)
│   └── 📂 types/                 # Types TypeScript (à développer)
├── 📂 public/                    # Fichiers statiques (images, fonts, etc.)
├── 📄 package.json               # Dépendances du projet
├── 📄 tsconfig.json              # Configuration TypeScript
├── 📄 next.config.js             # Configuration Next.js
├── 📄 .eslintrc.json             # Configuration ESLint
└── 📄 README.md                  # Documentation du projet
```

---

## 🎨 Pages & Composants

### Page d'accueil (`/`)
**Fichier**: `src/app/page.tsx`

#### Structure actuelle
```tsx
<main className="container">
  <div className="hero">
    - Titre principal: "La boite à écrire"
    - Sous-titre: Description du site
  </div>

  <section className="content">
    <div className="card"> # Carte "Bienvenue"
    <div className="card"> # Carte "Commencer"
  </section>
</main>
```

#### Contenu
1. **Section Hero**
   - Titre: "La boite à écrire"
   - Sous-titre: "Un espace dédié à l'écriture et à la créativité littéraire"

2. **Carte Bienvenue**
   - Message d'accueil
   - Introduction à l'espace d'écriture

3. **Carte Commencer**
   - Invitation à explorer
   - Promesse de découverte

### Layout principal
**Fichier**: `src/app/layout.tsx`

#### Metadata
- **Title**: "La boite à écrire"
- **Description**: "Un espace dédié à l'écriture et à la créativité littéraire"
- **Langue**: Français (fr)

---

## 🎨 Design System

### Palette de couleurs

| Usage | Couleur | Code |
|-------|---------|------|
| **Texte principal** | Gris foncé | `#212529` |
| **Titres** | Bleu ardoise | `#2c3e50` |
| **Texte secondaire** | Gris moyen | `#6c757d` |
| **Background gradient start** | Gris très clair | `#f8f9fa` |
| **Background gradient end** | Gris clair | `#e9ecef` |
| **Cards background** | Blanc | `white` |
| **Ombre des cards** | Noir transparent | `rgba(0, 0, 0, 0.1)` |

### Typographie

#### Familles de polices
```css
font-family: -apple-system, BlinkMacSystemFont,
'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
'Cantarell', 'Fira Sans', 'Droid Sans',
'Helvetica Neue', sans-serif;
```

#### Tailles
- **Titre principal (h1)**: 3rem (desktop) / 2rem (mobile)
- **Sous-titre**: 1.25rem (desktop) / 1rem (mobile)
- **Titre de carte (h2)**: 1.5rem
- **Texte corps**: 1rem
- **Line-height**: 1.6 (global) / 1.8 (cartes)

### Composants UI

#### Container
- **Max-width**: 1200px
- **Padding**: 2rem (desktop) / 1rem (mobile)
- **Centré horizontalement**

#### Hero Section
- **Padding vertical**: 4rem
- **Margin bottom**: 3rem
- **Alignement**: Centre

#### Cards
- **Background**: Blanc
- **Padding**: 2rem
- **Border-radius**: 8px
- **Box-shadow**: `0 2px 8px rgba(0, 0, 0, 0.1)`
- **Hover effect**:
  - Transform: `translateY(-4px)`
  - Shadow: `0 4px 16px rgba(0, 0, 0, 0.15)`
- **Transition**: 0.2s

#### Grid Layout
- **Colonnes**: Auto-fit avec minimum 300px
- **Gap**: 2rem
- **Responsive**: 1 colonne sur mobile

### Responsive Design

#### Breakpoints
- **Mobile**: ≤768px
  - Titre h1: 2rem
  - Sous-titre: 1rem
  - Padding container: 1rem
  - Grid: 1 colonne

---

## ⚙️ Configuration

### Scripts NPM

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement (port 3000) |
| `npm run build` | Build de production |
| `npm start` | Lance le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

### Configuration TypeScript
**Fichier**: `tsconfig.json`
- Compilation stricte
- Support JSX pour React
- Module resolution: Node

### Configuration Next.js
**Fichier**: `next.config.js`
- Configuration par défaut

### Configuration ESLint
**Fichier**: `.eslintrc.json`
- Extends: `next/core-web-vitals`

---

## 🚀 Installation & Démarrage

### Prérequis
- ✅ Node.js 18.0.0 ou supérieur
- ✅ npm ou yarn

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```
🌐 Site accessible sur: http://localhost:3000

### Production
```bash
npm run build
npm start
```

---

## 📋 Roadmap & Features

### ✅ Phase 1: Infrastructure (TERMINÉE)
- [x] Initialisation du projet Next.js 14
- [x] Configuration TypeScript
- [x] Setup ESLint
- [x] Structure de dossiers
- [x] Page d'accueil basique
- [x] Design system de base

### 🔄 Phase 2: Développement des fonctionnalités de base (À VENIR)

#### Pages à créer
- [ ] Page "À propos"
- [ ] Page "Ateliers d'écriture"
- [ ] Page "Blog / Ressources"
- [ ] Page "Contact"
- [ ] Page "Mon espace" (espace utilisateur)

#### Composants à développer
- [ ] **Header/Navigation**
  - Logo
  - Menu de navigation
  - Bouton CTA

- [ ] **Footer**
  - Liens utiles
  - Réseaux sociaux
  - Copyright

- [ ] **Cards**
  - Card d'atelier
  - Card d'article de blog
  - Card de témoignage

- [ ] **Formulaires**
  - Formulaire de contact
  - Formulaire d'inscription newsletter

#### Fonctionnalités
- [ ] Système de navigation entre pages
- [ ] Responsive design complet
- [ ] Optimisation SEO
- [ ] Accessibilité (WCAG)
- [ ] Analytics

### 🎯 Phase 3: Fonctionnalités avancées (PLANIFIÉES)

#### Espace utilisateur
- [ ] Authentification (NextAuth.js ?)
- [ ] Profils utilisateurs
- [ ] Sauvegarde de textes
- [ ] Historique d'écriture

#### Outils d'écriture
- [ ] Éditeur de texte riche
- [ ] Générateur d'idées
- [ ] Exercices d'écriture
- [ ] Prompts créatifs

#### Communauté
- [ ] Forum ou espace de discussion
- [ ] Partage de textes
- [ ] Commentaires et feedback
- [ ] Système de likes/favoris

#### Contenu dynamique
- [ ] CMS (Headless CMS: Contentful, Strapi ?)
- [ ] Blog dynamique
- [ ] Gestion des ateliers
- [ ] Newsletter

### 🌟 Phase 4: Optimisation & croissance (FUTURES)
- [ ] PWA (Progressive Web App)
- [ ] Mode hors-ligne
- [ ] Notifications
- [ ] Application mobile (React Native ?)
- [ ] API publique
- [ ] Intégrations tierces

---

## 🎯 Objectifs techniques

### Performance
- ⚡ Core Web Vitals optimisés
- 📊 Lighthouse score > 90
- 🚀 Time to Interactive < 3s
- 📦 Bundle size optimisé

### Qualité du code
- ✅ 100% TypeScript
- 📝 Documentation du code
- 🧪 Tests unitaires (à implémenter)
- 🔍 Code review systématique

### Sécurité
- 🔒 HTTPS obligatoire
- 🛡️ Protection CSRF
- 🔐 Sanitization des inputs
- 🚫 Prevention XSS

### Accessibilité
- ♿ WCAG 2.1 niveau AA
- ⌨️ Navigation au clavier
- 🔊 Support screen readers
- 🎨 Contraste suffisant

---

## 📊 Métriques & KPIs

### Métriques de développement
- **Commits**: Suivi via Git
- **Branches**: Feature branches + main
- **Issues**: À définir
- **Pull Requests**: Review obligatoire

### Métriques utilisateur (futures)
- Nombre de visiteurs uniques
- Temps passé sur le site
- Taux de conversion (inscriptions)
- Pages les plus visitées
- Taux de rebond

---

## 🔗 Ressources & Liens

### Documentation officielle
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Design & Inspiration
- À définir

### Outils de développement
- Git & GitHub
- VS Code
- npm / yarn

---

## 👥 Équipe & Rôles

### Rôles à définir
- **Product Owner**: ?
- **Développeur Frontend**: ?
- **Designer UI/UX**: ?
- **Content Creator**: ?

---

## 📝 Notes & Décisions

### Décisions architecturales

#### Pourquoi Next.js 14 ?
- ✅ App Router moderne
- ✅ Server Components
- ✅ Optimisations automatiques
- ✅ SEO friendly
- ✅ TypeScript first-class support

#### Pourquoi TypeScript ?
- ✅ Type safety
- ✅ Meilleure DX (Developer Experience)
- ✅ Refactoring facilité
- ✅ Auto-complétion IDE

### Questions ouvertes
- [ ] Quelle solution d'authentification ?
- [ ] Quel CMS headless utiliser ?
- [ ] Besoin d'une base de données ? (PostgreSQL, MongoDB ?)
- [ ] Hébergement : Vercel, Netlify, autres ?
- [ ] Nom de domaine définitif ?

---

## 🐛 Bugs connus & Issues

_Aucun bug connu pour le moment_

---

## 📅 Changelog

### Version 0.1.0 (2025-11-24)
- ✨ Initialisation du projet
- ✨ Setup Next.js 14 + TypeScript
- ✨ Page d'accueil basique
- ✨ Design system initial
- 📝 Documentation README

---

## 📄 Licence

Tous droits réservés.

---

## 📞 Contact & Support

_À définir_

---

**Dernière mise à jour**: 2025-11-24
**Version du document**: 1.0.0
