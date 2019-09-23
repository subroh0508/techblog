const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@components': path.resolve(__dirname, './components'),
      'app-router': path.resolve(__dirname, './router.js'),
    },
  },
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'core-js-bundle': 'core-js-bundle',
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
      template: './index.template.html',
    }),
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'core-js-bundle',
          path: `${mode === 'production' ? 'minified' : 'index'}.js`,
        },
        {
          name: 'regenerator-runtime',
          path: 'runtime.js',
          prodUrl: 'https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.3/runtime.min.js',
        },
        {
          name: 'vue',
          var: 'Vue',
          path: `dist/vue${mode === 'production' ? '.min' : ''}.js`,
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: `dist/vue-router${mode === 'production' ? '.min' : ''}.js`,
        },
      ],
      prod: mode === 'production',
      pathToNodeModules: path.resolve(__dirname, '../../'),
      publicPath: '/',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${mode}"`,
      },
    }),
  ],
};
