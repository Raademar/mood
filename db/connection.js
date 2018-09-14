const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const insertDocuments = function(db, callback){
  // Get the userentries collection
  const collection = db.collection('userentries');
  // Insert some userentries
  collection.insertMany([
    {mood: 3}, {date: '2018-09-14'}, {note: 'Hejsan svejsan.'}
  ], function(err, result){
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log('Inserted 3 documents into userentries');
    callback(result);
  });
}

const findDocuments = function(db, callback){
    // Get the userentries collection.
  const collection = db.collection('userentries');
  // Find the userentries.
  collection.find({'mood': 5}).toArray(function(err, docs){
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
}

const updateDocuments = function(db, callback){
  // Get the userentries collection.
  const collection = db.collection('userentries');
  // Update mood where is equal to 5
  collection.updateOne({mood: 5}
  , {$set: {mood: 1} }, function(err, result){
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the userentry with the field mood equal to 4");
    callback(result);
  });
}

const removeDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
}

const indexCollection = function(db, callback){
  db.collection('userentries').createIndex(
    { 'a': 1 },
    null,
    function(err, results) {
      console.log(results);
      callback();
    }
  );
};

(async function(){

const url = 'mongodb://localhost:27017/mood';
const dbName = 'mood';
let client;

try {
  client = await MongoClient.connect(url)
  const db = client.db(dbName);

  let r = await db.collection('userentries').insertOne({mood: 6, note: 'Hejsan kompis'});
  assert.equal(1, r.insertedCount);


  // assert.equal(null, err);
  // console.log('Connection was successfull to the server!');
  // insertDocuments(db, function(){
  //   //updateDocuments(db, function(){
  //     //removeDocument(db, function(){
  //       indexCollection(db, function(){
  //         client.close();
  //       });
  //     });
  //   //});
  // //});

} catch (err) {
  console.log(err.stack)
}
if (client) {
  console.log('Connection successfull!')
  client.close();
}
})();