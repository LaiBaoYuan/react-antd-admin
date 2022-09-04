const CracoLessPlugin = require('craco-less');
const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@@': path.resolve('public'),
      '@': path.resolve('src'),
    }
  },
};