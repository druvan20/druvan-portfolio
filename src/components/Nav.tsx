import { useEffect, useState } from 'react'
import { links, navItems, site } from '../data/site'
import styles from './Nav.module.css'

const SECTION_IDS = ['protocol', 'intel', 'ops', 'loadout', 'missions', 'training', 'deploy']

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#protocol')

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

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled || open ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#protocol" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandMark}>DG</span>
          <span>{site.name.toUpperCase()}</span>
        </a>

        <button
          className={`${styles.menuBtn} ${open ? styles.menuBtnOpen : ''}`}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {open && (
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
        )}

        <nav
          id="primary-nav"
          className={`${styles.links} ${open ? styles.open : ''}`}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeHref === item.href ? styles.active : undefined}
              aria-current={activeHref === item.href ? 'page' : undefined}
              onClick={() => {
                setActiveHref(item.href)
                setOpen(false)
              }}
            >
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
