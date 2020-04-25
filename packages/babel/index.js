// use babel for es6 syntax
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-proposal-object-rest-spread'],
});

// polyfill
require('@babel/polyfill');
