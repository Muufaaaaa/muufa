import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Cpu, Database, Server, Terminal, MapPin, GraduationCap, Award, Zap, Code2 } from 'lucide-react';
import { PLAYER_DATA } from '../../data/portfolioData';
import profilePic from '../../assets/profile.jpg';

/**
 * 3D Tilt Player Card Component with Framer Motion
 * Computes cursor coordinates relative to card bounds and renders dynamic 3D perspective rotation + specular sheen.
 */
export default function PlayerCard({ playBlip }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for buttery smooth physics without jitter
  const springConfig = { damping: 22, stiffness: 220 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  // Dynamic glare / reflection coordinates
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to center of card (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (playBlip) playBlip();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="profile" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">

      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 border-b border-game-border pb-6">
        <div className="flex items-center gap-2 font-mono text-xs text-game-accent tracking-widest uppercase mb-1">
          <Award className="w-4 h-4" />
          <span>SECTION 02 // CHARACTER SHEET</span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between w-full gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Player Profile &amp; Attributes
          </h2>
          <div className="font-mono text-xs text-game-muted">
            SYS_ID: <span className="text-game-mint font-bold">MUUFA_04_CS</span> // STATUS: VERIFIED
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* ================= 3D TILT PHOTO CARD (5 COLS) ================= */}
        <div className="lg:col-span-5 flex justify-center perspective-[1200px]">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="w-full max-w-md bg-game-panel border-2 border-game-border shadow-retro-lg p-6 relative overflow-hidden transition-colors duration-200 hover:border-game-borderBright select-none"
          >
            {/* Specular glare sheen overlay */}
            {isHovered && (
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-25 z-30 mix-blend-overlay"
                style={{
                  background: `radial-gradient(circle 350px at ${glareX} ${glareY}, rgba(255,255,255,0.7), transparent 70%)`
                }}
              />
            )}

            {/* Top ID Card Header */}
            <div className="flex justify-between items-center pb-3 mb-4 border-b border-game-border/80 font-mono text-xs text-game-muted">
              <div className="flex items-center gap-1.5 text-white font-bold tracking-wider">
                <Shield className="w-3.5 h-3.5 text-game-accent" />
                <span>DEV_ID // CARD</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 bg-game-card border border-game-border text-game-mint font-bold">
                LVL {PLAYER_DATA.level}
              </span>
            </div>

            {/* Profile Photo Area */}
            <div className="relative w-full aspect-square max-h-64 bg-game-card border border-game-border overflow-hidden mb-4 group flex items-center justify-center">

              {/* Photo Background Art & Grid */}
              <div className="absolute inset-0 bg-dots-pattern opacity-40" />

              {/* Retro Avatar / Visual Representation */}
              <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-24 h-24 rounded-none border-2 border-game-accent bg-gradient-to-br from-game-border to-game-card p-1 shadow-retro-sm mb-3 flex items-center justify-center">
                  {/* Pixel Character Icon */}
                  <img
                    src={profilePic}
                    alt="Muhammad Wildan Faiz Althafah"
                    className="w-full h-full object-cover border-2 border-game-accent shadow-retro-sm mb-3"
                  />
                </div>

                <div className="font-mono text-sm font-bold text-white tracking-wide">
                  {PLAYER_DATA.handle}
                </div>
                <div className="font-mono text-xs text-game-accent font-semibold">
                  CLASS: {PLAYER_DATA.classType}
                </div>
              </div>

              {/* Status Badge Over Photo */}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center px-2 py-1 bg-game-bg/90 backdrop-blur-sm border border-game-border font-mono text-[10px]">
                <span className="text-game-muted">HP: 100/100</span>
                <span className="text-game-mint font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-game-mint inline-block animate-ping" />
                  ONLINE
                </span>
              </div>
            </div>

            {/* Identification Details */}
            <div className="space-y-2 mb-4 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-game-border/40">
                <span className="text-game-muted">NAME:</span>
                <span className="text-white font-bold">{PLAYER_DATA.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-game-border/40">
                <span className="text-game-muted">CAMPUS:</span>
                <span className="text-slate-300">UHAMKA (Sem 4)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-game-border/40">
                <span className="text-game-muted">LOCATION:</span>
                <span className="text-game-amber">{PLAYER_DATA.location}</span>
              </div>
            </div>

            {/* RPG Character Base Attributes */}
            <div className="pt-2 border-t border-game-border/80 mb-3">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-[10px] text-game-muted uppercase tracking-wider">
                  BASE ATTRIBUTES
                </span>
                <span className="font-mono text-[10px] text-game-mint font-bold">
                  AVG: 84%
                </span>
              </div>
              <div className="space-y-1.5">
                {PLAYER_DATA.attributes.map((attr) => (
                  <div key={attr.label} className="font-mono text-[10px]">
                    <div className="flex justify-between text-slate-300 mb-0.5">
                      <span className="text-[9px] text-slate-400">{attr.label}</span>
                      <span className="font-bold text-[10px]" style={{ color: attr.color }}>
                        {attr.val}/{attr.max}
                      </span>
                    </div>
                    <div className="w-full bg-game-bg h-1.5 border border-game-border/60 overflow-hidden">
                      <div
                        className="h-full transition-all duration-700"
                        style={{ width: `${attr.val}%`, backgroundColor: attr.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Tech Stack Micro Badges */}
            <div className="pt-2 border-t border-game-border/80">
              <div className="font-mono text-[10px] text-game-muted uppercase tracking-wider mb-2">
                EQUIPPED LANGUAGES &amp; STACK
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-xs">
                {PLAYER_DATA.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="py-1 px-1 bg-game-card border border-game-border text-white font-bold hover:border-game-accent transition-colors"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Card Holographic Footer */}
            <div className="mt-4 pt-2 border-t border-dashed border-game-border/60 flex items-center justify-between text-[10px] font-mono text-game-muted">
              <span>SCAN CODE: 884-902-11</span>
              <span>INFORMATICS CS</span>
            </div>

          </motion.div>
        </div>

        {/* ================= STATS & DOSSIER (7 COLS) ================= */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Official Bio Panel */}
          <div className="bg-game-panel border border-game-border p-6 shadow-retro">
            <div className="flex items-center gap-2 font-mono text-xs text-game-accent uppercase tracking-wider mb-3">
              <Terminal className="w-4 h-4 text-game-accent" />
              <span>PLAYER_DOSSIER // BIOGRAPHY</span>
            </div>

            {/* The verbatim required description text */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans mb-4 border-l-2 border-game-accent pl-4">
              {PLAYER_DATA.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-game-border/80 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <GraduationCap className="w-4 h-4 text-game-cyan" />
                <span>Teknik Informatika (UHAMKA)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-game-amber" />
                <span>Domisili: Bogor, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Detailed Tech Stacks with Ratings & Descriptions */}
          <div className="bg-game-panel border border-game-border p-6 shadow-retro">
            <div className="flex items-center justify-between mb-4 border-b border-game-border pb-3">
              <div className="flex items-center gap-2 font-mono text-xs text-game-mint uppercase tracking-wider">
                <Code2 className="w-4 h-4 text-game-mint" />
                <span>CORE TECH STACK METRICS</span>
              </div>
              <span className="font-mono text-xs text-game-muted">4 MAIN DISCIPLINES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PLAYER_DATA.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-game-card border border-game-border p-3 hover:border-game-borderBright transition-colors"
                >
                  <div className="flex justify-between items-baseline mb-1 font-mono">
                    <span className="text-sm font-bold text-white">{skill.name}</span>
                    <span className="text-xs text-game-cyan font-bold">{skill.rating}%</span>
                  </div>

                  {/* Visual Stat Gauge */}
                  <div className="w-full bg-game-bg h-2 border border-game-border mb-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-game-cyan to-game-mint h-full transition-all duration-1000"
                      style={{ width: `${skill.rating}%` }}
                    />
                  </div>

                  <p className="text-xs text-game-muted font-sans leading-snug">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Game Development Ecosystem Panel (Minecraft & Roblox) */}
          <div className="bg-game-panel border border-game-border p-6 shadow-retro">
            <div className="flex items-center gap-2 font-mono text-xs text-game-amber uppercase tracking-wider mb-3">
              <Zap className="w-4 h-4 text-game-amber" />
              <span>GAME DEVELOPMENT &amp; SERVER EXPERTISE</span>
            </div>

            <div className="space-y-3">
              {PLAYER_DATA.gameDevSpecialties.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <span className="font-mono text-xs text-game-amber font-bold pt-0.5">
                    [0{idx + 1}]
                  </span>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-white tracking-wide">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
