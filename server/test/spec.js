var request = require('supertest'),
    app = require('../../app'),
    data = require('../static/data_MOCK.json');

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

var seriesGraphqlQuery = '/graphql?query={graphData(slug:"george-r-r-martin"){name{name}, graph{regressionData}}}';
describe('Series endpoint: Returning mock data on ' + seriesGraphqlQuery, function() {
  it('Returns 200 status code', function(done) {
    request(app)
    .get(seriesGraphqlQuery)
    .expect(200, done);
  });

  it('Returns JSON format', function(done) {
    request(app)
    .get(seriesGraphqlQuery)
    .expect('Content-Type', /json/, done);
  });

  it('Returns series mock data', function(done) {
    request(app)
    .get(seriesGraphqlQuery)
    .expect(JSON.stringify({ data: { graphData:
      {
        "name": { "name" : data[1].name.name},
        "graph": { "regressionData": data[1].graph.regressionData }
      }
    }}), done);
  });
});

// unit test series list endpoint too!!
