const { connect } = require('mongoose');
const debug = require('debug')('server:mongooseConfig');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(
    () => debug('Connection established'),
    (error) => debug(error)
  );
