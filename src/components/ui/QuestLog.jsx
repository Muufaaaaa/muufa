import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, CheckCircle2, AlertTriangle, Cpu, Terminal, ExternalLink, Sparkles, ChevronRight } from 'lucide-react';
import { QUESTS } from '../../data/portfolioData';

export default function QuestLog({ playClick, playBlip }) {
  const [selectedQuestId, setSelectedQuestId] = useState(QUESTS[0].id);

  const activeQuest = QUESTS.find((q) => q.id === selectedQuestId) || QUESTS[0];

  const getDifficultyBadge = (difficulty) => {
    switch (difficulty) {
      case 'CRITICAL':
        return 'text-red-400 border-red-500/40 bg-red-950/30';
      case 'HARD':
        return 'text-game-amber border-game-amber/40 bg-amber-950/30';
      default:
        return 'text-game-mint border-game-mint/40 bg-emerald-950/30';
    }
  };

  return (
    <section id="quests" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 border-b border-game-border pb-6">
        <div className="flex items-center gap-2 font-mono text-xs text-game-mint tracking-widest uppercase mb-1">
          <Terminal className="w-4 h-4" />
          <span>SECTION 03 // MISSION ARCHIVES</span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between w-full gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Quest Log &amp; Projects
          </h2>
          <div className="font-mono text-xs text-game-muted">
            AVAILABLE QUESTS: <span className="text-white font-bold">04/04</span> // REWARDS: UNLOCKED
          </div>
        </div>
      </div>

      {/* Main Quest Log Container (Dual-Pane RPG Interface) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Quest Selection List (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="font-mono text-xs text-game-muted px-2 uppercase tracking-wider mb-2 flex justify-between items-center">
            <span>SELECT MISSION</span>
            <span>DIFFICULTY</span>
          </div>

          {QUESTS.map((quest, index) => {
            const isSelected = quest.id === selectedQuestId;
            return (
              <motion.div
                key={quest.id}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
                onClick={() => {
                  setSelectedQuestId(quest.id);
                  playClick();
                }}
                onMouseEnter={playBlip}
                className={`p-4 border-2 cursor-pointer transition-all duration-150 relative ${
                  isSelected
                    ? 'bg-game-panel border-game-accent shadow-retro-accent translate-x-1'
                    : 'bg-game-panel/80 border-game-border hover:border-game-borderBright hover:bg-game-panel shadow-retro-sm'
                }`}
              >
                {/* Active Indicator Strip */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-game-accent" />
                )}

                <div className="flex justify-between items-start gap-2 mb-1.5">
                  <span className="font-mono text-[10px] text-game-muted tracking-wider">
                    {quest.code}
                  </span>
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 border ${getDifficultyBadge(
                      quest.difficulty
                    )}`}
                  >
                    [{quest.difficulty}]
                  </span>
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-white mb-1">
                  {quest.title}
                </h3>

                <p className="text-xs text-slate-400 font-sans line-clamp-2 leading-relaxed mb-3">
                  {quest.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-game-border/60">
                  {quest.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] px-1.5 py-0.5 bg-game-card border border-game-border text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {quest.techStack.length > 3 && (
                    <span className="font-mono text-[10px] px-1.5 py-0.5 text-game-muted">
                      +{quest.techStack.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Active Quest Briefing Dossier (7 Cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuest.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-game-panel border-2 border-game-border shadow-retro-lg p-6 sm:p-8 relative"
            >
              {/* Notched corner header */}
              <div className="flex flex-wrap justify-between items-center pb-4 mb-6 border-b border-game-border gap-2">
                <div>
                  <div className="font-mono text-xs text-game-accent font-semibold tracking-wider">
                    ACTIVE QUEST BRIEFING
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans mt-1">
                    {activeQuest.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 bg-game-card border border-game-mint text-game-mint font-bold">
                    STATUS: {activeQuest.status}
                  </span>
                </div>
              </div>

              {/* Mission Category */}
              <div className="font-mono text-xs text-game-cyan mb-4 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>DOMAIN: {activeQuest.category}</span>
              </div>

              {/* Mission Summary / Description */}
              <div className="mb-6">
                <h4 className="font-mono text-xs text-game-muted uppercase tracking-wider mb-2">
                  // MISSION OBJECTIVE
                </h4>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans bg-game-card/60 p-4 border-l-4 border-game-accent border-y border-r border-game-border">
                  {activeQuest.description}
                </p>
              </div>

              {/* Deep Technical Lore / Architecture */}
              <div className="mb-6">
                <h4 className="font-mono text-xs text-game-muted uppercase tracking-wider mb-2">
                  // TECHNICAL ARCHITECTURE &amp; DEPLOYMENT
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {activeQuest.lore}
                </p>
              </div>

              {/* Equiped Stacks Grid */}
              <div className="mb-6">
                <h4 className="font-mono text-xs text-game-muted uppercase tracking-wider mb-2">
                  // APPLIED TECHNOLOGIES &amp; TOOLCHAIN
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeQuest.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1 bg-game-card border border-game-border text-game-text font-semibold flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-none bg-game-mint inline-block" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mission Metrics / Stats Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-game-card border border-game-border mb-8">
                {Object.entries(activeQuest.stats).map(([key, value], idx) => (
                  <div key={idx} className="font-mono">
                    <span className="text-[10px] text-game-muted uppercase block">
                      {key}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer CTA: Inspect Repository on GitHub */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-game-border">
                <span className="font-mono text-xs text-game-muted">
                  AUTHORED BY: <strong className="text-white">Muhammad Wildan Faiz Althafah</strong>
                </span>

                <a
                  href={activeQuest.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="btn-game-primary px-5 py-2.5 text-xs sm:text-sm flex items-center gap-2"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>Inspect Code // GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
