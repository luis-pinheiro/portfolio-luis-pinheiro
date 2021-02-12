module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 1,
      features: {
        'custom-properties': false,
      },
    },
  },
};
