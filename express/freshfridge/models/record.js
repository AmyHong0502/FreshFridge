// record.js

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RecordSchema = new Schema(
  {
    record: {type: String, required: true, max: 100},
  }
);

// Virtual for record
RecordSchema
.virtual('name')
.get(function () {
  return this.record;
});

// Virtual for record's URL
RecordSchema
.virtual('url')
.get(function () {
  return '/record/' + this._id;
});

//Export model
module.exports = mongoose.model('Record', RecordSchema);