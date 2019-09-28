const functions = require('firebase-functions');
const app = require('./server');

exports.ritsuko = functions.https.onRequest(app);
