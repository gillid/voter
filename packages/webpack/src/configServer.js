import path from 'path';

export default {
  mode: process.env.NODE_ENV || 'production',
  entry: '@v/server',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../../../dist'),
  },
};
