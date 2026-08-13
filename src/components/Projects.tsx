import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { Reveal } from './Reveal'
import styles from './Projects.module.css'

type Props = {
  onOpen: (project: Project) => void
}

export function Projects({ onOpen }: Props) {
  return (
    <section id="missions" className="section">
      <div className="container">
        <Reveal>
          <p className="section-code">MISSIONS</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-lead">
            Five missions spanning agentic AI, data engineering, .NET, Spring Boot, and Angular.
            Select a mission to open its dossier.
          </p>
        </Reveal>

        <div className={styles.list}>
          {projects.map((project) => (
            <Reveal key={project.id}>
              <button
                type="button"
                className={`${styles.panel} ${project.starred ? styles.starred : ''}`}
                onClick={() => onOpen(project)}
                aria-haspopup="dialog"
              >
                <div className={styles.top}>
                  <span className={styles.mission}>{project.missionCode}</span>
                  {project.starred && <span className={styles.badge}>STAR PROTOCOL</span>}
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.stack}>
                  {project.stack.slice(0, 6).map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span className={`chip ${styles.more}`}>+{project.stack.length - 6}</span>
                  )}
                </div>
                <span className={styles.link}>View dossier →</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
