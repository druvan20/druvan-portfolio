import { useEffect, useState } from 'react'

function detectWebGL(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    )
  } catch {
    return false
  }
}

export function useWebGLSupport(): boolean {
  const [supported, setSupported] = useState(true)
  useEffect(() => {
    setSupported(detectWebGL())
  }, [])
  return supported
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])
  return reduced
}

export function useSceneEnabled(): boolean {
  const gl = useWebGLSupport()
  const reduced = useReducedMotion()
  return gl && !reduced
}
