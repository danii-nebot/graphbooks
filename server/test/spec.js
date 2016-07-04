var request = require('supertest'),
    app = require('../../app'),
    data = require('../static/data.json');

describe('Requests to the root path', function() {
  var root = '/';

  it('Returns a 200 status code', function(done) {
    request(app)
    .get(root)
    .expect(200, done);
  });

  it('Returns a HTML format', function(done) {
    request(app)
    .get(root)
    .expect('Content-Type', /html/, done);
  });

  it('Serves our angular app', function(done) {
    request(app)
    .get(root)
    // regexp
    .expect(/src="main.js"/, done);
  });
});

var graphqlQuery = '/graphql?query={series(id:1){title, graph{regressionData}}}';
describe('Returning mock data on ' + graphqlQuery, function() {
  it('Returns 200 status code', function(done) {
    request(app)
    .get(graphqlQuery)
    .expect(200, done);
  });

  it('Returns JSON format', function(done) {
    request(app)
    .get(graphqlQuery)
    .expect('Content-Type', /json/, done);
  });

  it('Returns series mock data', function(done) {
    request(app)
    .get(graphqlQuery)
    .expect(JSON.stringify({ data: { series:
      {
        "title": data[1].title,
        "graph": { "regressionData": data[1].graph.regressionData }
      }
    }}), done);
  });
});
