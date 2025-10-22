import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

const RotatingTorus = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.position.y = Math.sin(time * 0.5) * 2;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[10, 3, 16, 100]} />
      <meshStandardMaterial color="#6b46c1" wireframe />
    </mesh>
  );
};

const MovingStars = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / innerHeight) * 2 + 1;
  };

  useFrame(() => {
    camera.position.x += (mouse.current.x * 10 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 10 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};

const SpaceBackground = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
        <RotatingTorus />
        <MovingStars />
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;
