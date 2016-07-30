var key = require('../goodreadsApiKey');
var goodreads = require('goodreads');

gr = new goodreads.client({ 'key': key.key, 'secret': key.secret });

gr.getAuthor('18541', 2, function(json) {
  if(json) {
    // Received valid response from Goodreads
    console.log(JSON.stringify(json.GoodreadsResponse.author[0].name));
  }
});
