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
  const [showLogin, setShowLogin] = useState(false);
  const [showRickRoll, setShowRickRoll] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayedUsernameLabel, setDisplayedUsernameLabel] = useState('');
  const [displayedPasswordLabel, setDisplayedPasswordLabel] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [borderDrawn, setBorderDrawn] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);

  const usernameLabel = 'USERNAME';
  const passwordLabel = 'PASSWORD';

  useEffect(() => {
    if (showLogin) {
      // Start border animation
      const borderTimer = setTimeout(() => setBorderDrawn(true), 100);

      // Type out both labels after border draws
      const typeTimer = setTimeout(() => {
        let i = 0;
        const totalLength = usernameLabel.length + passwordLabel.length;
        const typeInterval = setInterval(() => {
          if (i < usernameLabel.length) {
            setDisplayedUsernameLabel(usernameLabel.slice(0, i + 1));
          } else if (i < totalLength) {
            setDisplayedPasswordLabel(passwordLabel.slice(0, i - usernameLabel.length + 1));
          } else {
            clearInterval(typeInterval);
            // Show inputs after typing completes
            setTimeout(() => {
              setShowInputs(true);
              usernameRef.current?.focus();
            }, 200);
          }
          i++;
        }, 80);
      }, 800);

      return () => {
        clearTimeout(borderTimer);
        clearTimeout(typeTimer);
      };
    }
  }, [showLogin]);

  useEffect(() => {
    if (showInputs && usernameRef.current) {
      usernameRef.current.focus();
    }
  }, [showInputs]);

  const handleGraphicClick = () => {
    if (!showLogin) {
      setShowLogin(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.toLowerCase() === 'user' && password.toLowerCase() === 'password') {
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

  if (showLogin) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <style>
          {`
            @keyframes glowPulse {
              0%, 100% { filter: drop-shadow(0 0 5px #00aaff); }
              50% { filter: drop-shadow(0 0 15px #00aaff); }
            }
          `}
        </style>
        <form
          onSubmit={handleSubmit}
          className="text-center relative"
          style={{
            fontFamily: '"Courier New", Courier, monospace',
          }}
        >
          <svg
            width="280"
            height="240"
            className="absolute top-0 left-0"
            style={{
              animation: borderDrawn ? 'glowPulse 2s ease-in-out infinite' : 'none',
            }}
          >
            <rect
              x="2"
              y="2"
              width="276"
              height="236"
              rx="12"
              ry="12"
              fill="rgba(0, 0, 0, 0.9)"
              stroke="#00aaff"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset={borderDrawn ? 0 : 1000}
              style={{
                transition: 'stroke-dashoffset 0.7s ease-out',
              }}
            />
          </svg>
          <div
            className="relative p-6"
            style={{ width: '280px', height: '240px' }}
          >
            {/* Username Label */}
            <div
              className="text-sm mb-1 tracking-wider text-left"
              style={{
                color: '#00aaff',
                minHeight: '20px',
              }}
            >
              {displayedUsernameLabel}
              {displayedUsernameLabel.length < usernameLabel.length && displayedUsernameLabel.length > 0 && (
                <span className="animate-pulse">_</span>
              )}
            </div>
            {/* Username Input */}
            <div
              className="flex items-center gap-2 mb-4"
              style={{
                opacity: showInputs ? 1 : 0,
                transition: 'opacity 0.3s ease-in',
              }}
            >
              <span style={{ color: '#00aaff' }}>&gt;</span>
              <input
                ref={usernameRef}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent border-none outline-none text-lg tracking-widest"
                style={{
                  color: '#00aaff',
                  caretColor: '#00aaff',
                  width: '200px',
                }}
                autoComplete="off"
                tabIndex={1}
              />
            </div>
            {/* Password Label */}
            <div
              className="text-sm mb-1 tracking-wider text-left"
              style={{
                color: '#00aaff',
                minHeight: '20px',
              }}
            >
              {displayedPasswordLabel}
              {displayedPasswordLabel.length < passwordLabel.length && displayedPasswordLabel.length > 0 && (
                <span className="animate-pulse">_</span>
              )}
            </div>
            {/* Password Input */}
            <div
              className="flex items-center gap-2"
              style={{
                opacity: showInputs ? 1 : 0,
                transition: 'opacity 0.3s ease-in',
              }}
            >
              <span style={{ color: '#00aaff' }}>&gt;</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-none outline-none text-lg tracking-widest"
                style={{
                  color: '#00aaff',
                  caretColor: '#00aaff',
                  width: '200px',
                }}
                autoComplete="off"
                tabIndex={2}
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-4 py-1 text-sm tracking-wider border rounded"
              style={{
                opacity: showInputs ? 1 : 0,
                transition: 'opacity 0.3s ease-in',
                color: '#00aaff',
                borderColor: '#00aaff',
                backgroundColor: 'transparent',
              }}
              tabIndex={3}
            >
              LOGIN
            </button>
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
