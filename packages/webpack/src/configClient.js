import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';

const isDev = process.env.NODE_ENV === 'development';

const plugins = isDev ? [new HotModuleReplacementPlugin()] : [new CleanWebpackPlugin()];

const entry = isDev
  ? ['webpack-hot-middleware/client', 'react-hot-loader/patch', '@/client']
  : '@/client';

export default {
  mode: process.env.NODE_ENV || 'production',
  entry,
  target: 'web',
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
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devtool: isDev ? 'inline-source-map' : false,
};
