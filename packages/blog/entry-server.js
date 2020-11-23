import { renderToString } from '@vue/server-renderer';
import { createSSRApp } from './app';

import template from './index.html';
import metatags from './metatags';

export default async (req, res) => {
  const { app, router } = createSSRApp();

  router.push(req.url);
  await router.isReady();

  const html = await renderToString(app, { url: req.url });
  const meta = metatags(req.path, req.query);

  res.end(template.replace('<!--vue-ssr-meta-->', meta.head).replace('<!--vue-ssr-outlet-->', html));
};
