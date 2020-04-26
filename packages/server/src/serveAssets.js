import express from 'express';
import { getWebpackDevMiddleware } from '@v/webpack';

export const serveAssets = (server) => {
  if (process.env.NODE_ENV === 'development') {
    server.use(getWebpackDevMiddleware());
  } else {
    server.use('/assets', express.static('assets'));
  }
};
