/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#FAF9F6',
        'paper-dark': '#161A1F',
        ink: '#1A1A1A',
        'ink-dark': '#0F1115',
        sepia: '#704214',
        'sepia-light': '#A0826D',
        'sepia-dark': '#4F2F16',
        'blue-ink': '#1E3A5F',
        'blue-ink-light': '#8FB3E0',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
