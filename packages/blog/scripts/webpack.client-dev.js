const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'core-js',
    'regenerator-runtime/runtime',
    path.resolve(__dirname, '../entry-client.js'),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [
      path.resolve(__dirname, '../../../node_modules'),
      path.resolve(__dirname, '../build'),
      path.resolve(__dirname, '../public'),
      path.resolve(__dirname, '../functions/assets'),
    ],  
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /(\.css|\.scss)/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
