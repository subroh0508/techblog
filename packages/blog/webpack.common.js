const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: ['core-js', 'regenerator-runtime/runtime', path.resolve(__dirname, './index.js')],
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
          name: 'vue',
          var: 'Vue',
          path: `dist/vue.${mode === 'production' ? 'min.' : ''}js`,
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: `dist/vue-router.${mode === 'production' ? 'min.' : ''}js`,
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
