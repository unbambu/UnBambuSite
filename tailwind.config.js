const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: 'class',
  important: true,
  theme: {
    screens: {
      xs: "540px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      lg_992: '992px',
    },
    fontFamily: {
      'rubik': ['"Rubik", sans-serif'],
      'mesloLGS-Regular': ['"MesloLGS-Regular", sans-serif'],
      'mesloLGM-Regular': ['"MesloLGM-Regular", sans-serif'],
      'mesloLGS-Bold': ['"MesloLGS-Bold", sans-serif'],
      'mesloLGM-Bold': ['"MesloLGM-Bold", sans-serif'],
      'mesloLGM-Bold': ['"MesloLGM-Bold", sans-serif'],
      'iosevka-bold': ['"iosevka-bold", sans-serif',],
      'iosevka-light': ['"iosevka-light", sans-serif'],
      'traffic1': ['"iosevka-bold", sans-serif',],
      'traffic2': ['"iosevka-light", sans-serif'],
      'opensans-regular': ['"Open Sans Regular", sans-serif'],
      'BebasKai': ['"BebasKai", sans-serif'],
      'HWYGOTH': ['"HWYGOTH", sans-serif'],
      'HWYGNRRW': ['"HWYGNRRW", sans-serif'],
      
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        sm: '1rem',
        lg: '45px',
        xl: '5rem',
        '2xl': '3rem',
      },
    },
    extend: {
      colors: {
        'dark': '#3c4858',
        'green': '#40c679',
        'black': '#161c2d',
        'dark-navbar':'#1e293b',
        'bluegreen': '#66b1b1',        
        'dark-footer': '#192132',
        "dark-700": "#090e34b3",
        "brown": "#CFC4B0",
        'brown': {
          100: '#CFC4B0',
          200: '#948870',
          300: '#3A332D'          
        },
        'orange': {
          100: '#FEC2A3',          
          200: '#E98167'          
        },
        primary: "#3056D3",
        secondary: "#13C296",
        "body-color": "#637381",
        warning: "#FBBF24",
      },
      boxShadow: {
        sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
        DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
        md: '0 5px 13px rgb(60 72 88 / 0.20)',
        lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
        xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
        testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
      },
      spacing: {
        0.75: '10.1875rem',
        3.25: '0.8125rem'
      },
      transitionDuration: {
        '2000': '2000ms',
      },

      maxWidth: ({
          theme,
          breakpoints
      }) => ({
          '1200': '71.25rem',
          '992': '60rem',
          '768': '45rem',
      }),

      zIndex: {
          1: '1',
          2: '2',
          3: '3',
          999: '999',
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ['dark', 'rounded'],
  },
  plugins: [    
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
    'prettier-plugin-tailwindcss',
  ]
 
 };