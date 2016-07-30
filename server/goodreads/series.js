var key = require('../goodreadsApiKey');
var goodreads = require('goodreads');

gr = new goodreads.client({ 'key': key.key, 'secret': key.secret });

gr.getSeries('40650', function(json) {
  if(json) {
    // Received valid response from Goodreads
    console.log(JSON.stringify(json.GoodreadsResponse.series[0].title));
  }
});
