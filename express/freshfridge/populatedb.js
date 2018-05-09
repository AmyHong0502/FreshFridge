console.log('This script populates some test records to the database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
let userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

let async = require('async');
let Fridge = require('./models/fridge');
let ShoppingList = require('./models/shoppinglist');


let mongoose = require('mongoose');
let mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var fridgeItems = [];
var shoppingListItems = [];

function fridgeCreate(email, food, cb) {
    let fridgeDetail = {email: email, food: food};

    let fridge = new Fridge(fridgeDetail);

    fridge.save(function (err) {
        if (err) {
            cb(err, null);
            return
        }
        console.log('New Fridge: ' + fridge);
        fridgeItems.push(fridge);
        cb(null, fridge)
    });
}

function shoppingListCreate(email, food, cb) {
    let shoppingListDetail = {email: email, food: food};

    let shoppingList = new ShoppingList(shoppingListDetail);

    shoppingList.save(function (err) {
        if (err) {
            cb(err, null);
            return
        }
        console.log('New ShoppingList: ' + shoppingList);
        shoppingListItems.push(shoppingList);
        cb(null, shoppingList)
    });
}

function createFridgeItems(cb) {
    console.log("CF Called");
    async.parallel([
            function (callback) {
                fridgeCreate('randommail@gmail.com', 'Apple', callback);
            },
            function (callback) {
                fridgeCreate('randommail@gmail.com', 'Beef', callback);
            },
            function (callback) {
                fridgeCreate('sofresh@gmail.com', 'Sausage', callback);
            },
            function (callback) {
                fridgeCreate('sofresh@gmail.com', 'Squid', callback);
            },
            function (callback) {
                fridgeCreate('sofresh@gmail.com', 'Beef', callback);
            },
        ],
        // optional callback
        cb);

    console.log("CF Finished CB");
}

function createShoppingListItems(cb) {
    console.log("CSL Called");
    async.parallel([
            function (callback) {
                shoppingListCreate('randommail@gmail.com', 'Apple', callback);
            },
            function (callback) {
                shoppingListCreate('contactff@gmail.com', 'Beef', callback);
            },
            function (callback) {
                shoppingListCreate('contactff@gmail.com', 'Papaya', callback);
            },
            function (callback) {
                shoppingListCreate('sofresh@gmail.com', 'Plum', callback);
            },
            function (callback) {
                shoppingListCreate('sofresh@gmail.com', 'Spinach', callback);
            },
        ],
        // optional callback
        cb);
    console.log("CSL Finished CB");
}

async.series([
        createShoppingListItems,
        createFridgeItems
    ],
// Optional callback
    function (err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('fridgeItems: ' + fridgeItems + ', shoppingListItems: ' + shoppingListItems);

        }
        // All done, disconnect from database
        mongoose.connection.close();
    }
);


