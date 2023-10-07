/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'td-green': '#7DC48F',
        'td-yellow': '#C7CF7A',
        'td-blue-dark': '#64939F',
        'td-pink': '#D1B0C2',
        'td-gray': '#7D9395',
        'td-blue-light': '#A1D1D6',
      },
      fontFamily: {
        'sans': ['Bahnschrift', 'dinalt', ...defaultTheme.fontFamily.sans],
        'mono': ['"Courier New"', 'courierprime', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
