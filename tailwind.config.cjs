/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html'
  ],
  theme: {
    colors: {

      'black': '#000',
      'white': '#fff',

      'green-700': '#31AFB4',
      'green-400': '#93D3D6',
      'green-500': '#76BDC0',

      'red-700': '#FF3A2C',

      "gray-800": '#202024',
      "gray-700": '#525252',
      "gray-200": '#C4C4CC',
      "gray-100": '#F3F4F6',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
