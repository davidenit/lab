/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      default: '#191817',
      primary: '#E03155',
      text: '#191817',
      border: '#A4A4A4',
    },
    borderColor: '#A4A4A4',
    placeholderColor: '#7E7E7E',
    extend: {
      fontWeight: {
        330: 330,
        390: 390,
      },
      colors: {
        placeholderColor: '#7E7E7E',
      },
    },
    fontFamily: {
      default: ['"Brandon"', 'sans-serif'],
      philosopher: ['"Philosopher"', 'sans-serif'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
};
