// Declaring Express
const express = require('express');
const app = express();
const request = require('request');
// npm install async-each
const each = require('async-each');
// npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
// All recipes containing specific ingredients
var url = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af&allowedIngredient[]=tomatoes";
// Once recipe is found, link to this
var recipe = "http://api.yummly.com/v1/api/recipe/Southwest-Hummus-Wraps-2171837?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af";
app.use('/static', express.static('stuff'));


// Sets up port for server
const port = 3000
app.listen(port, () => console.log('My app listening on port ' + port));




// On-load get information from API given the URL constraints
app.get('/recipes', function(req, res) {
    // To allow Cross domain referencing (CORS)
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    let payload = "didn't change!";

    request(url, {
        json: true
    }, function(err, re, body) {
        if (err) {
            console.log(err);
        }
        payload = body;
        //console.log(body);

        res.send(payload);
        res.end();
    });

});



// Waits for POST request from Recipe.html (http://127.0.0.1:3000/recipesID) 
// send Recipe API data
app.post('/recipesID', function(req, res) {
    // To allow Cross domain referencing (CORS)
    res.setHeader('Content-Type', 'application/text');
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("Req-received");
    // Comes in as a JSON key. Converts it into a string.
    recipeId = (Object.keys(req.body)[0]);
    console.log(recipeId);
    var recipeURL = "http://api.yummly.com/v1/api/recipe/" + recipeId + "?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af";
    sendRecipe(recipeURL);
    console.log("sending recipe");
    res.end();
});



//Sends specific recipe ID to Yummly API, receives recipes specifics in JSON. 
// Appends responds to specific variable
var specificIngredient;

function sendRecipe(recipe) {
    request(recipe, {
        json: true
    }, function(err, re, realRecipe) {
        if (err) {
            console.log(err);
        }
        // console.log(realRecipe);
        specificIngredient = realRecipe;
        console.log(specificIngredient);
        console.log("HEY");

    });
}



//Waits for GET request from http://127.0.0.1:3000/specifiedrecipe  /  
// Sends specific variable with JSON data.
app.get('/specifiedrecipe', function(req, res) {

    // To allow Cross domain referencing (CORS)
    console.log("recieved another request");
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("sending specific");
    res.send(specificIngredient);
    res.end();

});


// Waits for POST request from Recipe.html (http://127.0.0.1:3000/recipesURL) 
// send Recipe API data
constraintArray = [];
app.post('/recipeURL', function(req, res) {
    // To allow Cross domain referencing (CORS)
    res.setHeader('Content-Type', 'application/text');
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.body);
    // Turns req.body into an array of index 0
    constraintArray = (Object.keys(req.body));
    // Turns splits the array with delimiter
    var temp = constraintArray[0].split(",");
    format_array(temp);




    res.end();
});


// Transforms the elements in an array and appends them to the yummly API URL format.
// EX:   &allowedIngredient[]= 
function format_array(constraints) {
var concatenatedIngredients = "";
var url = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af"

    for (var i = 0; i < constraints.length; i++) {
        if (constraints[i] != "") {
            var name = constraints[i];
            constraintArray[i] = "&allowedIngredient[]=" + name;
            concatenatedIngredients += constraintArray[i]
        }

    }
    url += concatenatedIngredients;
    console.log(url);


}