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

// Returns the user's input from every <li class='ingredientLi'>.
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
            let response = JSON.parse(xhttp.responseText);
            processRecipe(response);
        } else {
            handleError(xhttp.status);
        }
    }
}

// Appends the clicked recipe specifics to the layout
function processRecipe(body) {
    let imgURL = body['images'][0].hostedLargeUrl;
    console.log(body['name']);

    let imageNode = document.createElement("img");
    imageNode.src = imgURL;

    let cellNode = document.createElement("td");
    let pNameNode = document.createElement("p");
    pNameNode.append("Recipe name: " + body['name']);
    cellNode.appendChild(pNameNode);

    let pIngredientsNode = document.createElement('p');
    pIngredientsNode.append("Recipe name: " + body['name']);
    cellNode.appendChild(pIngredientsNode);
    cellNode.appendChild(imageNode);

    let rowNode = document.createElement("tr");
    rowNode.appendChild(cellNode);
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
// Used at index.pug, not here.
function listNewIngredient() {
    console.log("listNewIngredient called");

    let inputValue = document.getElementById("myInput").value;
    if (inputValue === null || inputValue === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    let t = document.createTextNode(inputValue);
    li.setAttribute("class", "ingredientLi");
    li.appendChild(t);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.remove();
        }
    }


    let inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.style = "display: none;";
    inputElement.name = 'ingredient';
    inputElement.value = inputValue;

    let ul = document.getElementById("ingredientsUL");
    ul.appendChild(li);

    let form = document.getElementById('request-recipe');
    form.appendChild(inputElement);

    document.getElementById("myInput").value = "";
}

function countRecipes() {
    let inputElement = document.createElement("input");
    inputElement.type = 'number';

    let recipeCount = 0;
    // let recipeCount = document.getElementsByClassName('className');

    inputElement.value = "" + recipeCount;
    inputElement.name = 'recipeCount';
    inputElement.style = "display: none;";

    let formElement = document.getElementById('request-recipe');
    formElement.appendChild(inputElement);
}

countRecipes();
console.log("yummly-api.js included");
