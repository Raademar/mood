const mocha = require('mocha');
const assert = require('assert');
const UserEntry = require('../models/userEntries');
// Describe tests
describe('Saving records', function(){

  // Create tests
  it('Saves a record to the datebase', function(done){

    var user = new UserEntry({
      date: '2018-09-12',
      mood: 4,
      note: 'Good day today, working on my cool application.'
    });

      user.save().then(function(){
        assert(user.isNew === false);
        done();
    });
  });
});