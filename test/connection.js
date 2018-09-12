const mongoose = require('mongoose');

// Connect to mongoDB
mongoose.connect('mongodb://localhost/mood');

mongoose.connection.once('open', function(){
  console.log('Connection has been made, now shoot for the stars.');
}).on('error', function(error){
  console.log('Connection error: ', error);
});