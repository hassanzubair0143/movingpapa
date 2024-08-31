/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      'arialBold': ['ArialRoundedMTBold'],

     },
     fontStyle: {
      'MT' : 'MonoType'
     },
     fontWeight:{
      'bold': 'bold'
     }
      
    },
  },
  plugins: [],
}

