import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo, useState, useEffect } from 'react';
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
  const [showPassword, setShowPassword] = useState(false);
  const [showRickRoll, setShowRickRoll] = useState(false);
  const [password, setPassword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showPassword && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPassword]);

  const handleGraphicClick = () => {
    if (!showPassword) {
      setShowPassword(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'password') {
      onEnter();
    } else {
      setShowRickRoll(true);
    }
  };

  if (showRickRoll) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=31UWeSLW7Ho3ReTa&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  if (showPassword) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="text-center"
          style={{
            fontFamily: '"Courier New", Courier, monospace',
          }}
        >
          <div
            className="border-2 p-6 rounded-xl"
            style={{
              borderColor: '#00ff00',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
            }}
          >
            <div
              className="text-lg mb-4 tracking-wider"
              style={{ color: '#00ff00' }}
            >
              ENTER PASSWORD
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#00ff00' }}>&gt;</span>
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-none outline-none text-lg tracking-widest"
                style={{
                  color: '#00ff00',
                  caretColor: '#00ff00',
                  width: '200px',
                }}
                autoComplete="off"
              />
              <span
                className="animate-pulse"
                style={{ color: '#00ff00' }}
              >
                _
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black cursor-pointer flex items-center justify-center"
      onClick={handleGraphicClick}
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
