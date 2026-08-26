import { Suspense, lazy, useEffect, useState } from 'react'
import { useAgentTheme } from '../context/AgentThemeContext'
import { agents, links, site } from '../data/site'
import { useSceneEnabled } from '../hooks/useWebGL'
import { useTypewriter } from '../hooks/useTypewriter'
import styles from './Hero.module.css'

const SceneCanvas = lazy(() => import('./three/SceneCanvas'))

const MIN_ROTATE_MS = 5000
const MAX_ROTATE_MS = 15000

function nextDelay() {
  return MIN_ROTATE_MS + Math.floor(Math.random() * (MAX_ROTATE_MS - MIN_ROTATE_MS + 1))
}

function shuffleAgents() {
  const copy = [...agents]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function Hero({ onOpenCv }: { onOpenCv?: () => void }) {
  const { setAgent } = useAgentTheme()
  const [boot, setBoot] = useState(true)
  const [roster] = useState(() => shuffleAgents())
  const [index, setIndex] = useState(0)
  const [inView, setInView] = useState(true)
  const [node, setNode] = useState<HTMLElement | null>(null)

  const sceneEnabled = useSceneEnabled()
  const active = roster[index % roster.length]

  const protocol = useTypewriter({
    text: site.protocolLabel,
    delayMs: 200,
    speedMs: 45,
  })

  const name = useTypewriter({
    text: site.agentName.toUpperCase(),
    delayMs: 900,
    speedMs: 70,
  })

  useEffect(() => {
    setAgent(active)
  }, [active, setAgent])

  useEffect(() => {
    const t = window.setTimeout(() => setBoot(false), 1400)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [node])

  useEffect(() => {
    if (!inView) return
    let timer = 0
    const schedule = () => {
      timer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % roster.length)
        schedule()
      }, nextDelay())
    }
    schedule()
    return () => window.clearTimeout(timer)
  }, [inView, roster.length])

  return (
    <section id="protocol" ref={setNode} className={styles.hero}>
      {boot && <div className="scanline-overlay" aria-hidden />}

      <div className={styles.visual} aria-hidden>
        {sceneEnabled ? (
          <Suspense fallback={null}>
            <SceneCanvas agent={active} active={inView} />
          </Suspense>
        ) : (
          <div className={styles.fallback}>
            {roster.map((agent, i) => (
              <img
                key={agent.id}
                src={agent.src}
                alt=""
                className={`${styles.portrait} ${
                  i === index % roster.length ? styles.portraitActive : ''
                }`}
              />
            ))}
          </div>
        )}
        <div className={styles.visualFade} />
        <div className={styles.vignette} />
      </div>

      <div className={`container ${styles.layout}`}>
        <div className={`${styles.content} protocol-boot`}>
          <p className={styles.code} aria-label={site.protocolLabel}>
            <span>[ </span>
            <span>{protocol.shown}</span>
            <span className={`${styles.caret} ${protocol.done ? styles.caretDone : ''}`}>|</span>
            <span> ]</span>
          </p>

          <h1 className={styles.name} aria-label={site.agentName}>
            {name.shown}
            <span className={`${styles.caret} ${name.done ? styles.caretDone : ''}`}>|</span>
          </h1>

          <p className={`${styles.tagline} ${name.done ? styles.show : styles.hide}`}>
            {site.tagline}
          </p>
          <p className={`${styles.line} ${name.done ? styles.show : styles.hide}`}>
            {site.oneLiner}
          </p>

          <div className={`${styles.ctas} ${name.done ? styles.show : styles.hide}`}>
            <a
              className="btn btn-primary"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            {onOpenCv && (
              <button type="button" className="btn btn-ghost" onClick={onOpenCv}>
                Save as PDF
              </button>
            )}
          </div>

          <p className={`${styles.role} ${name.done ? styles.show : styles.hide}`}>{site.role}</p>
        </div>
      </div>

      <div className={styles.hudBottom} aria-hidden>
        <span className={styles.hudDot} />
        <span>LINK STABLE</span>
        <span className={styles.hudSpacer} />
        <span>
          {active.codename} · {active.role} · {active.theme}
        </span>
        <span className={styles.hudSpacer} />
        <span>
          ROTATE {index + 1}/{roster.length}
        </span>
        <span className={styles.hudSpacer} />
        <span>SCROLL</span>
      </div>
    </section>
  )
}
