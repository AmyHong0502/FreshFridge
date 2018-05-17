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

    baseURL = baseURL + "&maxResult=6&start=" + req.body.recipeCount;
    request(baseURL, function(err, response, body) {
        if (!err && response.statusCode === 200) {
            console.log("APIDATA: " + body);
            console.log("URL: " + baseURL);
            res.render('index', {title: 'FreshFridge', subtitle: 'Save food and save money.', apidata: body, ingredients: ingredients});
        } else {
            return next(err);
        }
    });
};

exports.recipe_detail = function (req, res, next) {
    res.send('NOT IMPLEMENTED: recipe\'s detail' + req);
};


// 2. Details of a requested recipe

// // Waits for POST request from Recipe.html (http://freshfridge.tk/recipesID)
// // send Recipe API data
// let recipeURL = "";
// router.post('/recipesID', function(req, res, next) {
//     // To allow Cross domain referencing (CORS)
//     res.setHeader('Content-Type', 'application/text');
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     console.log("Req-received");
//     // Comes in as a JSON key. Converts it into a string.
//     recipeId = (Object.keys(req.body)[0]);
//     console.log(recipeId);
//     recipeURL = "http://api.yummly.com/v1/api/recipe/" + recipeId + "?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af";
//     console.log("sending recipe");
//     res.end();
// });
// // Waits for GET request from http://freshfridge.tk/specifiedrecipe
// // Gets recipe specifics of recipe that was clicked in JSON format
// router.get('/specifiedrecipe', function (req, res) {
//
//     // To allow Cross domain referencing (CORS)
//     console.log("recieved another request");
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     sendRecipe(function (err, data) {
//
//         if (!err) {
//             res.send(data);
//             recipeURL = "";
//         } else {
//             res.send(err);
//         }
//     });
// });

