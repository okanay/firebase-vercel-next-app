/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({opacityValue}) => {

    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    } else {
      return `rgba(var(${variableName}))`
    }
  }
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smPhone': "375px",
        'basePhone': "390px",
        'lgPhone': "414px",
        'xlPhone': "440px",
        'tablet': '635px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors : {
        skin : {
          'theme-50' : withOpacity('--theme-50'),
          'theme-100' : withOpacity('--theme-100'),
          'theme-200' : withOpacity('--theme-200'),
          'theme-300' : withOpacity('--theme-300'),
          'theme-400' : withOpacity('--theme-400'),
          'theme-500' : withOpacity('--theme-500'),
          'theme-600' : withOpacity('--theme-600'),
          'theme-700' : withOpacity('--theme-700'),
          'theme-800' : withOpacity('--theme-800'),
          'theme-900' : withOpacity('--theme-900'),

          'theme-body-50' : withOpacity('--theme-body-50'),
          'theme-body-100' : withOpacity('--theme-body-100'),
          'theme-body-200' : withOpacity('--theme-body-200'),
          'theme-body-300' : withOpacity('--theme-body-300'),
          'theme-body-400' : withOpacity('--theme-body-400'),
          'theme-body-500' : withOpacity('--theme-body-500'),
          'theme-body-600' : withOpacity('--theme-body-600'),
          'theme-body-700' : withOpacity('--theme-body-700'),
          'theme-body-800' : withOpacity('--theme-body-800'),
          'theme-body-900' : withOpacity('--theme-body-900'),
          'theme-body-1000' : withOpacity('--theme-body-1000'),


          'theme-font-50' : withOpacity('--theme-font-50'),
          'theme-font-100' : withOpacity('--theme-font-100'),
          'theme-font-200' : withOpacity('--theme-font-200'),
          'theme-font-300' : withOpacity('--theme-font-300'),
          'theme-font-400' : withOpacity('--theme-font-400'),
          'theme-font-500' : withOpacity('--theme-font-500'),
          'theme-font-600' : withOpacity('--theme-font-600'),
          'theme-font-700' : withOpacity('--theme-font-700'),
          'theme-font-800' : withOpacity('--theme-font-800'),
          'theme-font-900' : withOpacity('--theme-font-900'),
          'theme-font-1000' : withOpacity('--theme-font-1000'),
        }
      }
    },
  },
  plugins: [],
}