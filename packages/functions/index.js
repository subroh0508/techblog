import { https } from 'firebase-functions';
import app from '../blog/build/server/server.bundle.js';

export const ritsuko = https.onRequest(app);
