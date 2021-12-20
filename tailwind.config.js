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
          '50': '#FAFAFA',
          '100': '#F4F4F4',
          '200': '#E6E7E8',
          '300': '#D4D5D6',
          '400': '#A1A2A5',
          '500': '#707275',
          '600': '#515457',
          '700': '#3E4044',
          '800': '#25282B',
          '900': '#16181B',
          '950': '#0B0C0E'
        },
        brand: {
          primary: '#EC4899'
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
