let express = require('express');
let router = express.Router();

// Require controller modules
let fridge_controller = require('../controllers/fridgeController');
let shoppinglist_controller = require('../controllers/shoppinglistController');

let async = require('async');

// GET /i page
router.get('/', function (req, res, next) {
    res.render('/', {title: 'FreshFridge'});
});

// Fridge Routes //
router.get('/fridge', fridge_controller.fridge_list);

router.post('/fridge/process', fridge_controller.fridge_process);

router.get('/shopping-list', function (req, res, next) {
    res.render('shopping-list', {
        title: 'FreshFridge',
        subtitle: 'Save food and save money.'
    });
});

module.exports = router;
