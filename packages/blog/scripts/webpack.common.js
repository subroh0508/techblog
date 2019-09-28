const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  output: {
    path: path.resolve(__dirname, '../build/client'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@components': path.resolve(__dirname, '../components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders:{
            scss: 'vue-style-loader!css-loader!sass-loader',
          },
        },
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.template.html'),
      filename: '../index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${mode}"`,
      },
    }),
  ],
};
