var express = require('express'),
    cors = require('cors'),
    app = express();

app.use(express.static('build'));

app.mockSeriesData = [
  { title: 'A Song of Ice and Fire', author: 'George RR Martin', keywords: 'Game of Thrones', slug:'a-song-of-ice-and-fire'},
  { title: 'Foundation', author: 'Isaac Asimov', keywords: '', slug:'foundation'}
];

app.get('/api/series', function(request, response) {
  response.json(app.mockSeriesData);
});

module.exports = app;
