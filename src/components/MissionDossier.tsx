import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'
import styles from './MissionDossier.module.css'

type Props = {
  project: Project | null
  onClose: () => void
}

export function MissionDossier({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const prevFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!project) return
    prevFocus.current = document.activeElement as HTMLElement | null
    const t = window.setTimeout(() => closeRef.current?.focus(), 20)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const activeEl = document.activeElement as HTMLElement | null
      if (e.shiftKey && activeEl === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prevFocus.current?.focus?.()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className={styles.backdrop}
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-title"
        className={styles.dialog}
      >
        <div className={styles.head}>
          <div className={styles.mark}>
            <span className={styles.mission}>{project.missionCode}</span>
            {project.starred && <span className={styles.badge}>STAR PROTOCOL</span>}
          </div>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close dossier"
          >
            <span aria-hidden>×</span>
          </button>
        </div>

        <h3 id="dossier-title" className={styles.title}>
          {project.title}
        </h3>

        <div className={styles.body}>
          <section>
            <p className={styles.sectionLabel}>BRIEFING</p>
            <p className={styles.desc}>{project.description}</p>
          </section>

          <section>
            <p className={styles.sectionLabel}>STACK</p>
            <div className={styles.chips}>
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <p className={styles.sectionLabel}>HIGHLIGHTS</p>
            <ul className={styles.highlights}>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.footer}>
          {project.liveUrl && (
            <a
              className="btn btn-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open live app →
            </a>
          )}
          {project.github && (
            <a
              className={`btn ${project.liveUrl ? 'btn-ghost' : 'btn-primary'}`}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open repository →
            </a>
          )}
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>
        {project.liveNote && <p className={styles.liveNote}>{project.liveNote}</p>}
      </div>
    </div>
  )
}
