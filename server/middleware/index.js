const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const vhost = require('vhost');
const session = require('./session');
const { logWorkerRequests, setDevelopmentLocals } = require('./utils');
const cache = require('./memory-cache');
const admin = require('../routes/admin');

const middleware = express.Router();
const isDevelopment = process.env.NODE_ENV !== 'production';
const bodyParserConfig = { extended: false };

if (isDevelopment) {
  middleware.use(require('./webpack-dev'));
  middleware.use(setDevelopmentLocals);
}

middleware.use(session);
middleware.use(express.static(path.resolve(__dirname, '../public')));
middleware.use(bodyParser.json());
middleware.use(bodyParser.urlencoded(bodyParserConfig));
middleware.use(vhost('admin.*', admin));
// middleware.use(cache(60));

module.exports = middleware;