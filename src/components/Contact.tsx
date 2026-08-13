import { useState, type FormEvent } from 'react'
import { links } from '../data/site'
import { Reveal } from './Reveal'
import styles from './Contact.module.css'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${links.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim() || 'Portfolio uplink — Agent Protocol',
          message: message.trim(),
          _template: 'table',
        }),
      })

      if (!res.ok) throw new Error('Transmit failed')
      setStatus('sent')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch {
      // Fallback: open mail client so contact still works offline / if FormSubmit blocks
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
      )
      const sub = encodeURIComponent(subject.trim() || 'Portfolio uplink')
      window.location.href = `mailto:${links.email}?subject=${sub}&body=${body}`
      setStatus('error')
    }
  }

  return (
    <section id="deploy" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <div className={styles.layout}>
            <div className={styles.intro}>
              <p className="section-code">DEPLOY</p>
              <h2 className={styles.headline}>Ready to deploy?</h2>
              <p className={styles.lead}>
                Open a direct channel. Drop a message below — it routes straight to my inbox.
              </p>

              <div className={styles.actions}>
                <a className="btn btn-ghost" href={`mailto:${links.email}`}>
                  Email
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
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>

              <p className={styles.email}>{links.email}</p>
            </div>

            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.formHead}>
                <p className={styles.formLabel}>MSG UPLINK</p>
                <span className={styles.formStatus} data-state={status}>
                  {status === 'idle' && 'CHANNEL OPEN'}
                  {status === 'sending' && 'TRANSMITTING…'}
                  {status === 'sent' && 'SIGNAL RECEIVED'}
                  {status === 'error' && 'FALLBACK · MAIL CLIENT'}
                </span>
              </div>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Callsign</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className={styles.field}>
                  <span>Reply freq</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span>Subject</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="Opportunity / collab / hello"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>

              <label className={styles.field}>
                <span>Payload</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>

              <div className={styles.formFooter}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Transmit message'}
                </button>
                {status === 'sent' && (
                  <p className={styles.success}>Message received — I&apos;ll reply soon.</p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
