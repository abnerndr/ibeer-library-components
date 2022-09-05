const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'ibeer-900': '#FFBD4A',
        'ibeer-800': '#FFCA28'
      }
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      width: ['hover', 'focus', 'responsive'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
