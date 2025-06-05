import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Utility to create a circular texture
function createCircleTexture(size = 64) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fillStyle = 'white'
  ctx.fill()
  const texture = new THREE.Texture(canvas)
  texture.needsUpdate = true
  return texture
}

function SpherePoints({ radius, count, color, vector }) {
  const meshRef = useRef()
  const circleTexture = useMemo(() => createCircleTexture(64), [])

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
    for (let i = 0; i < count; i++) {
      const pos = positions[i]
      const original = originalPositions[i]

      const distance = vector ? pos.distanceTo(vector) : Infinity

      if (distance < (radius * 0.75)) {
        const direction = pos.clone().sub(vector).normalize()
        pos.add(direction.multiplyScalar(20.5))
      } else {
        pos.lerp(original, 0.05)
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
      <pointsMaterial
        size={5}
        color={color}
        sizeAttenuation={true}
        alphaTest={0.5}
        transparent={true}
        map={circleTexture}
      />
    </points>
  )
}

function JarvisSphereGroup() {
  const groupRef = useRef()
  const { mouse, size } = useThree()
  const vector = useMemo(() => new THREE.Vector3(), [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
      groupRef.current.rotation.x += 0.001
    }
    vector.set(
      (mouse.x * size.width) / 2,
      (mouse.y * size.height) / 2,
      0
    )
    if (groupRef.current) {
      groupRef.current.worldToLocal(vector)
    }
  })

  return (
    <group ref={groupRef}>
      <SpherePoints radius={200} count={5000} color="#B20F60" vector={vector} />
      <SpherePoints radius={100} count={1000} color="#CDDB28" vector={vector} />
    </group>
  )
}

export const JarvisSphere = () => {
  return (
    <Canvas style={{ width: "100vw", height: "2000px", opacity: ".5"}} camera={{ position: [0, 0, 500], fov: 75 }}>
      <ambientLight />
      <JarvisSphereGroup />
    </Canvas>
  )
}