const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var body = "";

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(body);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


var url = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af&allowedIngredient[]=tomato";

http.get(url, res => {
    res.setEncoding("utf8");
    res.on("data", data => {
        body += data;
        // console.log(body);
    });
    res.on("end", () => {
        body = JSON.parse(body);
     
         "'" + JSON.stringify(body) + "'";
  
    });
});

// TODO: Change this function to work in recursive way if possible
function walk(jsonData) {
    for (var firstKey in jsonData) {
        if (jsonData.hasOwnProperty(firstKey)) {
            var firstValue = jsonData[firstKey];
            console.log("Key: " + firstKey + ", value: " + firstValue + "\n");
            body += ("Key: " + firstKey + ", value: " + firstValue + "\n");

            for (var secondKey in firstValue) {
                if (typeof firstValue == 'object' && firstValue.hasOwnProperty(secondKey)) {
                    var secondValue = firstValue[secondKey];
                    console.log("  Key: " + secondKey + ", value: " + secondValue + "\n");
                    body += ("  Key: " + secondKey + ", value: " + secondValue + "\n");

                    for (var thirdKey in secondValue) {
                        if (typeof secondValue == 'object' && secondValue.hasOwnProperty(thirdKey)) {
                            var thirdValue = secondValue[thirdKey];
                            console.log("    Key: " + thirdKey + ", value: " + thirdValue + "\n");
                            body += ("    Key: " + thirdKey + ", value: " + thirdValue + "\n");

                            for (var fourthKey in thirdValue) {
                                if (typeof thirdValue == 'object' && thirdValue.hasOwnProperty(fourthKey)) {
                                    var fourthValue = thirdValue[fourthKey];
                                    console.log("      Key: " + fourthKey + ", value: " + fourthValue + "\n");
                                    body +=("      Key: " + fourthKey + ", value: " + fourthValue + "\n");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
