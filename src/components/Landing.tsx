import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  const particlesCount = 5000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const radius = 1;

    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }

    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }

    // Slowly cycle through colors
    if (materialRef.current) {
      const time = state.clock.getElapsedTime() * 0.2;
      const r = Math.sin(time) * 0.5 + 0.5;
      const g = Math.sin(time + 2) * 0.5 + 0.5;
      const b = Math.sin(time + 4) * 0.5 + 0.5;
      materialRef.current.color.setRGB(r, g, b);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.02}
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

interface LandingProps {
  onEnter: () => void;
}

export default function Landing({ onEnter }: LandingProps) {
  return (
    <div
      className="fixed inset-0 bg-black cursor-pointer flex items-center justify-center"
      onClick={onEnter}
    >
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ParticleSphere />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
}
