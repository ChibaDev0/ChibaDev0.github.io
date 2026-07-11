"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Points as ThreePoints } from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const FIELD_RADIUS = 12;

const PARTICLE_GROUPS = [
  { count: 600, color: "#8b5cf6", size: 0.04, speed: 1 },
  { count: 400, color: "#4f46e5", size: 0.05, speed: 0.7 },
  { count: 300, color: "#22d3ee", size: 0.035, speed: 1.3 },
] as const;

function createParticlePositions(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function ParticleGroup({
  count,
  color,
  size,
  speed,
  reduceMotion,
}: {
  count: number;
  color: string;
  size: number;
  speed: number;
  reduceMotion: boolean;
}) {
  const pointsRef = useRef<ThreePoints>(null);
  const positions = useMemo(
    () => createParticlePositions(count, FIELD_RADIUS),
    [count],
  );

  useFrame((state, delta) => {
    if (reduceMotion || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.02 * speed;
    pointsRef.current.rotation.x += delta * 0.005 * speed;
    pointsRef.current.rotation.y += state.pointer.x * 0.0003;
    pointsRef.current.rotation.x += state.pointer.y * 0.00015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function ParticleField() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: false, alpha: true }}
    >
      {PARTICLE_GROUPS.map((group) => (
        <ParticleGroup
          key={group.color}
          {...group}
          reduceMotion={reduceMotion}
        />
      ))}
    </Canvas>
  );
}
