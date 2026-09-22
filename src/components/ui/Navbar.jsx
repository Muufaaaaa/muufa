import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, ShieldCheck, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar({ soundEnabled, setSoundEnabled, playBlip }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('id-ID', { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Player Status & System LED */}
        <div className="flex items-center gap-3 pointer-events-auto bg-game-panel/90 backdrop-blur-md border border-game-border px-3 py-1.5 rounded-none notched-corner-tr shadow-retro-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-game-mint opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-game-mint"></span>
            </span>
            <span className="font-mono text-xs font-bold text-game-mint tracking-wider">
              MUUFA_OS v2.4
            </span>
          </div>

          <div className="h-3 w-[1px] bg-game-border hidden sm:block" />

          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-game-muted">
            <Activity className="w-3 h-3 text-game-amber" />
            <span>60.0 FPS LOCKED</span>
          </div>
        </div>

        {/* Center: Navigation Menu Pills */}
        <nav className="hidden md:flex items-center gap-1 pointer-events-auto bg-game-panel/90 backdrop-blur-md border border-game-border p-1 shadow-retro-sm">
          <a
            href="#hero"
            onClick={playBlip}
            className="px-3 py-1 font-mono text-xs text-game-muted hover:text-white hover:bg-game-card transition-colors tracking-wide"
          >
            [01 // HOME]
          </a>
          <a
            href="#profile"
            onClick={playBlip}
            className="px-3 py-1 font-mono text-xs text-game-muted hover:text-white hover:bg-game-card transition-colors tracking-wide"
          >
            [02 // PLAYER_ID]
          </a>
          <a
            href="#quests"
            onClick={playBlip}
            className="px-3 py-1 font-mono text-xs text-game-muted hover:text-white hover:bg-game-card transition-colors tracking-wide"
          >
            [03 // QUEST_LOG]
          </a>
          <a
            href="#contact"
            onClick={playBlip}
            className="px-3 py-1 font-mono text-xs text-game-muted hover:text-white hover:bg-game-card transition-colors tracking-wide"
          >
            [04 // TERMINAL]
          </a>
        </nav>

        {/* Right: Sound Toggle, Clock, GitHub */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* SFX Audio Toggle */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              playBlip();
            }}
            title={soundEnabled ? "SFX Enabled" : "SFX Muted"}
            className="p-1.5 bg-game-panel border border-game-border hover:border-game-borderBright text-game-muted hover:text-white transition-colors"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-game-mint" />
            ) : (
              <VolumeX className="w-4 h-4 text-game-muted" />
            )}
          </button>

          {/* Clock Widget */}
          <div className="hidden lg:flex items-center px-2.5 py-1.5 bg-game-panel border border-game-border font-mono text-xs text-slate-300">
            <span>{time} WIB</span>
          </div>

          {/* GitHub Direct Link */}
          <a
            href="https://github.com/Muufaaaaa"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playBlip}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-game-card border border-game-border hover:border-game-accent text-xs font-mono font-bold text-white transition-all shadow-retro-sm active:translate-x-0.5 active:translate-y-0.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GITHUB</span>
          </a>
        </div>

      </div>
    </header>
  );
}
