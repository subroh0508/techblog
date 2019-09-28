const express = require('express');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');

const renderer = createBundleRenderer(path.resolve(__dirname, './build/server/vue-ssr-server-bundle.json'), {
  template: require('fs').readFileSync(path.resolve(__dirname, './build/index.html'), 'utf-8'),
});
const app = express();

app.use(express.static(path.join(__dirname, './build/client')));
app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
  const context = { url: req.url };

  renderer.renderToString(context, (error, html) => {
    res.end(html);
  });
});

app.listen(8080, () => console.log('Server start: 8080'));
