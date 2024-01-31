/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode : 'class',
  theme: {
    extend: {
      screens: {
        'xs': '0px',
      },
      colors: {
        'custom-1' : 'rgb(13, 15, 20)',
        'custom-2' : 'rgb(33, 36, 42)',
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