/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#000000',
        secondary: '#64748b',
        darkblue: '#00235B',
        bg: '#fdfd96',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

/** untuk meminify file css menjadi lebih kecil */
/** npx tailwindcss -o ./public/css/final.css --minify */

