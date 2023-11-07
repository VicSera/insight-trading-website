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
      'bgAlternative': '#FCFCFC',
      'red': '#DF3538',
      'blue': '#0171C3',
      'lightBlue': '#F0F7FF',
      'productBlue': '#0128F2',
      'productBlueSecondary': '#222A41',
      'producerBlue': '#083078',
      'stepperActive': '#0072BF',
      'stepperInactive': '#485C68',
      'transparent': '#00000000',
      'disabled': '#989898',
      'footerBg': '#054070',
      'footerText': '#FCFCFC',
      'footerSeparator': '#EFEFEF',
      'overlay': 'rgba(0,0,0,0.6)',
    },
    fontFamily: {
      'sans': ['"DM Sans"', 'sans-serif'],
      'montserrat': ['"Montserrat"', 'sans-serif'],
      'openSans': ['"Open Sans"', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'huge': '0px 26.786399841308594px 117.19049835205078px 0px #20248A0F',
        'product': '0px 12px 24px 0px #0773CA24',
        'button': '0px 1px 8px 0px #0000001F, 0px 3px 4px 0px #00000024, 0px 3px 3px -2px #00000033'
      },
    },
  },
  plugins: [],
}

