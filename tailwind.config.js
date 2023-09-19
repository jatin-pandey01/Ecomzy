/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'1px 1px 70px 10px rgba(0,0,0,0.25)',
      }
    },
  },
  plugins: [],
}

