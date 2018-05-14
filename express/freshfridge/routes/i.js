let express = require('express');
let router = express.Router();

// Require controller modules
let fridge_controller = require('../controllers/fridgeController');
let shoppinglist_controller = require('../controllers/shoppinglistController');

let async = require('async');

// GET /i page
// router.get('/', function (req, res) {
//     async.parallel({
//         fridge_count: function (callback) {
//             Fridge.count({}, callback);
//         },
//         shoppingList_count: function (callback) {
//             ShoppingList.count({}, callback);
//         }
//     }, function (err, results) {
//         res.render('i', {
//             title: 'FreshFridge',
//             subtitle: 'Save food and save money.',
//             error: err,
//             data: results
//         });
//     });
// });

// Fridge Routes //
router.get('/fridge', fridge_controller.fridge_list);

router.post('/fridge/process', fridge_controller.fridge_process);

// router.get('/fridge', function (req, res, next) {
//     async.parallel({
//         fridge_count: function (callback) {
//             Fridge.count({}, callback);
//         },
//     }, function (err, results) {
//         res.render('fridge', {
//             title: 'FreshFridge',
//             subtitle: 'Save food and save money.',
//             error: err,
//             data: results
//         });
//     });
// });


router.get('/shopping-list', function (req, res, next) {
    res.render('shopping-list', {
        title: 'FreshFridge',
        subtitle: 'Save food and save money.'
    });
});


module.exports = router;
