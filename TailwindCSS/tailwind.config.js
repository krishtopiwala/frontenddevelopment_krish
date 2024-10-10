/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'image1': "url('./src/pexels.jpg')"
      },
    },
  },
  plugins: [],
}