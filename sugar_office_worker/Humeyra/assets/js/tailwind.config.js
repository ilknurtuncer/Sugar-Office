/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",

],
  theme: {
    extend: {


      colors: {
        primary: '#FF9BA7',
        secondary: '#59B5FE',
        danger: '#e3342f',
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

