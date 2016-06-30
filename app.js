var express = require('express'),
    cors = require('cors'),
    app = express();

app.use(express.static('build'));

app.mockSeriesListData = [
  { title: 'A Song of Ice and Fire', author: 'George RR Martin', keywords: 'Game of Thrones', slug:'a-song-of-ice-and-fire'},
  { title: 'Foundation', author: 'Isaac Asimov', keywords: '', slug:'foundation'}
];

// mock data manually collected from relevant pages at Goodreads
app.mockSeriesData = {
  info: {
    title: 'A Song of Ice and Fire (Game of Thrones)',
    author: 'George RR Martin',
    rating: 4.5,
    numRatings: 1232,
    seriesLink: 'https://www.goodreads.com/series/43790',
    authorLink: 'https://www.goodreads.com/author/show/346732.George_R_R_Martin',
    imageUrl: 'https://d.gr-assets.com/books/1326125793m/1151568.jpg',
  },
  graph: {
    xAxisMin: 1995,
    xAxisMax: 2012,
    yAxisMin: 3.98,
    // yAxisMax is always 5
    // yAxisMax: 5,
    regressionData: [[1996, 4.11], [2011, 4.51]], // this is obviously  made up
    data: [
      {x: 1996, y: 4.44, data: {title: "A Game of Thrones", numVotes: 121 }},
      {x: 1998, y: 4.39, data: {title: "A Clash of Kings", numVotes: 999 }},
      {x: 2000, y: 4.54, data: {title: "A Storm of Swords", numVotes: 11 }},
      {x: 2005, y: 4.08, data: {title: "A Feast for Crows", numVotes: 765 }},
      {x: 2011, y: 4.29, data: {title: "A Dance with Dragons", numVotes: 134 }}
    ]
  }
};

app.get('/api/series', cors(), function(request, response) {
  response.json(app.mockSeriesListData);
});

app.get('/api/series/:slug', cors(), function(request, response) {
  response.json(app.mockSeriesData);
});

module.exports = app;