const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


  
 
var url = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af&allowedIngredient[]=garlic";

http.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
    console.log(body);
  });
  res.on("end", () => {
    body = JSON.parse(body);
    const util = require('util');
    console.log(
      util.inspect(body, { depth: null}));
      
  });
});


