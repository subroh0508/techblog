const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      vue: '@vue/runtime-dom/dist/runtime-dom.esm-bundler.js',
    },
  },
});
