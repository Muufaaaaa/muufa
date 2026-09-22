import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * RetroConsole: Procedural 3D Retro Handheld Console & Floating Voxel Cartridge
 * Crafted purely with Three.js primitives for 0 KB asset size and locked 60 FPS performance.
 * Features ultra-smooth mouse tracking parallax via lerp inside useFrame.
 */
export function RetroConsole() {
  const groupRef = useRef();
  const screenMeshRef = useRef();
  const cartridgeRef = useRef();
  const orbitCubesRef = useRef([]);

  // Store mouse target coordinates without triggering React re-renders
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth lerp mouse tracking
    const targetRotX = -state.pointer.y * 0.35;
    const targetRotY = state.pointer.x * 0.45;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);

    // Subtle breathing floating motion
    const time = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(time * 1.5) * 0.12;

    // Floating cartridge rotation
    if (cartridgeRef.current) {
      cartridgeRef.current.rotation.y = time * 0.8;
      cartridgeRef.current.position.y = 1.6 + Math.sin(time * 2) * 0.1;
    }

    // Screen scanline color pulsation (subtle phosphor green/amber)
    if (screenMeshRef.current) {
      const pulse = (Math.sin(time * 3) + 1) * 0.5;
      screenMeshRef.current.material.emissiveIntensity = 0.4 + pulse * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* ================= MAIN CONSOLE BODY ================= */}
      {/* Chassis: Slate matte textured shell */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 3.8, 0.55]} />
        <meshStandardMaterial
          color="#161c28"
          roughness={0.4}
          metalness={0.15}
        />
      </mesh>

      {/* Edge Bevel Accent (Top Strip) */}
      <mesh position={[0, 1.85, 0.05]}>
        <boxGeometry args={[2.5, 0.08, 0.5]} />
        <meshStandardMaterial color="#ff5533" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Screen Frame Inset */}
      <mesh position={[0, 0.7, 0.25]}>
        <boxGeometry args={[2.2, 1.8, 0.15]} />
        <meshStandardMaterial color="#0b0e14" roughness={0.6} />
      </mesh>

      {/* Screen Glass: Retro Monochrome / Emerald Phosphor Display */}
      <mesh ref={screenMeshRef} position={[0, 0.7, 0.33]}>
        <planeGeometry args={[1.9, 1.5]} />
        <meshStandardMaterial
          color="#0d241d"
          emissive="#10df9e"
          emissiveIntensity={0.5}
          roughness={0.2}
        />
      </mesh>

      {/* Inner Screen HUD Graphic Elements (Voxel Character Mockup) */}
      <group position={[0, 0.7, 0.34]}>
        {/* Pixel Sprite Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.35, 0.02]} />
          <meshBasicMaterial color="#10df9e" />
        </mesh>
        {/* Pixel Eyes */}
        <mesh position={[-0.08, 0.05, 0.02]}>
          <boxGeometry args={[0.06, 0.06, 0.02]} />
          <meshBasicMaterial color="#080a0f" />
        </mesh>
        <mesh position={[0.08, 0.05, 0.02]}>
          <boxGeometry args={[0.06, 0.06, 0.02]} />
          <meshBasicMaterial color="#080a0f" />
        </mesh>
        {/* Mini Heart / HP icons */}
        <mesh position={[-0.7, 0.55, 0.01]}>
          <boxGeometry args={[0.1, 0.1, 0.01]} />
          <meshBasicMaterial color="#ff5533" />
        </mesh>
        <mesh position={[-0.55, 0.55, 0.01]}>
          <boxGeometry args={[0.1, 0.1, 0.01]} />
          <meshBasicMaterial color="#ff5533" />
        </mesh>
        <mesh position={[-0.4, 0.55, 0.01]}>
          <boxGeometry args={[0.1, 0.1, 0.01]} />
          <meshBasicMaterial color="#ff5533" />
        </mesh>
        {/* Status Text Bar */}
        <mesh position={[0.4, 0.55, 0.01]}>
          <boxGeometry args={[0.6, 0.06, 0.01]} />
          <meshBasicMaterial color="#10df9e" />
        </mesh>
      </group>

      {/* ================= CONTROLS SECTION ================= */}
      {/* D-PAD (Directional Cross) */}
      <group position={[-0.65, -0.8, 0.3]}>
        {/* Horizontal bar */}
        <mesh castShadow position={[0, 0, 0]}>
          <boxGeometry args={[0.7, 0.25, 0.16]} />
          <meshStandardMaterial color="#2a3245" roughness={0.5} />
        </mesh>
        {/* Vertical bar */}
        <mesh castShadow position={[0, 0, 0]}>
          <boxGeometry args={[0.25, 0.7, 0.16]} />
          <meshStandardMaterial color="#2a3245" roughness={0.5} />
        </mesh>
        {/* Center pivot indent */}
        <mesh position={[0, 0, 0.09]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#1a202c" />
        </mesh>
      </group>

      {/* Action Buttons (A & B) - Tilted Indie Style */}
      <group position={[0.65, -0.75, 0.3]}>
        {/* Button B (Tactile Mint Green) */}
        <mesh castShadow position={[-0.2, -0.15, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.14, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#10df9e" roughness={0.3} />
        </mesh>
        {/* Button A (Tactile Vermillion Orange) */}
        <mesh castShadow position={[0.2, 0.15, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.14, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#ff5533" roughness={0.3} />
        </mesh>
      </group>

      {/* Select & Start Rubber Pills */}
      <group position={[0, -1.4, 0.29]}>
        <mesh position={[-0.28, 0, 0]} rotation={[0, 0, -0.45]}>
          <boxGeometry args={[0.3, 0.08, 0.08]} />
          <meshStandardMaterial color="#3b4863" roughness={0.7} />
        </mesh>
        <mesh position={[0.28, 0, 0]} rotation={[0, 0, -0.45]}>
          <boxGeometry args={[0.3, 0.08, 0.08]} />
          <meshStandardMaterial color="#3b4863" roughness={0.7} />
        </mesh>
      </group>

      {/* Speaker Grill Slits */}
      <group position={[0.75, -1.4, 0.29]}>
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.35, 0.03, 0.02]} />
          <meshStandardMaterial color="#080a0f" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.35, 0.03, 0.02]} />
          <meshBasicMaterial color="#080a0f" />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[0.35, 0.03, 0.02]} />
          <meshBasicMaterial color="#080a0f" />
        </mesh>
      </group>

      {/* ================= FLOATING VOXEL CARTRIDGE ================= */}
      <group ref={cartridgeRef} position={[1.8, 1.4, -0.3]}>
        {/* Cartridge Plastic Housing */}
        <mesh castShadow>
          <boxGeometry args={[0.8, 0.9, 0.18]} />
          <meshStandardMaterial color="#2d3748" roughness={0.3} />
        </mesh>
        {/* Cartridge Sticker Art */}
        <mesh position={[0, 0.05, 0.1]}>
          <planeGeometry args={[0.6, 0.6]} />
          <meshStandardMaterial color="#ff5533" emissive="#ff5533" emissiveIntensity={0.2} />
        </mesh>
        {/* Contact Pins */}
        <mesh position={[0, -0.42, 0]}>
          <boxGeometry args={[0.7, 0.08, 0.1]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* Floating Low-Poly Geometric Relics (Indie game aesthetic) */}
      <mesh position={[-2.0, 0.8, 0.2]} rotation={[0.4, 0.6, 0.2]}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color="#00d2ff" wireframe={true} />
      </mesh>

      <mesh position={[-1.7, -1.2, -0.4]} rotation={[0.8, 0.2, 0.4]}>
        <tetrahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.2} metalness={0.4} />
      </mesh>
    </group>
  );
}
export default RetroConsole;
