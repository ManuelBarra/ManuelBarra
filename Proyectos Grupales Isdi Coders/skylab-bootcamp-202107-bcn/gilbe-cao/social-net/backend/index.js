require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

require('./src/config/databaseConfig');

const port = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use(morgan('dev'));

const userRouter = require('./src/routes/userRouter');
const authRouter = require('./src/routes/authRouter');

server.use('/api/users', userRouter);
server.use('/api/login', authRouter);

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`),
);
