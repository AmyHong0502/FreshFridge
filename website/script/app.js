// Declaring Express
var express = require('express');
var app = express();

// Allows CORS access
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


// Setting protocols
const http = require('http');
// Set Hostname
const hostname = '127.0.0.1';
const port = 3000;
// Yummly API site w/ APP ID & APP KEY
var url = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af&allowedIngredient[]=garlic";
let body = "";


// Fetches information from Yummly given certain constrains
http.get(url, res => {
  res.setEncoding("utf8");
  res.on("data", data => {
    body += data;
    console.log(body);
  });
});

// Created Server thats expecting response
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(body);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


  
 



