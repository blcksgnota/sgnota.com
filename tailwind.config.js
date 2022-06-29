/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'hun': '#4D26E0',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['Klima', 'sans-serif'],
      },
      backgroundImage: {
        'desktop': "url('/assets/desktop-noise.png')",
        'mobile': "url('/assets/mobile-noise.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}