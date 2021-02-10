const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      'h6, h5, h4, h3, h2, h1': {
        marginTop: '0',
        marginBottom: '0.5rem',
        fontWeight: '500',
        lineHeight: '1.2',
      },

      '.r-1': {
        fontSize: 'calc(2.5rem + 1.5vw)',
      },

      '.r-2': {
        fontSize: 'calc(2rem + 0.9vw)',
      },
      '.r-3': {
        fontSize: 'calc(1.75rem + 0.6vw)',
      },
      '.r-4': {
        fontSize: 'calc(1.5rem + 0.3vw)',
      },
      '.r-5': {
        fontSize: '1.25rem',
      },
      '.r-6': {
        fontSize: '1rem',
      },
      '.display-1': {
        fontSize: 'calc(1.625rem + 4.5vw)',
        fontWeight: '300',
        lineHeight: '1.2',
      },
      '.display-2': {
        fontSize: 'calc(1.575rem + 3.9vw)',
        fontWeight: '300',
        lineHeight: '1.2',
      },
      '.display-4': {
        fontSize: 'calc(1.475rem + 2.7vw)',
        fontWeight: '300',
        lineHeight: '1.2',
      },
      '.display-5': {
        fontSize: 'calc(1.425rem + 2.1vw)',
        fontWeight: '300',
        lineHeight: '1.2',
      },
      '.display-6': {
        fontSize: 'calc(1.375rem + 1.5vw)',
        fontWeight: '300',
        lineHeight: '1.2',
      },
    });
  };
});
