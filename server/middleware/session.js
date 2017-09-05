const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const secret = require('../lib/credentials').session.secret;

const session = express.Router();
const db = mongoose.connection;
const MongoStore = connectMongo(expressSession);

const sessionConfig = {
  secret: secret,
  saveUninitialized: true,
  resave: true,
  store: new MongoStore({ mongooseConnection: db })
}

session.use(cookieParser());
session.use(expressSession(sessionConfig));

module.exports = session;