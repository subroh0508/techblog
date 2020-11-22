import { https } from 'firebase-functions';
import app from './entry-server';

export const ritsuko = https.onRequest(app);
