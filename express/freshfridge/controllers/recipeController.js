let request = require('request');

exports.recipe_list = function(req, res, next) {
    let baseURL = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af";
    let ingredients = req.body.ingredients;

    console.log('ingredients: ' + ingredients);

    for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i] !== "") {
            console.log(i + ': ' + ingredients[i]);
            baseURL = baseURL + "&allowedIngredient[]=" + ingredients[i];
        }
    }

    baseURL = baseURL + "&maxResult=900&start=" + req.body.recipeCount;
    request(baseURL, function(err, response, body) {
        if (!err && response.statusCode === 200) {
            console.log("URL: " + baseURL);
            res.render('index', {title: 'FreshFridge', subtitle: 'Save food and save money.', apidata: body});
        } else {
            return next(err);
        }
    });
};

exports.recipe_detail = function (req, res, next) {
    console.log('recipeID: ' + req.body.recipeID);
    let baseURL = "http://api.yummly.com/v1/api/recipe/" + req.body.recipeID + "?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af";
    console.log("sending recipe using: " + baseURL);

    request(baseURL, function(err, response, body) {
        if (!err && response.statusCode === 200) {
            console.log("Response: " + body);
            res.render('recipe-detail', {title: 'FreshFridge', subtitle: 'Save food and save money.', apidata: body});
        } else {
            return next(err);
        }
    });
};
