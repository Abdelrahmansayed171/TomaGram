/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },  
      fontFamily: {
          inter: ['Inter', 'sans-serif'],
          roboto: ['Roboto','sans-serif'],
          poppins: ['Poppins','sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}