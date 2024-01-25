/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: [ 'Nunito', 'sans-serif'],
      },
    },
    colors: {
      'custom-blue-light': '#acd9ea',
      'custom-blue-middle': '#6db1c6',
      'custom-blue-dark': '#32788F',
      'custom-peach-light': '#fff1e3',
      'custom-peach-middle': '#ffd7b6',
      'custom-peach-dark': '#FFB883',
      'custom-darkblue': '#104b67',
    },
  },
  plugins: [],
};

