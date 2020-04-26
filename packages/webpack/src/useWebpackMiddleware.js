import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import configClient from './configClient';

export const useWebpackMiddleware = (server) => {
  const compiler = webpack(configClient);

  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: configClient.output.publicPath,
    }),
  );

  server.use(webpackHotMiddleware(compiler));
};
