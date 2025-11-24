'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>✍️</span>
          <span className={styles.logoText}>La Boîte à Écrire</span>
        </Link>

        <ul className={styles.menu}>
          <li><Link href="/" className={styles.link}>Accueil</Link></li>
          <li><Link href="/manifeste" className={styles.link}>Manifeste</Link></li>
          <li><Link href="/maquet" className={styles.link}>Maquet</Link></li>
          <li><Link href="/roman" className={styles.link}>Roman</Link></li>
          <li><Link href="/contact" className={styles.link}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
