/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        game: {
          bg: '#080a0f',
          panel: '#0e1219',
          card: '#141a24',
          border: '#242e42',
          borderBright: '#3b4b6b',
          accent: '#ff5533', // Vibrant Indie Game Orange
          accentHover: '#ff6f4e',
          mint: '#10df9e', // Quest complete / Online green
          amber: '#f59e0b', // Level badge / stats
          cyan: '#00d2ff', // Code / System stats
          text: '#f1f5f9',
          muted: '#8592a6',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0, 0, 0, 0.85)',
        'retro-accent': '4px 4px 0px 0px #ff5533',
        'retro-mint': '4px 4px 0px 0px #10df9e',
        'retro-sm': '2px 2px 0px 0px rgba(0, 0, 0, 0.85)',
        'retro-lg': '6px 6px 0px 0px rgba(0, 0, 0, 0.95)',
        'panel': 'inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
