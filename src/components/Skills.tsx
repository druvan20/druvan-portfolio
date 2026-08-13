import { useState } from 'react'
import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'
import styles from './Skills.module.css'

export function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id)
  const active = skillGroups.find((g) => g.id === activeId) ?? skillGroups[0]
  const totalSkills = skillGroups.reduce((n, g) => n + g.skills.length, 0)

  return (
    <section id="loadout" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <div>
              <p className="section-code">LOADOUT</p>
              <h2 className="section-title">Skills</h2>
              <p className={styles.kicker}>Arsenal matrix · tap a lane to inspect gear</p>
            </div>
            <div className={styles.headerStats}>
              <div>
                <p className={styles.statValue}>{skillGroups.length}</p>
                <p className={styles.statLabel}>Lanes</p>
              </div>
              <div>
                <p className={styles.statValue}>{totalSkills}</p>
                <p className={styles.statLabel}>Skills</p>
              </div>
            </div>
          </div>

          <div className={styles.bento}>
            <aside className={styles.laneList}>
              {skillGroups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  className={`${styles.lane} ${group.id === activeId ? styles.laneActive : ''}`}
                  style={{ '--lane-accent': group.accent } as React.CSSProperties}
                  onClick={() => setActiveId(group.id)}
                >
                  <span className={styles.laneTier}>{group.tier}</span>
                  <span className={styles.laneTitle}>{group.title}</span>
                  <span className={styles.laneCount}>{group.skills.length} items</span>
                </button>
              ))}
            </aside>

            <article
              className={styles.detail}
              style={{ '--lane-accent': active.accent } as React.CSSProperties}
            >
              <div className={styles.detailTop}>
                <div>
                  <p className={styles.detailTier}>{active.tier} LOADOUT</p>
                  <h3 className={styles.detailTitle}>{active.title}</h3>
                  <p className={styles.detailBlurb}>{active.blurb}</p>
                </div>
                <div className={styles.detailMeter} aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.chips}>
                {active.skills.map((skill) => (
                  <span key={skill} className={styles.chip}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <div className={styles.miniGrid}>
              {skillGroups.map((group) => (
                <button
                  key={`mini-${group.id}`}
                  type="button"
                  className={`${styles.mini} ${group.id === activeId ? styles.miniActive : ''}`}
                  style={{ '--lane-accent': group.accent } as React.CSSProperties}
                  onClick={() => setActiveId(group.id)}
                >
                  <p className={styles.miniTitle}>{group.title}</p>
                  <div className={styles.miniChips}>
                    {group.skills.slice(0, 4).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                    {group.skills.length > 4 && <span>+{group.skills.length - 4}</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
