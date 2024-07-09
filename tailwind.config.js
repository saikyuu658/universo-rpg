/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'orange-main': '#EE6C4D',
        'orange-hover': '#E5552E',
        'blue-deep' : '#293241'
      }, 
      colors: {
        'green' : '#74C69D',
        'orange-main' : '#EE6C4D',
      },
      fontFamily: {
        'body': ['"Maven Pro", sans-serif']
      }
    },
  },
  plugins: [],
}

