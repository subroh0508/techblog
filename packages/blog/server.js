const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');

app.use(history());
app.use('/', express.static(path.join(__dirname, './build')));
app.use('/', express.static(path.join(__dirname, './public')));
app.listen(8080, () => console.log('Server start: 8080'));
