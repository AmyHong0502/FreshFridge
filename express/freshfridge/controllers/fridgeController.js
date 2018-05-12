let Fridge = require('../models/fridge');
let async = require('async');

// No index: default is fridge_list

// Display list of all foods in this fridge.
exports.fridge_list = function (req, res, next) {
    Fridge.find({}, 'food email')
    // .populate('email')
        .exec(function (err, list_fridge) {
            if (err) {
                res.render('index', {title: 'FreshFridge: err', subtitle: 'Save food and save money.'});
                // return next(err);
            }
            // success, so render
            res.render('fridge', {title: 'FreshFridge: My Fridge', fridge_list: list_fridge});
        });
};

// Display detail page for this fridge
exports.fridge_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Fridge detail: ' + req.params.id);
};

// Handle Fridge create on POST
exports.fridge_create_post = function (req, res) {
    let fridge = new Fridge(
        {email: req.body.email, food: req.body.food}
    );

    console.log("email: " + req.body.email);
    console.log("food: " + req.body.food);

    Fridge.findOne({
        'email': req.body.email,
        'food': req.body.food
    }).exec(function (err, found_fridge) {
        if (err) {
            return next(err);
        }
        if (found_fridge) {
            // food is in this fridge, send a message to tell the user it already exists.
        } else {
            fridge.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.render('fridge', {title: 'FreshFridge: Result from Create-Post'});
            })
        }
    });
};

// // Display Fridge delete form on GET
// exports.fridge_delete_get = function(req, res) {
//     async.parallel({
//         fridge: function (callback) {
//             Fridge.findById(req.params.id).exec(callback);
//         },
//     }, function(err, results) {
//         if (err) {return next(err); }
//         if (results.email== null) { // no results
//             res.redirect('/i/fridge');
//         }
//         // successful, so render
//         res.render('fridge', {title: 'freshfridge: DELETE-GET result'});
//     })
// };

// Handle Fridge delete on POST
exports.fridge_delete_post = function (req, res) {
    console.log("email: " + req.body.email);
    console.log("food: " + req.body.food);

    Fridge.findOneAndRemove({
        'email': req.body.email,
        'food': req.body.food
    }).exec(function (err, results) {
        if (err) {
            return next(err);
        }

        // successful, so render
        res.render('fridge', {title: 'freshfridge: DELETE-POST result'});
    })
};
