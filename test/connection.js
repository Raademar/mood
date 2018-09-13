const mongoose = require('mongoose');

// ES6 Promises

mongoose.Promise = global.Promise;

// Connect to the database before the tests run.

before(function(done){

  // Connect to mongoDB
  mongoose.connect('mongodb://localhost/mood');
  mongoose.connection.once('open', function(){
    console.log('Connection has been made, now Per has to make coffee.');
    done();
  }).on('error', function(error){
  console.log('Connection error: ', error);
  });
});

// Drop collections before each test.
beforeEach(function(done){
  mongoose.connection.collections.userentries.drop(function(){
    done();
  });
});
