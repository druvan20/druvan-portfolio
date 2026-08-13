import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { Agent } from '../../data/site'

type Props = {
  agent: Agent
}

function FloorGrid({ color }: { color: string }) {
  const ref = useRef<THREE.GridHelper>(null)
  return (
    <gridHelper
      ref={ref}
      args={[20, 40, color, '#1c2432']}
      position={[0, -0.9, 0]}
    />
  )
}

function Particles({ color }: { color: string }) {
  const points = useRef<THREE.Points>(null)
  const [geometry, material] = useMemo(() => {
    const count = 220
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = Math.random() * 4 - 0.5
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const m = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    })
    return [g, m]
  }, [color])

  useFrame((_, delta) => {
    if (!points.current) return
    points.current.rotation.y += delta * 0.03
    const pos = points.current.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < pos.count; i += 1) {
      const y = pos.getY(i) + delta * 0.12
      pos.setY(i, y > 3.6 ? -0.9 : y)
    }
    pos.needsUpdate = true
  })

  return <points ref={points} geometry={geometry} material={material} />
}

function HoloPanel({
  position,
  rotation,
  scale,
  color,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number]
  color: string
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={scale} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(scale[0], scale[1])]} />
        <lineBasicMaterial color={color} transparent opacity={0.55} />
      </lineSegments>
    </group>
  )
}

function BackWall({ color }: { color: string }) {
  return (
    <group position={[0, 0.8, -3.2]}>
      <mesh>
        <planeGeometry args={[14, 6]} />
        <meshBasicMaterial color="#0a0e14" transparent opacity={0.85} />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[-5.5 + i * 1.55, 0, 0.01]}>
          <planeGeometry args={[0.05, 5]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  )
}

export function OperationsRoom({ agent }: Props) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <hemisphereLight args={[agent.accent, '#0a0e14', 0.4]} />
      <directionalLight position={[3, 5, 2]} intensity={0.6} color={agent.accent} />

      <BackWall color={agent.accent} />
      <FloorGrid color={agent.accent} />
      <Particles color={agent.glow} />

      <HoloPanel
        position={[-3.2, 0.9, -1.8]}
        rotation={[0, 0.5, 0]}
        scale={[1.8, 1.1]}
        color={agent.accent}
      />
      <HoloPanel
        position={[3.2, 0.9, -1.8]}
        rotation={[0, -0.5, 0]}
        scale={[1.8, 1.1]}
        color={agent.accent}
      />
      <HoloPanel
        position={[-2.4, -0.2, -1]}
        rotation={[-0.3, 0.6, 0]}
        scale={[1, 0.6]}
        color={agent.glow}
      />
      <HoloPanel
        position={[2.4, -0.2, -1]}
        rotation={[-0.3, -0.6, 0]}
        scale={[1, 0.6]}
        color={agent.glow}
      />

      <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.35, 1.42, 96]} />
        <meshBasicMaterial color={agent.accent} transparent opacity={0.7} />
      </mesh>
      <mesh position={[0, -0.89, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.65, 1.67, 96]} />
        <meshBasicMaterial color={agent.glow} transparent opacity={0.35} />
      </mesh>
    </>
  )
}
