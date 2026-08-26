import { useState } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { education } from '../data/education'
import { experience, priorExperience } from '../data/experience'
import { projects } from '../data/projects'
import { links, site } from '../data/site'
import styles from './CvDocument.module.css'

const PHONE = '+91 63619 67951'
const LOCATION = 'Mysuru · Bangalore'
const profileSrc = `${import.meta.env.BASE_URL}profile.jpg`

const NAME_CHUNKS = ['DRU', 'VAN', 'G', 'N'] as const

const SKILL_BARS = [
  { label: 'Python / GenAI / Agents', pct: 90 },
  { label: 'Java / Spring Boot', pct: 88 },
  { label: 'LangChain / LangGraph / RAG', pct: 86 },
  { label: 'React / TypeScript', pct: 82 },
  { label: 'SQL / Data / Databricks', pct: 78 },
]

const STICKERS = [
  'LangGraph',
  'FastAPI',
  'Spring',
  '.NET 8',
  'Kafka',
  'Docker',
  'GCP',
  'Databricks',
  'MLflow',
  'JWT',
]

type Props = {
  open: boolean
  onClose: () => void
}

export function CvDocument({ open, onClose }: Props) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!open) return null

  const featured = projects
    .filter((p) =>
      ['nexus-copilot', 'etl', 'agent-factory', 'foodiehub', 'smartwatch-api', 'job-portal'].includes(
        p.id,
      ),
    )
    .slice(0, 4)

  const be = education.find((e) => e.id === 'be')

  async function downloadPdf() {
    const el = document.getElementById('cv-sheet')
    if (!el) return

    setBusy(true)
    setError(null)

    try {
      await new Promise((r) => window.setTimeout(r, 60))

      const canvas = await html2canvas(el, {
        scale: Math.min(2, window.devicePixelRatio || 1.5),
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#fdf6e7',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: el.scrollWidth,
        windowHeight: el.scrollHeight,
      })

      const imgData = canvas.toDataURL('image/jpeg', 0.92)
      const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' })
      const pageW = pdf.internal.pageSize.getWidth()
      const pageH = pdf.internal.pageSize.getHeight()
      const imgW = pageW
      const imgH = (canvas.height * imgW) / canvas.width

      let heightLeft = imgH
      let y = 0

      pdf.addImage(imgData, 'JPEG', 0, y, imgW, imgH)
      heightLeft -= pageH

      while (heightLeft > 1) {
        y = heightLeft - imgH
        pdf.addPage()
        pdf.addImage(imgData, 'JPEG', 0, y, imgW, imgH)
        heightLeft -= pageH
      }

      pdf.save('Druvan_Gurukar_CV.pdf')
    } catch (err) {
      console.error(err)
      setError('PDF export failed — use ATS Resume, or try Print.')
    } finally {
      setBusy(false)
    }
  }

  function printFallback() {
    document.body.classList.add('cv-printing')
    const cleanup = () => {
      document.body.classList.remove('cv-printing')
      window.removeEventListener('afterprint', cleanup)
    }
    window.addEventListener('afterprint', cleanup)
    window.print()
    window.setTimeout(cleanup, 1500)
  }

  return (
    <div
      className={`${styles.overlay} cv-overlay`}
      role="dialog"
      aria-modal="true"
      aria-label="Crazy CV"
    >
      <div className={styles.toolbar} data-cv-ui>
        <div>
          <p className={styles.toolbarHint}>
            Downloads a real PDF file of this loud CV (phone + desktop).
          </p>
          {error ? <p className={styles.toolbarError}>{error}</p> : null}
        </div>
        <div className={styles.toolbarActions}>
          <button
            type="button"
            className={`btn btn-primary ${styles.toolBtn}`}
            onClick={() => void downloadPdf()}
            disabled={busy}
          >
            {busy ? 'Building PDF…' : 'Download CV PDF'}
          </button>
          <button
            type="button"
            className={`btn btn-ghost ${styles.toolBtn}`}
            onClick={printFallback}
            disabled={busy}
          >
            Print
          </button>
          <a
            className={`btn btn-ghost ${styles.toolBtn}`}
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Druvan_Gurukar_Resume.pdf"
          >
            ATS Resume
          </a>
          <button type="button" className={`btn btn-ghost ${styles.toolBtn}`} onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      <div className={styles.wall}>
        <div className={styles.page} id="cv-sheet">
          <div className={`${styles.tape} ${styles.tapeTl}`} aria-hidden />
          <div className={`${styles.tape} ${styles.tapeTr}`} aria-hidden />
          <div className={`${styles.tape} ${styles.tapeBr}`} aria-hidden />
          <div className={styles.ribbon}>OPEN TO WORK</div>

          <header className={styles.header}>
            <div className={styles.heroRow}>
              <div className={styles.photoWrap}>
                <img
                  src={profileSrc}
                  alt={`${site.fullName} portrait`}
                  className={styles.photo}
                  crossOrigin="anonymous"
                />
                <span className={styles.photoRing} aria-hidden />
              </div>
              <div className={styles.heroCopy}>
                <div className={styles.name}>
                  {NAME_CHUNKS.map((chunk) => (
                    <span key={chunk}>{chunk}</span>
                  ))}
                </div>
                <p className={styles.roleLine}>
                  — trainee SDE1 · backend & agentic systems that actually ship —
                </p>
                <div className={styles.contactRow}>
                  <a className={`${styles.pill} ${styles.pillHot}`} href={`mailto:${links.email}`}>
                    {links.email}
                  </a>
                  <a className={styles.pill} href={`tel:${PHONE.replace(/\s/g, '')}`}>
                    {PHONE}
                  </a>
                  <a className={styles.pill} href="https://druvan20.github.io/druvan-portfolio/">
                    Portfolio
                  </a>
                  <a className={styles.pill} href={links.github}>
                    GitHub
                  </a>
                  <a className={styles.pill} href={links.linkedin}>
                    LinkedIn
                  </a>
                  <span className={styles.pill}>{LOCATION}</span>
                </div>
              </div>
            </div>
          </header>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>The pitch</div>
            <div className={styles.about}>
              Building <strong>multi-agent</strong> and backend systems at{' '}
              <strong>Hashedin by Deloitte</strong> — LangGraph workflows, RAG pipelines, Spring /
              FastAPI / .NET services, and enough observability to trust what the agents decide.
              B.E. CSE (AI/ML) · 9.5 CGPA. Loud portfolio, serious shipping.
            </div>
          </section>

          <div className={styles.grid2}>
            <div>
              <section className={styles.section}>
                <div className={styles.sectionTitle}>Where I&apos;ve worked</div>

                <div className={styles.job}>
                  <div className={styles.jobHead}>
                    <span className={styles.jobTitle}>{experience.title}</span>
                    <span className={styles.jobMeta}>{experience.period}</span>
                  </div>
                  <div className={styles.jobCompany}>@ {experience.company}</div>
                  <ul>
                    {experience.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <span className={styles.stamp}>★ HU SPARK · {experience.location}</span>
                </div>

                {priorExperience.map((role) => (
                  <div key={role.id} className={styles.job}>
                    <div className={styles.jobHead}>
                      <span className={styles.jobTitle}>{role.title}</span>
                      <span className={styles.jobMeta}>{role.period}</span>
                    </div>
                    <div className={styles.jobCompany}>
                      @ {role.org} · {role.mode}
                    </div>
                    <ul>
                      {role.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section className={styles.section}>
                <div className={styles.sectionTitle}>Things I built</div>
                {featured.map((p) => (
                  <div key={p.id} className={styles.projectCard}>
                    <div className={styles.projectTitle}>
                      {p.title.replace(/ — .*$/, '')}{' '}
                      <span className={styles.editTag}>{p.missionCode}</span>
                    </div>
                    <div className={styles.projectSub}>{p.stack.slice(0, 5).join(' · ')}</div>
                    <p>
                      {p.description.slice(0, 180)}
                      {p.description.length > 180 ? '…' : ''}
                    </p>
                  </div>
                ))}
              </section>
            </div>

            <div>
              <section className={styles.section}>
                <div className={styles.sectionTitle}>Tape deck</div>
                {SKILL_BARS.map((s) => (
                  <div key={s.label} className={styles.skill}>
                    <div className={styles.skillLabel}>
                      <span>{s.label}</span>
                      <span>{s.pct}%</span>
                    </div>
                    <div className={styles.reelTrack}>
                      <div className={styles.reelFill} style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </section>

              <section className={styles.section}>
                <div className={styles.sectionTitle}>Also fluent in</div>
                <div className={styles.stickerWrap}>
                  {STICKERS.map((s) => (
                    <span key={s} className={styles.sticker}>
                      {s}
                    </span>
                  ))}
                </div>
              </section>

              <section className={styles.section}>
                <div className={styles.sectionTitle}>School stuff</div>
                {be && (
                  <div className={styles.eduCard}>
                    <div className={styles.eduTitle}>{be.level}</div>
                    <div className={styles.eduSub}>
                      {be.institution} · {be.year} · {be.score}
                    </div>
                  </div>
                )}
                {education
                  .filter((e) => e.id !== 'be')
                  .map((ed) => (
                    <div key={ed.id} className={styles.eduCard}>
                      <div className={styles.eduTitle}>{ed.level}</div>
                      <div className={styles.eduSub}>
                        {ed.institution} · {ed.score}
                      </div>
                    </div>
                  ))}
              </section>
            </div>
          </div>

          <footer className={styles.footer}>
            references, repos, and agent demos → portfolio + github on request →
          </footer>
        </div>
      </div>
    </div>
  )
}
