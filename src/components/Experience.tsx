import { useState } from 'react'
import { experience, priorExperience } from '../data/experience'
import { Reveal } from './Reveal'
import styles from './Experience.module.css'

export function Experience() {
  const [activeTrack, setActiveTrack] = useState(experience.tracks[0].id)
  const track = experience.tracks.find((t) => t.id === activeTrack) ?? experience.tracks[0]

  return (
    <section id="ops" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <div>
              <p className="section-code">OPS</p>
              <h2 className="section-title">Experience</h2>
              <p className={styles.kicker}>
                HashedIn University · prior internships · peer mentoring
              </p>
            </div>
            <span className={styles.badge}>{experience.phase}</span>
          </div>

          <div className={styles.bento}>
            <article className={`${styles.card} ${styles.heroCard}`}>
              <div className={styles.heroTop}>
                <div>
                  <p className={styles.program}>{experience.program}</p>
                  <h3 className={styles.company}>{experience.company}</h3>
                  <p className={styles.role}>{experience.title}</p>
                </div>
                <div className={styles.meta}>
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <p className={styles.summary}>{experience.summary}</p>
              <ul className={styles.highlights}>
                {experience.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>

            <article className={`${styles.card} ${styles.flowCard}`}>
              <p className={styles.cardLabel}>Training flowchart</p>
              <ol className={styles.flow}>
                {experience.phases.map((phase, i) => (
                  <li key={phase.id} className={styles.flowStep}>
                    <div className={styles.flowRail}>
                      <span className={styles.flowNode}>{phase.step}</span>
                      {i < experience.phases.length - 1 && (
                        <span className={styles.flowLine} aria-hidden />
                      )}
                    </div>
                    <div className={styles.flowBody}>
                      <h4>{phase.title}</h4>
                      <p>{phase.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article className={`${styles.card} ${styles.tracksCard}`}>
              <p className={styles.cardLabel}>Active tech tracks</p>
              <div className={styles.trackTabs} role="tablist" aria-label="Training tracks">
                {experience.tracks.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={t.id === activeTrack}
                    className={`${styles.trackTab} ${
                      t.id === activeTrack ? styles.trackTabActive : ''
                    }`}
                    onClick={() => setActiveTrack(t.id)}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
              <div className={styles.trackPanel} role="tabpanel">
                <p className={styles.trackFocus}>{track.focus}</p>
                <div className={styles.trackChips}>
                  {track.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div className={styles.priorBlock}>
            <p className={styles.cardLabel}>Prior ops</p>
            <div className={styles.priorGrid}>
              {priorExperience.map((role) => (
                <article key={role.id} className={`${styles.card} ${styles.priorCard}`}>
                  <div className={styles.priorTop}>
                    <div>
                      <h3 className={styles.priorOrg}>{role.org}</h3>
                      <p className={styles.priorTitle}>{role.title}</p>
                    </div>
                    <div className={styles.meta}>
                      <span>{role.period}</span>
                      <span>{role.mode}</span>
                    </div>
                  </div>
                  <p className={styles.priorSummary}>{role.summary}</p>
                  <ul className={styles.highlights}>
                    {role.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
