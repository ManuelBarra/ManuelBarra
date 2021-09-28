require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');
const passport = require('passport');
const User = require('./src/models/userModel');

require('./src/config/databaseConfig');
require('./src/config/passport-strategies/localStrategy');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

server.use(passport.initialize());
server.use(passport.session());
passport.serializeUser((user, next) => {
  next(null, user.nombre);
});
passport.deserializeUser(async (name, next) => {
  try {
    const user = await User.findOne({ name });
    next(null, user);
  } catch (error) {
    next(error);
  }
});

const authRouter = require('./src/routes/authRouter');

server.use('/', authRouter);
server.get(
  '/api/users/:userId',
  passport.authenticate('login'),
  async (req, res) => {
    try {
      const user = await User.findById(req.params.UserId);
      res.json({
        user,
        message: 'Profile works'
      });
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
);

server.get('/', (req, res) => {
  res.send('server root works');
});

server.listen(
  port,
  () => debug(`Server is running on http://localhost:${port}`)
);
