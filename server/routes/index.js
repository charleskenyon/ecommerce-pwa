const routes = require('express').Router();
const main = require('./main');
const error = require('./error');

routes.use('/', main);
routes.use(error);

module.exports = routes;