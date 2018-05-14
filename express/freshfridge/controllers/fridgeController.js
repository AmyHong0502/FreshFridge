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

exports.fridge_process = function(req, res, next) {
    console.log("Start Process");

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
            // food is in this fridge,
            // send a message to tell the user it already exists.
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
            fridge.save(function (err) {
                if (err) {
                    return next(err);
                }

                res.redirect('/i/fridge');
            })
        }
    });
};