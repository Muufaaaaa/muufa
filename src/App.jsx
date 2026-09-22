import React, { useState, useCallback } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import PlayerCard from './components/ui/PlayerCard';
import QuestLog from './components/ui/QuestLog';
import TerminalFooter from './components/ui/TerminalFooter';

/**
 * Main Application Component
 * Assembles the 3D Interactive Scene, Player Stats ID Card, Quest Log, and Terminal Footer
 * with high-performance 60 FPS target and Clean Retro-Modern Indie Game aesthetics.
 */
export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Synthesize mechanical game clicks via Web Audio API (0 KB audio assets needed)
  const playMechanicalClick = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch (e) {
      // AudioContext policy fallback
    }
  }, [soundEnabled]);

  // Subtle blip for hover events
  const playBlip = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(640, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } catch (e) {
      // AudioContext policy fallback
    }
  }, [soundEnabled]);

  return (
    <div className="min-h-screen bg-game-bg text-slate-100 relative selection:bg-game-accent selection:text-white">
      
      {/* Subtle CRT Scanline & Grain Overlay */}
      <div className="fixed inset-0 scanlines pointer-events-none z-40 opacity-40" />

      {/* Top HUD Navigation Bar */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playBlip={playBlip}
      />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col gap-12 sm:gap-20">
        {/* 1. Hero Section with 3D Canvas */}
        <Hero
          playClick={playMechanicalClick}
          playBlip={playBlip}
        />

        {/* 2. Player Profile Section with 3D Tilt Card */}
        <PlayerCard
          playBlip={playBlip}
        />

        {/* 3. Quest Log / Projects Section */}
        <QuestLog
          playClick={playMechanicalClick}
          playBlip={playBlip}
        />

        {/* 4. Terminal / Game Over Contact Footer */}
        <TerminalFooter
          playClick={playMechanicalClick}
          playBlip={playBlip}
        />
      </main>

    </div>
  );
}
