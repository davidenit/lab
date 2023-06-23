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
      primary: '#E03155',
      text: '#191817',
      border: '#A4A4A4',
      black: '#191817',
      grey: '#7E7E7E',
      white: '#ffffff',
    },
    extend: {
      fontWeight: {
        330: 330,
        390: 390,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
};
