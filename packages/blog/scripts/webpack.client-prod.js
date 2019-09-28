const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /(\.css|\.scss)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'common.[chunkhash].css',
    }),
    new StyleExtHtmlWebpackPlugin({
      minify: true,
    }),
  ],
});
