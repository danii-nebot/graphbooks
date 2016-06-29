var request = require('supertest');
var app = require('../../app');

describe('Requests to the root path', function() {

  it('Returns a 200 status code', function(done) {
    request(app)
    .get('/')
    .expect(200, done);
  });

  it('Returns a HTML format', function(done) {
    request(app)
    .get('/')
    .expect('Content-Type', /html/, done);
  });

  it('Serves our angular app', function(done) {
    request(app)
    .get('/')
    .expect(/src="main.js"/, done);
  });
});

describe('Listing data on /api/series', function() {

   it('Returns 200 status code', function(done) {
     request(app)
     .get('/api/series')
     .expect(200, done);
   });

   it('Returns JSON format', function(done) {
     request(app)
     .get('/api/series')
     .expect('Content-Type', /json/, done);
   });

  //  TODO: how to test for actual production data?
   it('Returns series mock data', function(done) {
     request(app)
     .get('/api/series')
     .expect(JSON.stringify(app.mockSeriesData), done);
   });
 });
