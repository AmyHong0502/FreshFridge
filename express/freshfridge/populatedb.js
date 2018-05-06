#! /usr/bin/env node

console.log('This script populates some test records to the database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Record = require('./models/record')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var records = []

function recordCreate(record, cb) {
  recordDetail = {record:record}

  var rec = new Record(recordDetail);
       
  rec.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Record: ' + rec);
    records.push(rec)
    cb(null, rec)
  }  );
}

function createRecords(cb) {
    async.parallel([
        function(callback) {
          recordCreate('tomato', callback);
        },
        function(callback) {
          recordCreate('garlic', callback);
        },
        function(callback) {
          recordCreate('lettuce', callback);
        },
        function(callback) {
          recordCreate('carrot', callback);
        },
        function(callback) {
          recordCreate('potato', callback);
        },
        function(callback) {
          recordCreate('avocado', callback);
        },
        ],
        // optional callback
        cb);
}

async.series([
    createRecords
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('RECORDS: '+records);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});

