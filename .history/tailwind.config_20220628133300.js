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
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1440px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '425px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '475px'},
      // => @media (max-width: 639px) { ... }
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
