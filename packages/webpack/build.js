require('dotenv').config();
require('@/babel');

const client = require('./src/configClient').default;
const server = require('./src/configServer').default;

module.exports = [client, server];
