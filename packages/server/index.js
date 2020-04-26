import express from 'express';
import helmet from 'helmet';

const server = express();

server.use(helmet());

server.listen(3000, () => {
  console.log('This is server'); // eslint-disable-line no-console
});
