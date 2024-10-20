/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './public/**/*.html', './public/**/*.css'], // add paths to your HTML/CSS
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Poppins is now available globally
      },
      colors: {
        redPrimary: '#ff004f',
        grayDark: '#262626',
        grayLight: '#d7d6d6',
      },
    },
  },
  plugins: [],
}
