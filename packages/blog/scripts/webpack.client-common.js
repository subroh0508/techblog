const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';
const htmlOutputPath = dev ?
  path.resolve(__dirname, '../build/index.html') :
  path.resolve(__dirname, '../functions/assets/index.html');

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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.template.ejs'),
      filename: htmlOutputPath,
      templateParameters: { dev },
      minify: { removeComments: false },
    }),
  ],
});
