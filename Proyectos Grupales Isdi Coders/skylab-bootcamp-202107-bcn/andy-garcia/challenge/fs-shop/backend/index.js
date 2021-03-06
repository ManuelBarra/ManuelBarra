const express = require('express');
require('dotenv').config();
const debug = require('debug')('index');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors({ origin: 'localhost' }));
server.use(morgan('dev'));
server.use(express.json());

const usersRouter = require('./src/routes/usersRouter');
const favSitesRouter = require('./src/routes/favSitesRouter');
const sitesRouter = require('./src/routes/sitesRouter');

server.use('/api/user', usersRouter);
server.use('/api/sites', sitesRouter);
server.use('/api/favs', favSitesRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`),
);
