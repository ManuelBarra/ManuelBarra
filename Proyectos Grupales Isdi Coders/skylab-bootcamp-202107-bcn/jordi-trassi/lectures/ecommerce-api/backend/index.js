require('dotenv').config();
const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const productRouter = require('./src/routers/productRouter');
const userRouter = require('./src/routers/userRouter');
const cartRouter = require('./src/routers/cartRouter');

server.use('/api/products', productRouter);
server.use('/api/users', userRouter);
server.use('/api/carts', cartRouter);

server.listen(
  port,
  () => debug(`Server is running on ${(`http://localhost:${port}`)}`),
);
