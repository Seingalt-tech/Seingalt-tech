'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Header.css'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-logo">
          <span className="logo-icon">BE</span>
          <span className="logo-text">La boite à écrire</span>
        </Link>

        <nav className="header-nav">
          <Link href="/" className={`nav-link ${isActive('/')}`}>
            Accueil
          </Link>
          <Link href="/about" className={`nav-link ${isActive('/about')}`}>
            À propos
          </Link>
          <Link href="/projects" className={`nav-link ${isActive('/projects')}`}>
            Projets
          </Link>
          <Link href="/blog" className={`nav-link ${isActive('/blog')}`}>
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
