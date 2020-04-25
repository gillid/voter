import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  mode: process.env.NODE_ENV || 'production',
  entry: '@v/client',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../../../dist/public'),
    publicPath: '/',
  },
  plugins: [new CleanWebpackPlugin()],
};
