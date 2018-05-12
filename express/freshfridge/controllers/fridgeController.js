let Fridge = require('../models/fridge');

// No index: default is fridge_list

// Display list of all foods in this fridge.
exports.fridge_list = function(req, res, next) {
    Fridge.find({}, 'food email')
        // .populate('email')
        .exec(function(err, list_fridge) {
            if (err) {
                res.render('index', { title: 'FreshFridge: err', subtitle: 'Save food and save money.' });
                // return next(err);
            }
            // success, so render
            res.render('fridge', {title: 'FreshFridge: My Fridge', fridge_list: list_fridge});
        });
};

// Display detail page for this fridge
exports.fridge_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Fridge detail: ' + req.params.id);
};

// Display Fridge create form on GET
exports.fridge_create_get = function(req, res, next) {
    res.render('fridge_form', {title: 'FreshFridge: Create Fridge'});
};

// Handle Fridge create on POST
exports.fridge_create_post = function(req, res) {
    let fridge = new Fridge(
        {email: req.body.email, food: req.body.food}
    );

    console.log("email: " + req.body.email);
    console.log("food: " + req.body.food);

    Fridge.findOne({
        'email': req.body.email,
        'food': req.body.food
    }).exec(function(err, found_fridge) {
        if (err) { return next(err); }
        if (found_fridge) {
            // food is in this fridge, send a message to tell the user it already exists.
        } else {
            fridge.save(function(err) {
                if (err) {
                    return next(err);
                }
                res.render('fridge', {title: 'FreshFridge: Result from Create-Post'});
            })
        }
    });

    // res.send('NOT IMPLEMENTED: Fridge CREATE POST');
};

// Display Fridge delete form on GET
exports.fridge_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Fridge DELETE GET');
};

// Handle Fridge delete on POST
exports.fridge_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Fridge DELETE POST');
};

// Display Fridge update form on GET
exports.fridge_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Fridge UPDATE GET');
};

// Handle Fridge update on POST
exports.fridge_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Fridge UPDATE POST');
};
