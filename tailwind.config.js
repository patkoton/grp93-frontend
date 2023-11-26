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
      'black': '#000',
      'dark-blue': 'var(--gray-700, #272D37)',
      'dark-blue2': '#101828',
      'gray': 'var(--gray-25, #919BA7)',
      'dark-gray': '#555',
      'dark-gray2': '#475467',
      'light-gray': '#EAEBF0',
      'light-gray2': '#B2B0B0',
      'blue': '#5E25FF',
      'input-backg': 'var(--base-white, #FFF)',
      'border-line': 'var(--neutral-700, #DAE0E6)',
      'border-line2': 'rgba(186, 186, 186, 0.70)',
      'shadow-color': 'rgba(16, 24, 40, 0.04)',
      'search-back': 'rgba(255, 255, 255, 0.05)',
      'search-border': 'rgba(186, 186, 186, 0.42)',
      'nav-hover': 'rgba(255, 255, 255, 0.06)',
      'active-back': 'rgba(71, 84, 103, 0.10)',
      'color1': 'var(--gray-50, #F9FAFB)',
      'color2': 'var(--gray-200, #EAECF0)',
      'color3': 'var(--gray-600, #475467)',
      'color4': 'var(--gray-900, #101828)',
      'color5': 'rgba(16, 24, 40, 0.70)',
      'color6': 'var(--error-50, #FEF3F2)',
      'color7': 'var(--error-200, #FECDCA)',
      'color8': 'var(--success-50, #ECFDF3)',
      'color9': 'var(--success-200, #ABEFC6)',
    }
  },
  plugins: [],
}