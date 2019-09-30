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
    writeToDisk: true,
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
