/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#c8ff2e',
          hover: '#b5ec20',
          dim: 'rgba(200, 255, 46, 0.12)',
        },
        mint: {
          DEFAULT: '#b8f5e0',
          dim: 'rgba(184, 245, 224, 0.12)',
        },
        dark: {
          bg: '#080808',
          card: '#111111',
          cardHover: '#161616',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(200, 255, 46, 0.25)',
          muted: '#808080',
          subtle: '#525252',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'glow-lime': '0 0 30px rgba(200, 255, 46, 0.25)',
        'glow-lime-sm': '0 0 15px rgba(200, 255, 46, 0.15)',
        'glow-mint': '0 0 30px rgba(184, 245, 224, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
