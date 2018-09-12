const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model.

const UserEntrySchema = new Schema({
  id: Number,
  date: String,
  mood: Number,
  note: String
});

const UserEntry = mongoose.model('userentry', UserEntrySchema);

module.exports = UserEntry;