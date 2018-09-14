const mocha = require('mocha');
const assert = require('assert');
const UserEntry = require('../models/userEntries');

// Describe tests
describe('Finding records', function(){

let today = new Date('YYYY-mm-dd');  
let user;
  
beforeEach(function(done){
  user = new UserEntry({
    date: '2018-09-14',
    mood: 4,
    note: 'Good day today, working on my cool application.'
  });

    user.save().then(function(){
      done();
  });
});


  // Create tests
  it('Find one record from the database.', function(done){

    UserEntry.findOne({mood: 4}).then(function(result){
      assert(result.name === 4);
      done();
    });
  });

  it('Finds one record by id from the database.', function(done){

    UserEntry.findOne({_id: user._id}).then(function(result){
      assert(result._id.toString() === user._id.toString());
      done();
    });
  });
});