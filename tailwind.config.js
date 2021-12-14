let { red, gray, trueGray, coolGray } = require('tailwindcss/colors')
const { colors } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {

    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        hd: '1920px'
      },
      colors: {
        gray: {
          '100': '#F1F1F4',
          '125': '#DDDDE0',
          '150': '#C9C9CC',
          '175': '#B5B5B8',
          '200': '#A1A1A4',
          '300': '#8C8D91',
          '400': '#78797D',
          '500': '#646569',
          '600': '#505155',
          '700': '#3C3D41',
          '800': '#2D2E32',
          '825': '#25262A',
          '850': '#1C1E22',
          '875': '#131519',
          '900': '#0D0E11'
        },
        brand: {
          primary: '#FF734F'
        }
        // gray: trueGray
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
