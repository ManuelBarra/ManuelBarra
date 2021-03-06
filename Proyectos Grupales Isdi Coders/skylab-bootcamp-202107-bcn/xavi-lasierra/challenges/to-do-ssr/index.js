const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')('toDo');
const chalk = require('chalk');
const { auth } = require('express-openid-connect');

require('./src/config/ddbb.config');

const port = process.env.PORT || 5000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_CLIENT_SECRET,
  baseURL: `http://localhost:${port}`,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN
};

const server = express();
server.disable('x-powered-by');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(auth(config));
server.use(morgan('dev'));
server.set('view engine', 'ejs');

server.use(
  express.static(path.join(__dirname, '/public'))
);

const toDosRouter = require('./src/routers/toDos.router');
const serverRouter = require('./src/routers/server.router');

server.use('/toDo', toDosRouter);
server.use('/', serverRouter);

server.listen(
  port,
  () => debug(`Server is running in ${chalk.magenta(`http://localhost:${port}`)}`)
);
