const autoprefixer = require('autoprefixer');

module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  },
};
