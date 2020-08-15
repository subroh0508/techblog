const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';
const htmlOutputPath = dev ?
  path.resolve(__dirname, '../build/index.html') :
  path.resolve(__dirname, '../functions/assets/index.html');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../build'),
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
      template: path.resolve(__dirname, '../index.template.ejs'),
      filename: htmlOutputPath,
      templateParameters: { dev },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${mode}"`,
        BASE_URL: `"${dev ? 'http://localhost:8080' : 'https://subroh0508.net'}"`,
      },
    }),
  ],
};
