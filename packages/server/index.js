import express from 'express';
import helmet from 'helmet';
import { buildIndexHtml } from '../index-html';
import { serveAssets } from './src/serveAssets';

const server = express();

server.use(helmet());

serveAssets(server);

server.get('/', (reg, res) => {
  res.send(buildIndexHtml());
});

server.listen(3000, () => {
  console.log('Listening to 3000'); // eslint-disable-line no-console
});
