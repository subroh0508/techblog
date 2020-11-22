const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.client-common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'core-js',
    'regenerator-runtime/runtime',
    path.resolve(__dirname, '../entry-client.js'),
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /(\.css|\.scss)/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { esModule: false } },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: [
      path.resolve(__dirname, '../build'),
      path.resolve(__dirname, '../public'),
    ],
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8080,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
});
