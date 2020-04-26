import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import configClient from './configClient';

export const getWebpackDevMiddleware = () => {
  const compiler = webpack(configClient);

  return webpackDevMiddleware(compiler, {
    publicPath: configClient.output.publicPath,
  });
};
