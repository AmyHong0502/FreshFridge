let ShoppingList = require('../models/shoppinglist');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Shopping-list home page');
};

// Display list of all foods in this shoppinglist.
exports.shoppinglist_list = function(req, res) {
    res.send('NOT IMPLEMENTED: shoppinglist list');
};

// Display detail page for this shoppinglist
exports.shoppinglist_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: shoppinglist detail: ' + req.params.id);
};

// Display shoppinglist create form on GET
exports.shoppinglist_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: shoppinglist CREATE GET');
};

// Handle shoppinglist create on POST
exports.shoppinglist_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: shoppinglist CREATE POST');
};

// Display shoppinglist delete form on GET
exports.shoppinglist_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: shoppinglist DELETE GET');
};

// Handle shoppinglist delete on POST
exports.shoppinglist_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: shoppinglist DELETE POST');
};

// Display shoppinglist update form on GET
exports.shoppinglist_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: shoppinglist UPDATE GET');
};

// Handle shoppinglist update on POST
exports.shoppinglist_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: shoppinglist UPDATE POST');
};
