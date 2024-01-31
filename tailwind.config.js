/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode : 'class',
  theme: {
    extend: {
      screens: {
        'xs': '0px',
      },
      fontFamily: {
        inter: ['Inter'],
        roboto: ['Roboto'],
        poppins: ['Poppins']
      },
    },
  },
  plugins: [],
}