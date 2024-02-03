/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '7px 7px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}

