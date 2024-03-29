import path from 'path';

export default {
  mode: 'production',
  entry: '@/server',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../../../dist'),
  },
  stats: {
    warningsFilter: /^(?!CriticalDependenciesWarning$)/,
  },
};
