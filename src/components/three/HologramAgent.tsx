import { useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import type { Agent } from '../../data/site'

type Props = {
  agent: Agent
}

function toColor(hex: string): THREE.Color {
  return new THREE.Color(hex)
}

export function HologramAgent({ agent }: Props) {
  const groupRef = useRef<THREE.Group>(null)
  const cardRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader, agent.src)

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 8
    texture.needsUpdate = true
  }, [texture])

  const accentColor = useMemo(() => toColor(agent.accent), [agent.accent])
  const glowColor = useMemo(() => toColor(agent.glow), [agent.glow])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.9) * 0.06
      groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.08
    }
    if (cardRef.current) {
      const mat = cardRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.88 + Math.sin(t * 2.2) * 0.05
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.35
    }
  })

  const width = 1.7
  const height = 2.25

  return (
    <group ref={groupRef} position={[0.35, 0.15, 0]}>
      {/* Soft glow plane behind portrait */}
      <mesh position={[0, 0.35, -0.06]}>
        <planeGeometry args={[width + 0.25, height + 0.25]} />
        <meshBasicMaterial color={accentColor} transparent opacity={0.18} depthWrite={false} />
      </mesh>

      {/* Agent portrait billboard */}
      <mesh ref={cardRef} position={[0, 0.35, 0]}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.92}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>

      {/* Hologram frame edges */}
      <lineSegments position={[0, 0.35, 0.01]}>
        <edgesGeometry args={[new THREE.PlaneGeometry(width + 0.04, height + 0.04)]} />
        <lineBasicMaterial color={accentColor} transparent opacity={0.85} />
      </lineSegments>

      {/* Scanline plane */}
      <mesh position={[0, 0.35, 0.02]}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={0.06}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Platform rings */}
      <mesh ref={ringRef} position={[0, -0.85, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.95, 0.018, 16, 96]} />
        <meshBasicMaterial color={accentColor} transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, -0.83, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.18, 0.008, 16, 96]} />
        <meshBasicMaterial color={glowColor} transparent opacity={0.4} />
      </mesh>

      <pointLight color={accentColor} intensity={1.6} distance={7} position={[0, 0.8, 1.2]} />
      <pointLight color={glowColor} intensity={0.6} distance={5} position={[0.6, 0.2, 0.8]} />
    </group>
  )
}
