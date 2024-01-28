/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
      },
      fontFamily: {
        roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}