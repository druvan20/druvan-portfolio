import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import type { Agent } from '../../data/site'
import { HologramAgent } from './HologramAgent'
import { OperationsRoom } from './OperationsRoom'

type Props = {
  agent: Agent
  active: boolean
}

function CameraRig() {
  const { camera, size } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef(new THREE.Vector3(0, 0.35, 0))

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / size.width) * 2 - 1
      mouse.current.y = (e.clientY / size.height) * 2 - 1
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [size])

  useEffect(() => {
    camera.position.set(0, 0.6, 4)
  }, [camera])

  useFrame(() => {
    const m = mouse.current
    const px = m.x * 0.6
    const py = -m.y * 0.35
    camera.position.x += (px - camera.position.x) * 0.04
    camera.position.y += (0.6 + py - camera.position.y) * 0.04
    camera.lookAt(target.current)
  })

  return null
}

export function SceneCanvas({ agent, active }: Props) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) return null

  return (
    <Canvas
      dpr={[1, 1.6]}
      frameloop={active ? 'always' : 'demand'}
      camera={{ position: [0, 0.6, 4], fov: 45, near: 0.1, far: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <color attach="background" args={['#070a10']} />
      <fog attach="fog" args={['#070a10', 5, 14]} />
      <CameraRig />
      <Suspense fallback={null}>
        <OperationsRoom agent={agent} />
        <HologramAgent key={agent.id} agent={agent} />
      </Suspense>
    </Canvas>
  )
}

export default SceneCanvas
