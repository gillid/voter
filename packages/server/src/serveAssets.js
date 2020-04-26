import express from 'express';
import { useWebpackMiddleware } from '@v/webpack';

export const serveAssets = (server) => {
  if (process.env.NODE_ENV === 'development') {
    useWebpackMiddleware(server);
  } else {
    server.use('/assets', express.static('assets'));
  }
};
