import express from 'express';
import path from 'path';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp } from './app';

import template from './build/index.html';
import metatags from './metatags';

const server = express();
const { app, router } = createSSRApp();

if (process.env.NODE_ENV === 'development') {
  server.use(express.static(path.resolve(__dirname, './build')));
  server.use(express.static(path.resolve(__dirname, './public')));
}

server.get('*', async (req, res) => {
  router.push(req.url);
  await router.isReady();

  const html = await renderToString(app, { url: req.url });
  const meta = metatags(req.path, req.query);

  res.end(template.replace('<!--vue-ssr-meta-->', meta.head).replace('<!--vue-ssr-outlet-->', html));
});

if (process.env.NODE_ENV === 'development') {
  server.listen(8080, () => console.log('listening port: 8080'));
}

export default server;
