const admin = require('express').Router();
const { home } = require('./handlers');

admin.get('/', home);

module.exports = admin;