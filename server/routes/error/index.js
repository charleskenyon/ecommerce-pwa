const error = require('express').Router();
const { handler404, handler500 } = require('./handlers');

error.use(handler404);
error.use(handler500);

module.exports = error;