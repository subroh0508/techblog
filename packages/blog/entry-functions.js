import express from 'express';
import { https } from 'firebase-functions';
import app from './entry-server';

const server = express();

server.get('*', app);

export const ritsuko = https.onRequest(app);
