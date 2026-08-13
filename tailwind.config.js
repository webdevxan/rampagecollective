/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        gothic: ['UnifrakturMaguntia', 'serif'],
      },
      colors: {
        bone: '#e9e7e0',
        charcoal: '#2c2c2a',
        muted: '#5f5e5a',
        faint: '#888780',
        primary: '#2c2c2a',
        secondary: '#5f5e5a',
        tertiary: '#888780',
      },
    },
  },
  plugins: [],
}
