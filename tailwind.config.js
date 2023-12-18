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
        'main-bg': '',
      },
      // fontFamily: {
      //   bodyFont: ['Urbanist', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        bodyColor: '#F5F5F5',
        bgLight: '#1010100d',
        darkText: '#242424',
        lightText: '#48464c',
        mainOrange: '#48464c',
        secondaryBlack: '#1C1C1C',
        hoverTextColor: '#ec6302',
        greyColor: '#F5F5F5',
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
