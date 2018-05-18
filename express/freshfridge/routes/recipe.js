let express = require('express');
let router = express.Router();

// Require controller module
let recipe_controller = require('../controllers/recipeController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('recipe', {title: 'FreshFridge', subtitle: 'Save food and save money.', apidata: ''});
});

router.post('/', recipe_controller.recipe_list);

router.get('/:recipeID', recipe_controller.recipe_detail);

router.post('/:recipeID', recipe_controller.recipe_detail);

module.exports = router;
