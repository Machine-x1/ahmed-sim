/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: '#fbfaf7',
        bgLight: '#1010100d',
        darkText: '#242424',
        lightText: '#48464c',
        mainOrange: '#48464c',
        hoverTextColor: '#ec6302',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
