var express = require('express'),
    cors = require('cors'),
    graphqlHTTP = require('express-graphql'),
    schema = require('./server/graphQL/schema');

var app = express();

app.use(express.static('build'));

app.use('/graphql', cors(), graphqlHTTP({ schema: schema }));

module.exports = app;
