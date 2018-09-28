'use strict';

const express = require('express');
const graphql = require('express-graphql');
const expressBearerToken = require('express-bearer-token');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');
const schema = require('./api/schema');
const logger = require('./utils/logger');
const app = express();

/**
 * Main Endpoint
 */
app.get('/', function (req, res) {
  res.send('App Works');
});

app.use(expressBearerToken());
app.use(cors()); // enable cors

/**
 * Graph QL Endpoint
 */
app.use('/graphql', graphql({
  schema,
  graphiql: true
}));

/**
 * Establish DB Connection
 */
const connectionStr = process.env.NODE_ENV === 'production' ? config.storage.connection : config.storage.fakeConnection;
mongoose.connect(connectionStr, {
  keepAlive: config.keepAlive,
  socketTimeoutMS: config.socketTimeoutMS,
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', () => logger.error('Connection to data storage failed'));
db.once('open', () => {
  logger.info('Storage connection established successfully');

  app.listen(config.instance.port,
    () => logger.info(`Application is listening on port ${4000}`));
});
