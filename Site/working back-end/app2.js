// Declaring Express
const express = require('express');
const app = express();
const request = require('request');
const each = require('async-each');

// All recipes containing specific ingredients
var url = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af&allowedIngredient[]=tomatoes";

// Once recipe is found, link to this
var recipe = "http://api.yummly.com/v1/api/recipe/Southwest-Hummus-Wraps-2171837?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af";

app.use('/static', express.static('stuff'));

app.get('/recipes', function(req, res){
    
    let payload = "didn't change!";
    request(url, {json: true}, function(err, re, body) {
        if(err) {
          console.log(err);
        }
        payload = body;
        //console.log(body);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(payload);
    });

});

const port = 3000
app.listen(port, () => console.log('My app listening on port ' + port));



