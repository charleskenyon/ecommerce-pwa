const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const secret = require('../lib/credentials').session.secret;

const db = mongoose.connection;
const MongoStore = connectMongo(session);

const sessionConfig = {
  secret: secret,
  saveUninitialized: true,
  resave: true,
  store: new MongoStore({ mongooseConnection: db })
}

module.exports = function(middleware) {
	middleware.use(cookieParser());
	middleware.use(session(sessionConfig));
}