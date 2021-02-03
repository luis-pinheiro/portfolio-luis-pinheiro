const nextTranslate = require('next-translate');

module.exports = {
  // Target must be serverless
  target: 'serverless',
  ...nextTranslate({
    webpack: (config, { isServer, webpack }) => {
      return config;
    },
  }),
};
