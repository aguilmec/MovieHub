/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '5px 5px 4px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

