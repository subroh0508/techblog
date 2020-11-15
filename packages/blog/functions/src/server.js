import express from 'express';
import path from 'path';
import { renderToString } from '@vue/server-renderer';
import serverBundle from '../assets/server.bundle.js';
import template from '../assets/index.html';

import metatags from './metatags';

const server = express();
const { app, router } = serverBundle();

if (process.env.NODE_ENV === 'development') {
  server.use(express.static(path.resolve(__dirname, '../../build')));
  server.use(express.static(path.resolve(__dirname, '../../public')));
}

server.get('*', async (req, res) => {
  const context = { ...metatags(req.path, req.query), url: req.url };

  router.push(context.url);
  await router.isReady();
  const html = await renderToString(app, context);

  res.end(template.replace('<!--vue-ssr-outlet-->', html));
});

if (process.env.NODE_ENV === 'development') {
  server.listen(8080, () => console.log('listening port: 8080'));
}

export default server;
