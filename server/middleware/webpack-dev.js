const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack.dev.config');

const webpackDev = express.Router();
const compiler = webpack(webpackConfig);

webpackDev.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true}
}));

module.exports = webpackDev;