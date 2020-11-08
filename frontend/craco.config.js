const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#C4AA61',
              '@secondary-color': '#008167',
              '@third-color': '#4c4436',
              '@fourth-color': '#E2D5B0',
              '@info-color': '@primary-color',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
