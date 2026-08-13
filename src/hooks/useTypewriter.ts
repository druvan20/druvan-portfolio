import { useEffect, useState } from 'react'

type Options = {
  text: string
  delayMs?: number
  speedMs?: number
  enabled?: boolean
}

export function useTypewriter({
  text,
  delayMs = 0,
  speedMs = 55,
  enabled = true,
}: Options) {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setShown(text)
      setDone(true)
      return
    }

    setShown('')
    setDone(false)
    let i = 0
    let intervalId = 0

    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1
        setShown(text.slice(0, i))
        if (i >= text.length) {
          window.clearInterval(intervalId)
          setDone(true)
        }
      }, speedMs)
    }, delayMs)

    return () => {
      window.clearTimeout(startId)
      window.clearInterval(intervalId)
    }
  }, [text, delayMs, speedMs, enabled])

  return { shown, done }
}
