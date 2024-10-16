/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      width: {
        '85': '360px',
        '100': '420px',
        '102': '450px',
        '103': '515px',
        '104': '535px',
        '105': '680px'
      },
      flexBasis: {
        '75': '300px'
      },
      borderWidth: {
        '1': '1px'
      },
    },
  },
  plugins: [],
}