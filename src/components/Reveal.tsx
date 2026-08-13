import { useEffect, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className = '' }: Props) {
  const [visible, setVisible] = useState(false)
  const [node, setNode] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [node])

  return (
    <div ref={setNode} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
