const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'medium-server'
});

module.exports = logger;
