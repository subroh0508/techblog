const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const prod = require('./webpack.client-prod.js');

module.exports = merge(prod, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
