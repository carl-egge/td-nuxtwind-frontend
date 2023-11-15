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
          // Grey Pink Scheme
          'text': '#20131a',
          'background': '#f5eff3',
          'td-primary': '#555855',
          'td-secondary': '#e0ccd8',
          'td-accent': '#ff9ed5',

          // Plakat Colors
          'td-green': '#7DC48F',
          'td-yellow': '#C7CF7A',
          'td-blue-dark': '#64939F',
          'td-pink': '#D1B0C2',
          'td-gray': '#7D9395',
          'td-blue-light': '#A1D1D6',

        // Light Blue Yellow Scheme         
        // 'text': {
        //   50: '#e9f8fc',
        //   100: '#d3f1f8',
        //   200: '#a7e4f1',
        //   300: '#7bd6ea',
        //   400: '#4fc8e3',
        //   500: '#22badd',
        //   600: '#1c95b0',
        //   700: '#157084',
        //   800: '#0e4b58',
        //   900: '#07252c',
        //   950: '#031316',
        // },
        // 'background': {
        //   50: '#f0f3f5',
        //   100: '#e1e7ea',
        //   200: '#c3d0d5',
        //   300: '#a5b8c0',
        //   400: '#87a1ab',
        //   500: '#698996',
        //   600: '#546e78',
        //   700: '#3f525a',
        //   800: '#2a373c',
        //   900: '#151b1e',
        //   950: '#0a0e0f',
        // },
        // 'td-primary': {
        //   50: '#f0f4f4',
        //   100: '#e1e8ea',
        //   200: '#c3d2d5',
        //   300: '#a5bbc0',
        //   400: '#88a5aa',
        //   500: '#6a8e95',
        //   600: '#557277',
        //   700: '#3f555a',
        //   800: '#2a393c',
        //   900: '#151c1e',
        //   950: '#0b0e0f',
        // },
        // 'td-secondary': {
        //   50: '#eef5f6',
        //   100: '#ddebee',
        //   200: '#bbd7dd',
        //   300: '#99c2cc',
        //   400: '#77aebb',
        //   500: '#559aaa',
        //   600: '#447b88',
        //   700: '#335c66',
        //   800: '#223e44',
        //   900: '#111f22',
        //   950: '#090f11',
        // },
        // 'td-accent': {
        //   50: '#fff9e5',
        //   100: '#fff4cc',
        //   200: '#ffe999',
        //   300: '#ffde66',
        //   400: '#ffd333',
        //   500: '#ffc800',
        //   600: '#cca000',
        //   700: '#997800',
        //   800: '#665000',
        //   900: '#332800',
        //   950: '#1a1400',
        // },
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
