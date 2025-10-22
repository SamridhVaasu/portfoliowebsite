import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const ParticleField = () => {
  const pointsRef = useRef()
  const materialRef = useRef()

  // Increased particles for more density
  const particleCount = 8000
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      // Creating a more spherical distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const r = 50 + Math.random() * 50 // Varying distances from center
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  const colors = useMemo(() => {
    const color = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      // Creating a more varied color palette
      const colorChoice = Math.random()
      if (colorChoice < 0.3) {
        // Purple/Pink hues
        color[i * 3] = 0.8 + Math.random() * 0.2     // R
        color[i * 3 + 1] = 0.2 + Math.random() * 0.3 // G
        color[i * 3 + 2] = 0.8 + Math.random() * 0.2 // B
      } else if (colorChoice < 0.6) {
        // Blue hues
        color[i * 3] = 0.2 + Math.random() * 0.2     // R
        color[i * 3 + 1] = 0.3 + Math.random() * 0.3 // G
        color[i * 3 + 2] = 0.8 + Math.random() * 0.2 // B
      } else {
        // White/Yellow sparkles
        const brightness = 0.8 + Math.random() * 0.2
        color[i * 3] = brightness                     // R
        color[i * 3 + 1] = brightness                 // G
        color[i * 3 + 2] = brightness * 0.8          // B
      }
    }
    return color
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const time = state.clock.getElapsedTime()

    // More complex rotation and movement
    pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.2
    pointsRef.current.rotation.y = Math.cos(time * 0.05) * 0.2
    pointsRef.current.rotation.z = Math.sin(time * 0.04) * 0.1

    const positions = pointsRef.current.geometry.attributes.position.array
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // More organic movement with varying frequencies
      positions[i3] += Math.sin((time + positions[i3 + 1]) * 0.2) * 0.02 * Math.sin(time * 0.1)
      positions[i3 + 1] += Math.cos((time + positions[i3]) * 0.15) * 0.02 * Math.cos(time * 0.12)
      positions[i3 + 2] += Math.sin((time + positions[i3 + 2]) * 0.1) * 0.02 * Math.sin(time * 0.14)
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    // Pulse the particle size
    if (materialRef.current) {
      materialRef.current.size = 0.3 + Math.sin(time * 0.8) * 0.1
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} colors={colors}>
      <PointMaterial
        ref={materialRef}
        vertexColors
        size={0.3}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

const InteractiveBackground = () => {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame(() => {
    // Smoother camera movement
    camera.position.x += (mouse.current.x * 5 - camera.position.x) * 0.02
    camera.position.y += (mouse.current.y * 5 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })

  return null
}

const SpaceBackground2 = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <fog attach="fog" args={['#000', 50, 190]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleField />
        <InteractiveBackground />
      </Canvas>
    </div>
  )
}

export default SpaceBackground2