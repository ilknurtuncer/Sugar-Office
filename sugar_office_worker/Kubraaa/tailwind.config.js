/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,}"],


  theme: {
    extend: {
      colors: {
        customBlue: '#3498db', 
        customRed: '#e74c3c', 
        customSlate:'#64748b',
      },
    },
  },
  plugins: [],
}

