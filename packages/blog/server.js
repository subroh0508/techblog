import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import hotServerMiddleware from './hot-server-middleware';
import webpackConfig from './scripts/webpack.server-dev';

const server = express();

server.use(express.static(path.resolve(__dirname, './assets')));
server.use(express.static(path.resolve(__dirname, './public')));

const compiler = webpack(webpackConfig);

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: true,
  })
);
server.get('*', hotServerMiddleware(compiler));

server.listen(8080, () => console.log('listening port: 8080'));
