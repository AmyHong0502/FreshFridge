let async = require('async');

exports.recipe_list = function(req, res, next) {
    res.setHeader('Content-Type', 'application/text');
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.body);

    clickCount = req.query.clickMore;

};

exports.recipe_detail = function (req, res, next) {
    res.send('NOT IMPLEMENTED: recipe\'s detail' + req);
};




// 1. List of Recipes
// 2. Details of a requested recipe

// 1. List of Recipes

// // Waits for POST request from Recipe.html (http://freshfridge.tk/recipesURL)
// // send Recipe API data
// router.get('/recipeURL', function (req, res, next) {
//     res.setHeader('Content-Type', 'application/text');
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     console.log(req.body);
//
//     clickCount = req.query.clickMore;
//     console.log(clickCount);
//     // Turns req.body into an array of index 0
//     constraintArray = (Object.keys(req.body));
//     // Turns splits the array with delimiter
//     let temp = constraintArray[0].split(",");
//     format_array(temp);
//     res.end();
// });
//
// //Waits for GET request from http://127.0.0.1:3000/specifiedrecipe
// // Gets all recipes from given constrains in JSON format
// router.get('/recipes', function (req, res) {
//     // To allow Cross domain referencing (CORS)
//
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     sendConstraintsAPI(function (err, data) {
//
//         if (!err) {
//             res.send(data);
//             URL = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af";
//         } else {
//             res.send(err);
//         }
//     });
// });

// let clickedMore = 1;
// router.post('/clickMore', function (req, res) {
//     // To allow Cross domain referencing (CORS)
//     res.setHeader('Content-Type', 'application/text');
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     console.log("Click count recieved");
//     clickedMore = (Object.keys(req.body)[0]);
//     console.log(req.body);
//     console.log("sending recipe");
//     res.end();
// });




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

