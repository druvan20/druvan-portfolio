import { links, site } from '../data/site'
import { Reveal } from './Reveal'
import styles from './About.module.css'

const focusAreas = [
  { label: 'Agentic AI', detail: 'LangGraph · Deep Agents · MCP · AIDLC' },
  { label: 'GenAI Systems', detail: 'RAG · Prompting · MLflow · Databricks' },
  { label: 'Full-Stack', detail: 'React · Angular · Spring · .NET' },
  { label: 'AIML + DE', detail: 'ML · DL · NLP · PySpark · Vector Search' },
]

const stats = [
  { value: '9.5', unit: 'CGPA', label: 'VVCE Mysore' },
  { value: 'SDE1', unit: 'Trainee', label: 'Hashedin by Deloitte' },
  { value: '6', unit: 'Missions', label: 'Shipped projects' },
  { value: '10', unit: 'Agents', label: 'Protocol roster' },
]

const profileSrc = `${import.meta.env.BASE_URL}profile.jpg`

export function About() {
  return (
    <section id="intel" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <div>
              <p className="section-code">INTEL</p>
              <h2 className="section-title">About</h2>
              <p className={styles.kicker}>Operator dossier · cleared for GenAI & systems work</p>
            </div>
            <a className={`btn btn-ghost ${styles.headerCta}`} href={`mailto:${links.email}`}>
              Contact signal
            </a>
          </div>

          <div className={styles.bento}>
            <article className={`${styles.card} ${styles.profile}`}>
              <div className={styles.profileLayout}>
                <div className={styles.photoFrame}>
                  <img
                    src={profileSrc}
                    alt={`${site.fullName} portrait`}
                    className={styles.photo}
                  />
                  <span className={styles.photoGlow} aria-hidden />
                </div>

                <div className={styles.profileCopy}>
                  <div className={styles.profileTop}>
                    <div>
                      <p className={styles.name}>{site.fullName}</p>
                      <p className={styles.handle}>@{site.name.toLowerCase()} · Trainee Engineer</p>
                    </div>
                  </div>
                  <p className={styles.bio}>
                    CSE AI/ML graduate from Vidyavardhaka College of Engineering, Mysore (9.5 CGPA),
                    currently training as a Trainee SDE1 at Hashedin by Deloitte. Passionate about
                    GenAI, agentic systems, AIDLC, and full-stack development — actively learning and
                    building across the stack.
                  </p>
                  <div className={styles.tags}>
                    <span>AI/ML</span>
                    <span>GenAI</span>
                    <span>AIDLC</span>
                    <span>Full-Stack</span>
                    <span>Databricks</span>
                  </div>
                </div>
              </div>
            </article>

            <article className={`${styles.card} ${styles.stats}`}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <p className={styles.statValue}>
                    {stat.value}
                    <span>{stat.unit}</span>
                  </p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </article>

            <article className={`${styles.card} ${styles.focus}`}>
              <p className={styles.cardLabel}>Focus lanes</p>
              <div className={styles.focusGrid}>
                {focusAreas.map((area) => (
                  <div key={area.label} className={styles.focusItem}>
                    <span className={styles.focusDot} aria-hidden />
                    <div>
                      <p className={styles.focusTitle}>{area.label}</p>
                      <p className={styles.focusDetail}>{area.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={`${styles.card} ${styles.now}`}>
              <p className={styles.cardLabel}>Now deploying</p>
              <p className={styles.nowTitle}>Hashedin by Deloitte</p>
              <p className={styles.nowMeta}>Trainee Engineer (SDE1) · May 2026 – Present</p>
              <ul className={styles.nowList}>
                <li>HU Spark tracks: Prompt Eng · AIDLC · Adv DE + AIML</li>
                <li>Python · Java · Angular · GenAI · Databricks</li>
                <li>Enterprise patterns: JWT · OWASP · OAuth</li>
              </ul>
              <div className={styles.nowLinks}>
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn →
                </a>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
