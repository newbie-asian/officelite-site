module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      blue: '#5175FF',
      'pale-blue': '#829CFF',
      'dark-violet': '#333950',
      'darker-violet': '#25293A',
      'pale-violet': '#747B95',
      red: '#F05B5B',
    },

    fontFamily: {
      'kumbh-bold': 'Kumbh Bold',
      'kumbh-regular': 'Kumbh Regular',
    },

    fontSize: {
      xs: ['16px', { lineHeight: '28px' }],
      sm: ['18px', { lineHeight: '28px' }],
      md: ['16px', { lineHeight: '48px', letterSpacing: '5px' }],
      lg: ['20px', { lineHeight: '28px' }],
      xl: ['40px', { lineHeight: '48px' }],
      '2xl': ['56px', { lineHeight: '64px' }],
    },

    backgroundImage: {
      'pattern-header': "url('./assets/images/home/bg-pattern-header.svg')",
      'pattern-footer': "url('./assets/images/home/bg-pattern-footer.svg')",
      'pattern-pricing': "url('./assets/images/home/bg-pattern-pricing.svg')",
    },

    backgroundSize: {
      '80%': '80%',
      '100%': '100%',
      '120%': '120%',
      '150%': '150%',
      '200%': '200%',
      '250%': '250%',
    },

    extend: {
      backgroundPosition: {
        'bottom-custom': 'center bottom 29rem',
        'bottom-custom2': 'center bottom -35rem',
        'right-custom': 'bottom left 18rem',
        'right-custom2': 'bottom left 40rem',
        'top-custom': 'center top -24rem',
        'left-custom': 'center left -18rem',
        'left-custom2': 'top left -48rem',
        custom: 'right bottom -55rem',
      },
    },
  },
  plugins: [],
};
