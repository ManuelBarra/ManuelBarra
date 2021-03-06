require('dotenv').config();
const debug = require('debug')('server');
const express = require('express');
const morgan = require('morgan');
const userRouter = require('./src/routers/userRouters');
const toDoRouter = require('./src/routers/toDoRouters');
const { dashboardRouter } = require('./src/routers/viewRouters');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 6000;

server.use(morgan('dev'));
server.use(express.json());
server.use('/api', userRouter);
server.use('/api', toDoRouter);
server.set('view engine', 'ejs');
server.use('/', dashboardRouter);

server.listen(
  port,
  () => debug(`Server is running in port ${port}`),
);
