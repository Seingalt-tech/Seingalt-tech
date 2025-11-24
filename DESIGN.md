# Guide de Design - La boite à écrire

## 🎨 Schéma de Couleurs

### Couleurs Principales

| Nom | Code Hex | Usage | Aperçu |
|-----|----------|-------|--------|
| **PRIMARY** | `#2C3E50` | Titres, éléments principaux | ![#2C3E50](https://via.placeholder.com/50x20/2C3E50/2C3E50.png) Bleu-gris foncé |
| **ACCENTUATION** | `#D97706` | Mise en avant, marqueurs | ![#D97706](https://via.placeholder.com/50x20/D97706/D97706.png) Orange doré |
| **FOND** | `#F8F7F5` | Arrière-plan principal | ![#F8F7F5](https://via.placeholder.com/50x20/F8F7F5/F8F7F5.png) Beige clair |
| **ALERT/CTA** | `#DC2626` | Alertes, boutons d'action | ![#DC2626](https://via.placeholder.com/50x20/DC2626/DC2626.png) Rouge doux |

### Variables CSS

```css
--color-primary: #2C3E50;      /* Bleu-gris foncé - Titres */
--color-accent: #D97706;       /* Orange doré - Accentuation */
--color-background: #F8F7F5;   /* Beige clair - Fond */
--color-alert: #DC2626;        /* Rouge doux - Alert/CTA */
```

## ✍️ Typographie

### Polices

- **Crimson Text** (Serif)
  - Usage : Titres et corps de texte
  - Poids : 400 (normal), 600 (semi-bold), 700 (bold)
  - Variable CSS : `--font-serif`

- **Inter** (Sans-serif)
  - Usage : Interface utilisateur et navigation
  - Poids : Variable
  - Variable CSS : `--font-sans`

### Hiérarchie

```css
/* Titres */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  color: var(--color-primary);
}

/* Corps de texte */
body, p, article {
  font-family: var(--font-serif);
}

/* Navigation et UI */
nav, button, .btn {
  font-family: var(--font-sans);
}
```

## 🎯 Classes Utilitaires

### Boutons

```html
<!-- Bouton principal -->
<button class="btn btn-primary">Bouton Principal</button>

<!-- Bouton avec accent -->
<button class="btn btn-accent">Bouton Accent</button>

<!-- Bouton CTA/Alert -->
<button class="btn btn-cta">Appel à l'action</button>
```

### Mise en évidence

```html
<!-- Texte surligné -->
<span class="highlight">Texte important</span>

<!-- Avec la balise mark -->
<mark>Texte en évidence</mark>
```

## 📱 Responsive

Le design est responsive avec des breakpoints à :
- Mobile : < 768px
- Tablette : 768px - 1024px
- Desktop : > 1024px

## 🎨 Exemple d'utilisation

```tsx
export default function Example() {
  return (
    <div className="container">
      <h1>Titre Principal</h1>
      <p>Corps de texte avec <mark>mise en évidence</mark></p>
      <button className="btn btn-cta">Action</button>
    </div>
  )
}
```
