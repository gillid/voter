import express from 'express';
import { useWebpackMiddleware } from '@/webpack';

export const serveAssets = (server) => {
  if (process.env.NODE_ENV === 'development') {
    useWebpackMiddleware(server);
  } else {
    server.use('/assets', express.static('assets'));
  }
};
