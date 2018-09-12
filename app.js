//const http = require('http')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://@localhost:27017/mood?';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  client.close();
});


/* http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end()
}).listen(8080) */