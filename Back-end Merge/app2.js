// Declaring Express
const express = require('express');
const app = express();
const request = require('request');
// npm install async-each
const each = require('async-each');
// npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use('/static', express.static('stuff'));


// Sets up port for server
const port = 3000
app.listen(port, () => console.log('My app listening on port ' + port));


// Waits for POST request from Recipe.html (http://127.0.0.1:3000/recipesURL) 
// send Recipe API data
var clickCount;
constraintArray = [];
app.post('/recipeURL', function(req, res) {
    // To allow Cross domain referencing (CORS)
    res.setHeader('Content-Type', 'application/text');
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.body);
    
    clickCount = req.query.clickMore;
    console.log(clickCount);
    // Turns req.body into an array of index 0
    constraintArray = (Object.keys(req.body));
    // Turns splits the array with delimiter
    var temp = constraintArray[0].split(",");
    format_array(temp);
    res.end();
});


// Waits for POST request from Recipe.html (http://127.0.0.1:3000/recipesID) 
// send Recipe API data
var recipeURL;
app.post('/recipesID', function(req, res) {
    // To allow Cross domain referencing (CORS)
    res.setHeader('Content-Type', 'application/text');
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("Req-received");
    // Comes in as a JSON key. Converts it into a string.
    recipeId = (Object.keys(req.body)[0]);
    console.log(recipeId);
    recipeURL = "http://api.yummly.com/v1/api/recipe/" + recipeId + "?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af";
    console.log("sending recipe");
    res.end();
});



// Recursively calls the API with a parsed URL that includes the recipe that was click in index.html
// Only exits when theres an error or a proper response.
var specificIngredient;

function sendRecipe(callback) {
    request(recipeURL, {
        json: true
    }, function(error, response, specifiedrecipe) {
        if (!error && response.statusCode == 200) {
            specificIngredients = specifiedrecipe;
            if (callback) {
                return callback(null, specificIngredients);
            }
        } else {
            if (callback) {
                return callback(error, null);
            }
        }

    })


};



//Waits for GET request from http://127.0.0.1:3000/specifiedrecipe  
// Gets recipe specifics of recipe that was clicked in JSON format
app.get('/specifiedrecipe', function(req, res) {

    // To allow Cross domain referencing (CORS)
    console.log("recieved another request");
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    sendRecipe(function(err, data) {

        if (!err) {
            res.send(data);
            recipeURL = "";
        } else {
            res.send(err);
        }



    });

});


// Recursively calls the API with the URL of the recipe constraints
// Only exits when theres an error or a proper response.
function sendConstraintsAPI(callback) {
    request(URL, {
        json: true
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            result = body;

            if (callback) {
                return callback(null, result);
            }
        } else {
            if (callback) {
                return callback(error, null);
            }
        }



    });

}



//Waits for GET request from http://127.0.0.1:3000/specifiedrecipe  
// Gets all recipes from given constrains in JSON format 
app.get('/recipes', function(req, res) {
    // To allow Cross domain referencing (CORS)
  
 
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    sendConstraintsAPI(function(err, data) {

        if (!err) {
            res.send(data);
            URL = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af";
        } else {
            res.send(err);
        }



    });
});


   var clickedMore = 1
app.post('/clickMore', function(req, res) {
    // To allow Cross domain referencing (CORS)
    res.setHeader('Content-Type', 'application/text');
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("Click count recieved");
    clickedMore = (Object.keys(req.body)[0]);
    console.log(req.body);
    console.log("sending recipe");
    res.end();
});



// Transforms the elements in an array and appends them to the yummly API URL format.
// EX:   &allowedIngredient[]= 
var URL = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af"

function format_array(constraints) {
    var concatenatedIngredients = "";

    for (var i = 0; i < constraints.length; i++) {
        if (constraints[i] != "") {
            var name = constraints[i];
            constraintArray[i] = "&allowedIngredient[]=" + name;
            concatenatedIngredients += constraintArray[i]
        }

    }
        URL += concatenatedIngredients;
    URL +=  "&maxResult=" + (clickCount * 6) + "&start=" + (clickCount * 6);
    console.log(URL);

}

