var Fridge = require('../models/fridge');

// Display list of all foods in this fridge.
exports.fridge_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Fridge list');
};

// Display detail page for this fridge
exports.fridge_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Fridge detail: ' + req.params.id);
};

// Display Fridge create form on GET
exports.fridge_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Fridge CREATE GET');
};

// Handle Fridge create on POST
exports.fridge_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Fridge CREATE POST');
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
