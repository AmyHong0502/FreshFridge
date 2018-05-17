let Fridge = require('../models/fridge');
let async = require('async');

// No index: default is fridge_list
// Display list of all foods in this fridge.
exports.fridge_list = function (req, res, next) {
    Fridge.find({}, 'food email')
        .exec(function (err, list_fridge) {
            if (err) {
                return next(err);
            }
            // success, so render
            res.render('fridge', {title: 'FreshFridge: My Fridge', fridge_list: list_fridge});
        });
};

exports.fridge_process = function(req, res, next) {
    let fridge = new Fridge(
        {email: req.body.email, food: req.body.food}
    );

    if (req.body.email === "") {
        res.redirect('/login');
    }

    Fridge.findOne({
        'email': req.body.email,
        'food': req.body.food
    }).exec(function (err, found_fridge) {
        if (err) {
            return next(err);
        }
        if (found_fridge) {
            // Found, so DELETE
            Fridge.findOneAndRemove({
                'email': req.body.email,
                'food': req.body.food
            }).exec(function(err, results) {
                if (err) {
                    return next(err);
                }

                // successful, return to /fridge
                res.redirect('/i/fridge');
            })
        } else {
            // CREATE
            fridge.save(function (err) {
                if (err) {
                    return next(err);
                }

                res.redirect('/i/fridge');
            })
        }
    });
};