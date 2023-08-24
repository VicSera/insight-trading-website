/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'textPrimary': '#000000',
      'textSecondary': '#050E38',
      'textTernary': '#0773CA',
      'textQuaternary': '#666666',
      'textLight': '#FFFFFF',
      'red': '#DF3538',
      'blue': '#0171C3',
      'lightBlue': '#F0F7FF',
      'stepperActive': '#0072BF',
      'stepperInactive': '#485C68',
      'transparent': '#00000000',
      'disabled': '#989898',
      'footerBg': '#054070',
      'footerText': '#FCFCFC',
      'footerSeparator': '#EFEFEF',
    },
    fontFamily: {
      'sans': ['"DM Sans"', 'sans-serif'],
      'montserrat': ['"Montserrat"', 'sans-serif'],
      'openSans': ['"Open Sans"', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'huge': '0px 26.786399841308594px 117.19049835205078px 0px #20248A0F'
      },
    },
  },
  plugins: [],
}

