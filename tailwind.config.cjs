/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        '698': '698px',
        '443': '443px',
        '334': '334px',
        '575': '575px',
        '100': '100px'
      },
      height: {
        '300': '300px',
        '100vh':'100vh',
      },
      fontFamily: {
        sans:['Roboto','sans-serif'],
      },
    }
  },
  plugins: [],
}