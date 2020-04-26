import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const isDev = process.env.NODE_ENV === 'development';

const plugins = isDev ? [] : [new CleanWebpackPlugin()];

export default {
  mode: process.env.NODE_ENV || 'production',
  entry: '@v/client',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../../../dist/assets'),
    publicPath: '/assets',
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  devtool: isDev ? 'inline-source-map' : false,
};
