// Declaring http protocol request
const xhttp = new XMLHttpRequest();

// Counts the amount of ingredients within ingredientArray.
let ingredientCount = 0;

// Holds strings of the ingredients that were typed in.
let ingredientArray = [];

// Keeps count of the the amount of SPAN tags
let closeTracker = 0;

// Global data for GET request
let gl_data = [];

// Jquery var for HTML Id newrecipe
let selectedRecipe = $('#selectedRecipe');

// Jquery var for HTML Id recipe
let table = $('#recipes');


// When submit button is clicked this function is called
// Sends Array of ingredients to app2.JS Node*
// POST to http://127.0.0.1:3000/recipeURL
function submission() {
    let submitArray;
    submitArray = filter_array(ingredientArray);

    let url = "http://127.0.0.1:3000/recipeURL";

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(submitArray);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            fetchingAllRecipes();
        } else {
            handleError(xhttp.status);
        }
    };
}

// Once submission() is successful, this function is called.
// It fetches the recipes that are provided from the API
function fetchingAllRecipes() {
    let url = "http://127.0.0.1:3000/recipes";
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = processRequest;


    function processRequest() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            gl_data = JSON.parse(xhttp.responseText);
            appendRequest(response);
            xhttp.responseText = "";
        } else {
            handleError(xhttp.status);
        }
    }
}

// Processes initial JSON object and appends it to HTML Elements
function appendRequest(data) {
    let arrLength = data['matches'].length;
    for (let i = 0; i < arrLength; i++) {
        let img = data['matches'][i]['imageUrlsBySize'];

        // Formats image size before sending request --
        let recipeId = "" + Object.keys(img).map(function (key) {
            return img[key]
        });

        let res = recipeId.replace(/=s90-c/g, "=s240-c");

        table.append("<tr><td>" + data['matches'][i]["recipeName"] + "</td></tr>");
        table.append("<a id=" + i + "  onClick='send_recipeURL(this.id)' '>" + "<img  src='" + res + "' class='hello' />" + "</a>");
        table.append("<div class='line'></div>");
    }
    $("<input type='checkbox' class='read-more-state' id='post-2' onClick='clickMore()' />").insertBefore(".read-more-wrap");
}


// Gets ID of <img> that was clicked
// Sends a specified recipe request to http://127.0.0.1:3000/recipesID depending on picture that was click.
function send_recipeURL(clicked_id) {
    alert(clicked_id);
    let url = "http://127.0.0.1:3000/recipesID";
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
    let url = "http://127.0.0.1:3000/specifiedrecipe";
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
    let modal = document.getElementById('myModal');

    modal.style.display = "block";

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    let recipeImage = body['images'][0].hostedLargeUrl;
    let imageNode = document.createElement("img");
    imageNode.src = recipeImage;
    imageNode.setAttribute("id", "srcImg");
    $('#selectedRecipe').empty();
    selectedRecipe.append(imageNode);
    selectedRecipe.append("<h4>" + body['name'] + "</h4>");
    selectedRecipe.append("<p id='ing'> Ingredients: </p>");

    for (let i = 0; i < body['ingredientLines'].length; i++) {
        selectedRecipe.append("<ul><li id='items'>" + body['ingredientLines'][i] + "</li></ul>");
    }
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

function clickMore() {

}

/// Everything to do with input is in grayscale.min.js
/// This includes the dynamic array that is effected with UI changes ie ingredient is removed