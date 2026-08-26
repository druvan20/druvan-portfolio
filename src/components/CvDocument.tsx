import { education } from '../data/education'
import { experience, priorExperience } from '../data/experience'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import { links, site } from '../data/site'
import styles from './CvDocument.module.css'

const PHONE = '+91 63619 67951'
const LOCATION = 'Mysuru · Bangalore, India'

type Props = {
  open: boolean
  onClose: () => void
}

export function CvDocument({ open, onClose }: Props) {
  if (!open) return null

  const featured = projects.filter((p) => p.starred || ['nexus-copilot', 'etl', 'agent-factory', 'foodiehub', 'smartwatch-api', 'job-portal'].includes(p.id)).slice(0, 6)

  function saveAsPdf() {
    document.body.classList.add('cv-printing')
    const cleanup = () => {
      document.body.classList.remove('cv-printing')
      window.removeEventListener('afterprint', cleanup)
    }
    window.addEventListener('afterprint', cleanup)
    window.print()
    // Fallback if afterprint never fires
    window.setTimeout(cleanup, 1000)
  }

  return (
    <div className={`${styles.overlay} cv-overlay`} role="dialog" aria-modal="true" aria-label="Curriculum Vitae">
      <div className={styles.toolbar} data-cv-ui>
        <p className={styles.toolbarHint}>Preview · use Save as PDF in the print dialog (like LinkedIn)</p>
        <div className={styles.toolbarActions}>
          <button type="button" className={`btn btn-primary ${styles.toolBtn}`} onClick={saveAsPdf}>
            Save as PDF
          </button>
          <a className={`btn btn-ghost ${styles.toolBtn}`} href={links.resume} target="_blank" rel="noopener noreferrer">
            ATS Resume
          </a>
          <button type="button" className={`btn btn-ghost ${styles.toolBtn}`} onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      <div className={styles.sheet} id="cv-sheet">
        <header className={styles.header}>
          <h1>{site.fullName}</h1>
          <p className={styles.headline}>Trainee Engineer (SDE1) · Backend & Agentic Systems</p>
          <p className={styles.meta}>
            {LOCATION}
            <span aria-hidden> · </span>
            <a href={`mailto:${links.email}`}>{links.email}</a>
            <span aria-hidden> · </span>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
          </p>
          <p className={styles.meta}>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span aria-hidden> · </span>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span aria-hidden> · </span>
            <a href="https://druvan20.github.io/druvan-portfolio/" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
            <span aria-hidden> · </span>
            <a href="https://leetcode.com/u/vvce22cseaiml0074/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </p>
        </header>

        <section className={styles.section}>
          <h2>Summary</h2>
          <p>
            Backend and applied-AI engineer building REST APIs, microservices, and multi-agent systems
            with Java/Spring Boot, Python/FastAPI, and .NET. Focused on recoverable workflows
            (LangGraph), RAG pipelines, and production-minded auth/security. Currently Trainee
            Engineer (SDE1) at Hashedin by Deloitte.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Experience</h2>
          <article className={styles.job}>
            <div className={styles.jobTop}>
              <h3>
                {experience.title} · {experience.company}
              </h3>
              <span>
                {experience.period} · {experience.location}
              </span>
            </div>
            <p className={styles.muted}>{experience.program}</p>
            <p>{experience.summary}</p>
            <ul>
              {experience.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>

          {priorExperience.map((role) => (
            <article key={role.id} className={styles.job}>
              <div className={styles.jobTop}>
                <h3>
                  {role.title} · {role.org}
                </h3>
                <span>
                  {role.period} · {role.mode}
                </span>
              </div>
              <p>{role.summary}</p>
              <ul>
                {role.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Projects</h2>
          {featured.map((p) => (
            <article key={p.id} className={styles.job}>
              <div className={styles.jobTop}>
                <h3>{p.title}</h3>
                <span>{p.missionCode}</span>
              </div>
              <p className={styles.muted}>{p.stack.join(' · ')}</p>
              <p>{p.description}</p>
              <ul>
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          {skillGroups.map((g) => (
            <p key={g.id} className={styles.skillLine}>
              <strong>{g.title}:</strong> {g.skills.join(', ')}
            </p>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          {education.map((ed) => (
            <article key={ed.id} className={styles.job}>
              <div className={styles.jobTop}>
                <h3>
                  {ed.level} · {ed.institution}
                </h3>
                <span>
                  {ed.year} · {ed.score}
                </span>
              </div>
              <p className={styles.muted}>{ed.focus}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
