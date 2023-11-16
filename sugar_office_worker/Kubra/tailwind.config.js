/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: '#60a5fa',
        pink:{
          400:'#f472b6',

        },
        neutral:{
          700:'#44403c'
        }
      }
    },
  },
  plugins: [],
}

