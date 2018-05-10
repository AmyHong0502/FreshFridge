var express = require('express');
var Fridge = require('../models/fridge');
var ShoppingList = require('../models/shoppinglist');

var router = express.Router();

var async = require('async');

/* GET users listing. */
router.get('/', function (req, res, next) {
    async.parallel({
        fridge_count: function (callback) {
            Fridge.count({}, callback);
        },
        shoppingList_count: function (callback) {
            ShoppingList.count({}, callback);
        }
    }, function (err, results) {
        res.render('i', {
            title: 'FreshFridge',
            subtitle: 'Save food and save money.',
            error: err,
            data: results
        });
    });
});

router.get('/fridge', function (req, res, next) {
    async.parallel({
        fridge_count: function (callback) {
            Fridge.count({}, callback);
        },
    }, function (err, results) {
        res.render('fridge', {
            title: 'FreshFridge',
            subtitle: 'Save food and save money.',
            error: err,
            data: results
        });
    });
});

router.get('/shopping-list', function (req, res, next) {
    async.parallel({

        shoppingList_count: function (callback) {
            ShoppingList.count({}, callback);
        }
    }, function (err, results) {
        res.render('shopping-list', {
            title: 'FreshFridge',
            subtitle: 'Save food and save money.',
            error: err,
            data: results
        });
    });
});

module.exports = router;
