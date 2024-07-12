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
        'blue-deep' : '#293241',
        'blue-deep-2' : '#3D5A80'
      }, 
      colors: {
        'green-core' : '#74C69D',
        'orange-main' : '#EE6C4D',
        'blue-deep-2' : '#3D5A80'

      },
      fontFamily: {
        'body': ['"Maven Pro", sans-serif']
      }
    },
  },
  plugins: [],
}

