import { site } from '../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.mark}>AGENT PROTOCOL</span>
        <span>
          © {new Date().getFullYear()} {site.fullName}
        </span>
      </div>
    </footer>
  )
}
