import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ScaleModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Small pointer / ambient movement limited to 3-5 degrees as per prompt
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.08;
      groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Pillar */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.15, 2.5, 32]} />
        <meshStandardMaterial color="#C99618" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -1.25, 0]}>
        <cylinderGeometry args={[0.6, 0.7, 0.2, 32]} />
        <meshStandardMaterial color="#8B6508" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Top Crossbar */}
      <mesh position={[0, 1.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 2.2, 32]} />
        <meshStandardMaterial color="#E7B928" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* Left Pan */}
      <group position={[-1, 0.2, 0]}>
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.5, 0.1, 0.15, 32]} />
          <meshStandardMaterial color="#C99618" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Right Pan */}
      <group position={[1, 0.2, 0]}>
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.5, 0.1, 0.15, 32]} />
          <meshStandardMaterial color="#C99618" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

export const GoldLegalScaleCanvas: React.FC<{ className?: string }> = ({ className = 'h-64 w-full' }) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  if (reducedMotion || hasError) {
    return <StaticLegalScaleFallback className={className} />;
  }

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        onCreated={() => {}}
        onError={() => setHasError(true)}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -5, -2]} intensity={0.4} color="#FFF8E4" />
        <ScaleModel />
      </Canvas>
    </div>
  );
};

export const StaticLegalScaleFallback: React.FC<{ className?: string }> = ({ className = 'h-64 w-full' }) => (
  <div className={`flex items-center justify-center bg-gradient-to-br from-brand-goldSoft to-brand-ivory dark:from-dark-card dark:to-dark-surface rounded-2xl p-6 border border-brand-borderLight dark:border-dark-border ${className}`} aria-hidden="true">
    <svg className="w-32 h-32 text-brand-gold drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 6l9-4 9 4M12 2v20M5 10l7-3 7 3M5 10c0 3.314 3.134 6 7 6s7-2.686 7-6M8 20h8" />
    </svg>
  </div>
);
