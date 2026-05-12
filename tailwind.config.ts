import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Skogsgrønn — primær (fra fjell og granskog)
        forest: {
          50: '#f3f7f4',
          100: '#e3ece5',
          200: '#c8d9cc',
          300: '#a0bda7',
          400: '#739a7e',
          500: '#547d61',
          600: '#3f634b',
          700: '#34503e',
          800: '#2c4034',
          900: '#1a2a20',
          950: '#0f1a14',
        },
        // Isblå — aksent (fra vannkraft og isbreer)
        glacier: {
          50: '#f0f7f9',
          100: '#daebef',
          200: '#b8d8e0',
          300: '#88bccb',
          400: '#5599ae',
          500: '#3a7d94',
          600: '#33677d',
          700: '#2e5567',
          800: '#2c4856',
          900: '#293e4a',
          950: '#162831',
        },
        // Varm offwhite — bakgrunn
        bone: {
          50: '#fdfcf9',
          100: '#f8f6ef',
          200: '#f0ecdf',
          300: '#e3dcc6',
          400: '#cfc4a3',
          500: '#bcad84',
        },
        ink: '#0a1410',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
