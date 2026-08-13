import { useEffect, useState } from 'react'
import { links, navItems, site } from '../data/site'
import styles from './Nav.module.css'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#protocol" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandMark}>DG</span>
          <span>{site.name.toUpperCase()}</span>
        </a>

        <button
          className={styles.menuBtn}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.links} ${open ? styles.open : ''}`} aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className={`btn btn-primary ${styles.cta}`}
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
