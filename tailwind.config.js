/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/bg-img.jpeg')",
      },
      // fontFamily: {
      //   bodyFont: ['Urbanist', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        bodyColor: '#fbfaf7',
        bgLight: '#1010100d',
        darkText: '#242424',
        lightText: '#48464c',
        mainOrange: '#48464c',
        hoverTextColor: '#ec6302',
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
