import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Trail } from '@react-three/drei';
import * as THREE from 'three';

// Data particle that travels through the network
function DataParticle({ startPos, endPos, speed, color }) {
  const ref = useRef();
  const [isAnimating, setIsAnimating] = React.useState(true);
  
  useFrame((state) => {
    if (!ref.current || !isAnimating) return;
    
    const t = (state.clock.elapsedTime % speed) / speed;
    ref.current.position.lerpVectors(
      new THREE.Vector3(...startPos),
      new THREE.Vector3(...endPos),
      t
    );
    
    if (t >= 0.99) {
      setIsAnimating(false);
      setTimeout(() => setIsAnimating(true), Math.random() * 2000);
    }
  });

  return (
    <mesh ref={ref} position={startPos}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
      <Trail
        width={0.05}
        length={8}
        color={color}
        attenuation={(t) => t * t}
      />
    </mesh>
  );
}

// Enhanced node with pulse effect
function Node({ position, color = '#4facfe', size = 0.08 }) {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      ref.current.scale.setScalar(
        size * (1 + Math.sin(t * 2 + position[0] + position[1]) * 0.1)
      );
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 24, 24]} />
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
        distort={0.3}
        speed={2}
      />
    </mesh>
  );
}

function PortfolioScene() {
  const groupRef = useRef();
  
  // More complex network structure
  const layers = [5, 8, 12, 8, 5]; // 5 layers with varying sizes
  const layerSpacing = 1.5;
  
  // Generate network structure
  const { nodes, connections } = useMemo(() => {
    const nodes = [];
    const connections = [];
    
    layers.forEach((layerSize, layerIndex) => {
      const x = (layerIndex - (layers.length - 1) / 2) * layerSpacing;
      
      for (let i = 0; i < layerSize; i++) {
        const y = (i - (layerSize - 1) / 2) * 0.6;
        // Add z-variation for more 3D feel
        const z = Math.sin(i * 0.5 + layerIndex) * 0.2;
        nodes.push([x, y, z]);
        
        // Create connections to next layer
        if (layerIndex < layers.length - 1) {
          const nextLayerSize = layers[layerIndex + 1];
          for (let j = 0; j < nextLayerSize; j++) {
            if (Math.random() > 0.3) { // 70% chance of connection
              const nextY = (j - (nextLayerSize - 1) / 2) * 0.6;
              const nextZ = Math.sin(j * 0.5 + layerIndex + 1) * 0.2;
              connections.push({
                start: [x, y, z],
                end: [x + layerSpacing, nextY, nextZ],
                color: `hsl(${180 + layerIndex * 30}, 70%, 50%)`
              });
            }
          }
        }
      }
    });
    
    return { nodes, connections };
  }, []);

  // Generate data particles
  const particles = useMemo(() => {
    return connections.map((conn, i) => ({
      ...conn,
      speed: 1 + Math.random() * 2, // Random speed between 1-3 seconds
      delay: Math.random() * 2000, // Random start delay
    }));
  }, [connections]);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((position, i) => (
        <Node 
          key={`node-${i}`} 
          position={position}
          color={`hsl(${180 + Math.floor(i / 5) * 30}, 70%, 50%)`}
          size={0.08 + Math.random() * 0.02}
        />
      ))}

      {/* Connections */}
      {connections.map((conn, i) => (
        <line key={`conn-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                ...conn.start,
                ...conn.end
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={conn.color} transparent opacity={0.2} />
        </line>
      ))}

      {/* Data Particles */}
      {particles.map((particle, i) => (
        <DataParticle
          key={`particle-${i}`}
          startPos={particle.start}
          endPos={particle.end}
          speed={particle.speed}
          color={particle.color}
        />
      ))}

      {/* Enhanced Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#4facfe" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#00f2fe" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
    </group>
  );
}

export default PortfolioScene; 