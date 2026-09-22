import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Gamepad2, Terminal, Sparkles } from 'lucide-react';
import Scene from '../3d/Scene';

export default function Hero({ playClick, playBlip }) {
  const handleScrollToExplore = () => {
    playClick();
    const el = document.getElementById('profile');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 pb-12 overflow-hidden">
      
      {/* Background Grid & Vignette */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-game-bg via-transparent to-game-bg/60 pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Game UI Typography & Tactical Badges (7 Cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Indie Status HUD Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-game-panel border border-game-border mb-6 shadow-retro-sm">
            <span className="w-2 h-2 bg-game-accent rounded-none animate-pulse"></span>
            <span className="font-mono text-xs text-game-text font-medium tracking-wider">
              READY PLAYER // INFORMATICS CS '24
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3 font-sans leading-[1.1]">
            Muhammad Wildan <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Faiz Althafah
            </span>
          </h1>

          {/* Sub-Headline */}
          <div className="flex items-center gap-3 my-2">
            <div className="h-4 w-1 bg-game-accent" />
            <h2 className="text-xl sm:text-2xl font-mono font-semibold text-game-mint tracking-wide">
              Software Engineer &amp; Game Developer
            </h2>
          </div>

          {/* Mission Brief / Description */}
          <p className="mt-4 text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed font-sans">
            Membangun fondasi rekayasa sistem berkinerja tinggi, arsitektur database relasional, 
            serta gameplay scripting tingkat lanjut (Minecraft &amp; Roblox server ecosystems).
          </p>

          {/* Skill Tag Pills */}
          <div className="flex flex-wrap gap-2 my-6 font-mono text-xs text-slate-300">
            <span className="px-2.5 py-1 bg-game-card border border-game-border text-game-cyan">
              #C++
            </span>
            <span className="px-2.5 py-1 bg-game-card border border-game-border text-game-amber">
              #SQL
            </span>
            <span className="px-2.5 py-1 bg-game-card border border-game-border text-game-mint">
              #PHP
            </span>
            <span className="px-2.5 py-1 bg-game-card border border-game-border text-game-accent">
              #PYTHON
            </span>
            <span className="px-2.5 py-1 bg-game-card border border-game-border text-slate-300">
              #DISTRIBUTED_SYSTEMS
            </span>
          </div>

          {/* Tactile Call To Action (CTA) Button */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              onClick={handleScrollToExplore}
              onMouseEnter={playBlip}
              className="btn-game-primary px-7 py-4 text-sm sm:text-base group"
            >
              <Gamepad2 className="w-5 h-5 mr-2.5 transition-transform group-hover:rotate-12" />
              <span>Press Start [Explore]</span>
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#quests"
              onClick={playClick}
              className="btn-game-secondary px-5 py-4 text-xs sm:text-sm"
            >
              <Terminal className="w-4 h-4 mr-2 text-game-cyan" />
              <span>View Quests (4)</span>
            </a>
          </div>

          {/* Quick HUD Metrics */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-10 pt-6 border-t border-game-border/60">
            <div>
              <div className="font-mono text-[10px] text-game-muted uppercase">Semester</div>
              <div className="font-mono text-lg font-bold text-white">04 @ UHAMKA</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-game-muted uppercase">Domicile</div>
              <div className="font-mono text-lg font-bold text-game-amber">Bogor, ID</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-game-muted uppercase">Focus</div>
              <div className="font-mono text-lg font-bold text-game-mint">Game Systems</div>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Interactive 3D Canvas (5 Cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[600px] w-full relative flex items-center justify-center"
        >
          {/* Canvas Frame Container */}
          <div className="w-full h-full relative rounded-none border border-game-border bg-game-panel/40 backdrop-blur-sm p-1 shadow-retro-lg overflow-hidden group">
            
            {/* Corner Decorative HUD Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-game-accent pointer-events-none z-20" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-game-accent pointer-events-none z-20" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-game-accent pointer-events-none z-20" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-game-accent pointer-events-none z-20" />
            
            {/* Top Bar inside 3D Frame */}
            <div className="absolute top-3 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
              <span className="font-mono text-[10px] text-game-muted tracking-wider">
                INTERACTIVE_VIEWPORT // 3D_PARALLAX
              </span>
              <span className="font-mono text-[10px] text-game-mint flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> MOUSE_AWARE
              </span>
            </div>

            {/* The 3D Scene */}
            <Scene />

            {/* Bottom Indicator */}
            <div className="absolute bottom-3 left-0 right-0 z-20 text-center pointer-events-none">
              <span className="font-mono text-[10px] text-game-muted bg-game-panel/80 px-2 py-0.5 border border-game-border">
                [ DRAG OR MOVE MOUSE TO ROTATE CONSOLE ]
              </span>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}
