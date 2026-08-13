import { education } from '../data/education'
import { Reveal } from './Reveal'
import styles from './Education.module.css'

export function Education() {
  return (
    <section id="training" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <div>
              <p className="section-code">TRAINING</p>
              <h2 className="section-title">Education</h2>
              <p className={styles.kicker}>Academic trajectory · scored & specialized</p>
            </div>
          </div>

          <div className={styles.timeline}>
            {education.map((item, i) => (
              <article
                key={item.id}
                className={styles.card}
                style={{ '--edu-accent': item.accent } as React.CSSProperties}
              >
                <div className={styles.rail}>
                  <span className={styles.node}>{String(i + 1).padStart(2, '0')}</span>
                  {i < education.length - 1 && <span className={styles.line} aria-hidden />}
                </div>

                <div className={styles.body}>
                  <div className={styles.top}>
                    <span className={styles.stage}>{item.shortLevel}</span>
                    <span className={styles.year}>{item.year}</span>
                  </div>

                  <div className={styles.main}>
                    <div>
                      <h3 className={styles.level}>{item.level}</h3>
                      <p className={styles.school}>{item.institution}</p>
                      <p className={styles.focus}>{item.focus}</p>
                    </div>
                    <div className={styles.scoreBlock}>
                      <p className={styles.score}>{item.score}</p>
                      <p className={styles.scoreLabel}>Score</p>
                    </div>
                  </div>

                  <ul className={styles.highlights}>
                    {item.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
