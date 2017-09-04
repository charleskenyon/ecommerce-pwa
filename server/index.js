const app = require('express')();
const db = require('./lib/db');
const middleware = require('./middleware');
const routes = require('./routes');

require('./config')(app);
app.use(middleware);
app.use(routes);

module.exports = app;