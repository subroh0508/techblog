import { https } from 'firebase-functions';
import app from './src/server';

export const ritsuko = https.onRequest(app);
