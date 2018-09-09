'use strict';

const express = require('express');
const graphql = require('express-graphql');
const expressBearerToken = require('express-bearer-token');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');
const schema = require('./schema');
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
mongoose.connect(config.storage.connection, {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Storage connection established successfully');

    app.listen(config.instance.port,
        () => console.log(`Application is listening on port ${4000}`));
});
