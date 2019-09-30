import express from 'express';
import path from 'path';
import { createBundleRenderer } from 'vue-server-renderer';
import fs from 'fs';

import metatags from './metatags';

const renderer = createBundleRenderer(path.resolve(__dirname, '../assets/server-bundle.json'), {
  template: fs.readFileSync(path.resolve(__dirname, '../assets/index.html'), 'utf-8'),
});
const app = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.resolve(__dirname, '../../build')));
  app.use(express.static(path.resolve(__dirname, '../../public')));
}

app.get('*', (req, res) => {
  const context = { ...metatags(req.path, req.query), url: req.url };
  renderer.renderToString(context, (error, html) => {
    res.end(html);
  });
});

app.listen(port, () => console.log('Server start: 8080'));

export default app;
