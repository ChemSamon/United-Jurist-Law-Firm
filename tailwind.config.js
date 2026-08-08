/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FCFBF7',
          surface: '#FFFFFF',
          ivory: '#F8F5EC',
          goldSoft: '#FFF8E4',
          goldMuted: '#F5EACB',
          gold: '#C99618',
          goldBright: '#E7B928',
          goldDeep: '#8B6508',
          text: '#171717',
          textSecondary: '#5F6368',
          textMuted: '#777B80',
          borderLight: '#E8E3D7',
          borderStrong: '#D8CFBA',
          footerDark: '#111111',
        },
        dark: {
          bg: '#151513',
          surface: '#1D1C19',
          card: '#25231F',
          elevated: '#2D2A24',
          text: '#F8F6F0',
          textSecondary: '#C9C4B8',
          gold: '#D8A928',
          border: '#3B382F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Khmer', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Battambang', 'serif'],
        khmer: ['Noto Sans Khmer', 'sans-serif'],
        khmerHeading: ['Battambang', 'serif'],
      },
      boxShadow: {
        gold: '0 4px 20px -2px rgba(201, 150, 24, 0.25)',
        card: '0 4px 24px -4px rgba(23, 23, 23, 0.06)',
        subtle: '0 2px 10px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
