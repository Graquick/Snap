/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // "false" or "media"
  theme: {
    extend: {
    },
    screens: {

      '2xl': {'max': '1440px'},
      // => @media (max-width: 1440px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'lg': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'md': {'max': '425px'},
      // => @media (max-width: 425px) { ... }

      'sm': {'max': '375px'},
      // => @media (max-width: 375px) { ... }

      'xs': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
    },
    fontFamily: {
      'raleway': "Raleway, sans-serif",
      'roboto': "Roboto, sans-serif",
      'epilogue': "Epilogue, sans-serif",
      'play': "Press\\ Start\\ 2P, cursive"
    }
  },
  plugins: [],
}
