import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RetroConsole } from './RetroConsole';
import * as THREE from 'three';

/**
 * Floating Dust / Voxel Sparks to give depth to the indie game space
 */
function FloatingParticles({ count = 35 }) {
  const pointsRef = useRef();

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      sc[i] = Math.random() * 0.08 + 0.03;
    }
    return [pos, sc];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime() * 0.15;
    pointsRef.current.rotation.y = time * 0.4;
    pointsRef.current.rotation.x = Math.sin(time) * 0.2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#10df9e"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

/**
 * Camera Parallax Rig:
 * Adjusts camera slightly relative to pointer without triggering React re-renders.
 */
function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.6, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.4, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/**
 * Scene: Highly performant WebGL 3D Canvas
 * Configured for 60 FPS with DPR clamping, powerPreference, and zero CPU bottlenecks.
 */
export default function Scene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 2]} // Prevents performance drop on 4k/Retina screens
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting Rig: Clean high-contrast game lighting */}
          <ambientLight intensity={0.7} />
          
          {/* Key Light (Crisp White) */}
          <directionalLight
            position={[5, 6, 4]}
            intensity={1.4}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          {/* Fill Light (Soft Teal/Cyan) */}
          <directionalLight
            position={[-5, -2, -2]}
            intensity={0.6}
            color="#00d2ff"
          />

          {/* Rim / Hair Light (Vibrant Orange Retro Glow) */}
          <pointLight
            position={[0, 4, -3]}
            intensity={1.8}
            color="#ff5533"
          />

          {/* 3D Meshes */}
          <RetroConsole />
          <FloatingParticles count={35} />
          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  );
}
