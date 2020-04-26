import express from 'express';
import helmet from 'helmet';
import { serveAssets } from './src/serveAssets';

const server = express();

server.use(helmet());

serveAssets(server);

server.listen(3000, () => {
  console.log('Listening to 3000'); // eslint-disable-line no-console
});
