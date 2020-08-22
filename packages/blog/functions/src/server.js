import express from 'express';
import path from 'path';
import { createBundleRenderer } from 'vue-server-renderer';
import admin from 'firebase-admin';
import serviceAccount from '../secrets/serviceAccount.json';
import serverBundle from '../assets/server-bundle.json';
import template from '../assets/index.html';

import metatags from './metatags';

const IMAGES_BUCKET_NAME = 'images.subroh0508.net';

const renderer = createBundleRenderer(serverBundle, { template });
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.resolve(__dirname, '../../build')));
  app.use(express.static(path.resolve(__dirname, '../../public')));
}

app.get('/images/:name', (req, res) => {
  const file = admin.storage().bucket(IMAGES_BUCKET_NAME).file(req.params['name']);

  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 15);

  file.getSignedUrl({ action: 'read', expires }, (error, url) => {
    if (error) {
      next(error);
      return;
    }

    res.redirect(url);
  });
});

app.get('*', (req, res) => {
  const context = { ...metatags(req.path, req.query), url: req.url };
  renderer.renderToString(context, (error, html) => {
    res.end(html);
  });
});

if (process.env.NODE_ENV === 'development') {
  app.listen(8080, () => console.log('listening port: 8080'));
}

export default app;
