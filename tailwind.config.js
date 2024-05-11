/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms'
import colors from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poetsen One', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'primary-blue': {
        50: '#376EC8',
        100: '#5F8BD3', // Changed
        200: '#376EC8',
        300: '#376EC8',
        400: '#376EC8',
        500: '#376EC8',
        600: '#376EC8',
        700: '#376EC8',
        800: '#376EC8',
        900: '#376EC8',
      },
    },
  },
  plugins: [formsPlugin],
}
