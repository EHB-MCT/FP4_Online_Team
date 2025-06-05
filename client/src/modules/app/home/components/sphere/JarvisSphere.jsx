import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function SpherePoints({ radius, count, color }) {
  const meshRef = useRef()
  const { mouse, size, camera } = useThree()

  const positions = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const theta = Math.acos(2 * Math.random() - 1)
      const phi = 2 * Math.PI * Math.random()
      const x = radius * Math.sin(theta) * Math.cos(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(theta)
      temp.push(new THREE.Vector3(x, y, z))
    }
    return temp
  }, [count, radius])

  const originalPositions = useMemo(() => positions.map(p => p.clone()), [])

  const positionsArray = useMemo(() => {
    const arr = new Float32Array(count * 3)
    positions.forEach((p, i) => {
      arr[i * 3] = p.x
      arr[i * 3 + 1] = p.y
      arr[i * 3 + 2] = p.z
    })
    return arr
  }, [positions, count])

  const geometryRef = useRef()

  useFrame(() => {
    const vector = new THREE.Vector3(
      (mouse.x * size.width) / 2,
      -(mouse.y * size.height) / 2,
      0
    )
    meshRef.current.worldToLocal(vector)

    for (let i = 0; i < count; i++) {
      const pos = positions[i]
      const original = originalPositions[i]

      const distance = pos.distanceTo(vector)

      if (distance < 50) {
        const direction = pos.clone().sub(vector).normalize()
        pos.add(direction.multiplyScalar(0.5))
      } else {
        pos.lerp(original, 0.05) // return to original position
      }

      positionsArray[i * 3] = pos.x
      positionsArray[i * 3 + 1] = pos.y
      positionsArray[i * 3 + 2] = pos.z
    }

    geometryRef.current.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positionsArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={2} color={color} />
    </points>
  )
}

export default function SphereScene() {
  return (
    <Canvas camera={{ position: [0, 0, 500], fov: 75 }}>
      <ambientLight />
      <SpherePoints radius={200} count={1000} color="#ffea70" />
      <SpherePoints radius={100} count={500} color="#0000ff" />
    </Canvas>
  )
}
