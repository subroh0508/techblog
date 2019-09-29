import { https } from 'firebase-functions';
import app from './server';

export const ritsuko = https.onRequest(app);
