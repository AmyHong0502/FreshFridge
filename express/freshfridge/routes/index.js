let express = require('express');
let router = express.Router();

// Require controller module
let recipe_controller = require('../controllers/recipeController');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'FreshFridge', subtitle: 'Save food and save money.'});
});

// lookup recipes: 6 more recipes for each request
router.post('/recipes', recipe_controller.recipe_list);

router.get('/recipes/recipeID', recipe_controller.recipe_detail);

router.post('/recipes/recipeID', recipe_controller.recipe_detail);

module.exports = router;
