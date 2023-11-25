/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'authImg': "url('/src/assets/images/auth-background-image.png')",
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFF',
      'dark-blue': 'var(--gray-700, #272D37)',
      'dark-blue2': '#101828',
      'gray': 'var(--gray-25, #919BA7)',
      'dark-gray': '#555',
      'light-gray': '#EAEBF0',
      'light-gray2': '#B2B0B0',
      'blue': '#5E25FF',
      'input-backg': 'var(--base-white, #FFF)',
      'border-line': 'var(--neutral-700, #DAE0E6)',
      'shadow-color': 'rgba(16, 24, 40, 0.04)',
      'search-back': 'rgba(255, 255, 255, 0.05)',
      'search-border': 'rgba(186, 186, 186, 0.42)',
      'nav-hover': 'rgba(255, 255, 255, 0.06)',
    }
  },
  plugins: [],
}