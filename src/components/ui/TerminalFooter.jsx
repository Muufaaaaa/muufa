import React, { useState } from 'react';
import { Terminal, ArrowUp, Copy, Check, Gamepad2, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './Icons';
import { SYSTEM_LOGS } from '../../data/portfolioData';

export default function TerminalFooter({ playClick, playBlip }) {
  const [copied, setCopied] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [extraLogs, setExtraLogs] = useState([]);

  const handleScrollTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyGithub = () => {
    playClick();
    navigator.clipboard.writeText('https://github.com/Muufaaaaa');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    playClick();
    let response = `COMMAND NOT RECOGNIZED: '${cmd}'. Try: help, whoami, skills, clear`;

    if (cmd === 'help') {
      response = 'AVAILABLE COMMANDS: whoami, skills, clear, github, exit, sudo';
    } else if (cmd === 'whoami') {
      response = 'Muhammad Wildan Faiz Althafah // Software Engineer & Game Developer';
    } else if (cmd === 'skills') {
      response = 'C++, SQL, PHP, Python, Minecraft Server Architecture, Roblox Lua';
    } else if (cmd === 'github') {
      window.open('https://github.com/Muufaaaaa', '_blank');
      response = 'REDIRECTING TO https://github.com/Muufaaaaa ...';
    } else if (cmd === 'clear') {
      setExtraLogs([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'sudo') {
      response = 'PERMISSION DENIED: You are already in God Mode.';
    }

    setExtraLogs((prev) => [...prev, `$ ${terminalInput}`, response]);
    setTerminalInput('');
  };

  return (
    <footer id="contact" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-game-border relative">
      
      {/* Game Over / Continue Screen Banner */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 bg-game-card border border-game-border text-game-amber mb-2">
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>GAME OVER // CONTINUE?</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
          Connect &amp; Collaborate
        </h2>
        <p className="font-mono text-xs text-game-muted mt-2 max-w-md mx-auto">
          Tertarik berkolaborasi pada proyek Game Development atau Software Engineering?
        </p>
      </div>

      {/* Terminal Window Frame */}
      <div className="max-w-3xl mx-auto bg-[#07090e] border-2 border-game-border shadow-retro-lg overflow-hidden">
        
        {/* Terminal Title Bar */}
        <div className="bg-game-panel px-4 py-2.5 border-b border-game-border flex items-center justify-between font-mono text-xs text-game-muted">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500/80 inline-block border border-red-700" />
            <span className="w-3 h-3 bg-amber-500/80 inline-block border border-amber-700" />
            <span className="w-3 h-3 bg-emerald-500/80 inline-block border border-emerald-700" />
            <span className="ml-2 text-white font-bold">muufa@terminal:~ (bash)</span>
          </div>
          <span className="text-[11px] text-game-mint hidden sm:inline">SESSION_ACTIVE</span>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-2">
          {SYSTEM_LOGS.map((log, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-game-muted select-none">&gt;&gt;</span>
              <span className={index === SYSTEM_LOGS.length - 1 ? 'text-game-mint font-semibold' : 'text-slate-400'}>
                {log}
              </span>
            </div>
          ))}

          {/* Interactive Logs */}
          {extraLogs.map((item, idx) => (
            <div key={idx} className={item.startsWith('$') ? 'text-game-cyan font-bold' : 'text-game-amber'}>
              {item}
            </div>
          ))}

          {/* Interactive Command Prompt */}
          <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-game-accent font-bold select-none">muufa:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type 'help', 'whoami', or 'github'..."
              className="flex-1 bg-transparent border-none outline-none text-game-mint placeholder:text-slate-600 font-mono text-xs sm:text-sm"
            />
          </form>
        </div>

        {/* Tactical Quick-Action Buttons */}
        <div className="bg-game-panel/80 p-4 border-t border-game-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          
          {/* GitHub Direct Link */}
          <a
            href="https://github.com/Muufaaaaa"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="btn-game-primary px-4 py-2 flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile [Muufaaaaa]</span>
          </a>

          <div className="flex items-center gap-2">
            {/* Copy Repo Link Button */}
            <button
              onClick={handleCopyGithub}
              className="btn-game-secondary px-3 py-2 flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-game-mint" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED LINK' : 'COPY GITHUB'}</span>
            </button>

            {/* Restart / Scroll Top */}
            <button
              onClick={handleScrollTop}
              className="btn-game-secondary px-3 py-2 flex items-center gap-1.5"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">START OVER</span>
            </button>
          </div>

        </div>

      </div>

      {/* Retro Bottom Credit Bar */}
      <div className="mt-12 text-center font-mono text-[11px] text-game-muted space-y-1">
        <p>
          DESIGNED FOR <strong className="text-white">MUHAMMAD WILDAN FAIZ ALTHAFAH</strong>
        </p>
        <p className="text-slate-500">
          BUILT WITH REACT • THREE.JS • R3F • DREI • FRAMER MOTION • TAILWIND CSS
        </p>
      </div>

    </footer>
  );
}
