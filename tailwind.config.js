/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'laranja': '#EE6C4D',
        'azul-escuro' : '#293241'
      }, 
      color: {
        'verde' : '#74C69D',
        'vermelho' : ''
      }
    },
  },
  plugins: [],
}

