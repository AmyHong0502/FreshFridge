// Declaring http protocol request
const xhttp = new XMLHttpRequest();

// Global data for GET request
let gl_data = [];

// Jquery var for HTML Id newrecipe
let newTable = $('#newrecipe');

let moreButton = $('#moreButton');
// Jquery var for HTML Id recipe
let table = $('#recipes');

// Keeps track of the amount of times the "Show more" button has been clicked
let clickCount = 1;

function clickMore() {
    clickCount++;
    submission(clickCount);
}

// When submit button is clicked this function is called
// Sends Array of ingredients to app2.JS Node*
// POST to http://127.0.0.1:3000/recipeURL
function submission() {
    console.log("start submission");
    //console.log("filtered = " + submitArray);
    let url = "http://freshfridge.tk/recipeURL?clickMore=" + clickCount;

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(extractUserIngredients());

    // console.log("filtering");
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            fetchingAllRecipes();
        } else {
            handleError(xhttp.status);
        }
    };
}

// Returns the user's input from the <li class='ingredientLi'>.
function extractUserIngredients() {
    let userInputs = document.getElementsByClassName('ingredientLi');
    let ingredients = [];

    console.log("extractUserIngredients called");
    let pattern = /(.*)<span.*/;

    for (let i = 0; i < userInputs.length; i++) {
        let ingredient = userInputs[i].innerHTML.replace(pattern, "$1");
        ingredients.push(ingredient);
    }

    return ingredients;
}


// Once submission() is successful, this function is called.
// It fetches the recipes that are provided from the API
function fetchingAllRecipes() {
    // console.log("okay");
    let url = "http://freshfridge.tk/recipes";
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = processRequest;

    function processRequest() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // console.log("did it");
            // console.log(xhttp.responseText);
            let response = JSON.parse(xhttp.responseText);
            gl_data = JSON.parse(xhttp.responseText);
            appendRequest(response);
            response = "";
            xhttp.responseText = "";
        } else {
            handleError(xhttp.status);
        }
    }
}

// Processes initial JSON object and appends it to HTML Elements
function appendRequest(data) {
    table.append("<div class='row' >");

    for (let i = 0; i < data.matches.length; i++) {
        if (i === 3) {
            table.append("<div class='row' >");

        }
        let img = data['matches'][i]['imageUrlsBySize'];
        // Formats image size before sending request --
        let recipeId = "" + Object.keys(img).map(function (key) {
            return img[key]
        });
        let recipeTitle = "";
        let res = recipeId.replace(/=s90-c/g, "=s240-c");
        // ----------------------------------------------
        let imageNode = document.createElement("img");
        imageNode.src = res;
        imageNode.setAttribute("id", i);
        // ----------------------------------------------
        imageNode.setAttribute("onClick", "send_recipeURL(this.id)");
        let cellNode = document.createElement("td");
        cellNode.appendChild(imageNode);
        // ----------------------------------------------
        let titleNode = document.createElement("p");
        titleNode.append(data['matches'][i]['recipeName']);
        cellNode.appendChild(titleNode);

        table.append(cellNode);
    }

    if (clickCount === 1) {
        let buttonNode = document.createElement("button");
        buttonNode.setAttribute("onClick", "clickMore()");
        buttonNode.setAttribute("value", "showMorebtn");
        buttonNode.setAttribute("class", "btn btn-primary");
        buttonNode.append("Show more");
        moreButton.append(buttonNode);
    }
}


// Gets ID of <img> that was clicked
// Sends a specified recipe request to http://freshfridge.tk/recipesID depending on picture that was click.
function send_recipeURL(clicked_id) {
    alert(clicked_id);
    let url = "http://freshfridge.tk/recipesID";
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(gl_data['matches'][clicked_id]["id"]);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("ready");
            getSpecificRecipe();
        } else {
            handleError(xhttp.status);
        }
    };
}


// Gets clicked Recipe Specifics
function getSpecificRecipe() {
    let url = "http://freshfridge.tk/specifiedrecipe";
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = processRequest;

    function processRequest(e) {
        if (xhttp.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            processRecipe(response);
        } else {
            handleError(xhttp.status);
        }
    }
}

// Appends the clicked recipe specifics to the layout
function processRecipe(body) {
    let recipeImage = body['images'][0].hostedLargeUrl;
    let imageNode = document.createElement("img");
    imageNode.src = recipeImage;
    newTable.append(imageNode);

    newTable.append("<tr><td>" + "Recipe name: " + body['name']);
    newTable.append("<tr><td>" + "Ingredients: " + body['ingredientLines']);
}

// Error handling for xhttp requests.
function handleError(status) {
    if (status === 400) {
        console.log('Bad request, often due to missing a required parameter.');
    } else if (status === 401) {
        console.log('No valid API key provided.');
    } else if (status === 404) {
        console.log('The requested resource doesn\'t exist.');
    }
}


// Create a new list item when clicking on the "Add" button
// Adds new list item to array
function listNewIngredient() {
    console.log("listNewIngredient called");

    let inputValue = document.getElementById("myInput").value;
    if (inputValue === null || inputValue === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "ingredientLi");

    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    document.getElementById("ingredientsUL").appendChild(li);


    let span = document.createElement("SPAN");
    span.className = "close";

    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.remove();
        }
    }

    document.getElementById("myInput").value = "";
}

console.log("yummly-api.js included");
