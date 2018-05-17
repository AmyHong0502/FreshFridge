let moreButton = $('#moreButton');

// Returns the user's input from every <li class='ingredientLi'>.
function extractUserIngredients() {
    let userInputs = document.getElementsByClassName('ingredientLi');
    let ingredients = [];

    let pattern = /(.*)<span.*/;

    for (let i = 0; i < userInputs.length; i++) {
        let ingredient = userInputs[i].innerHTML.replace(pattern, "$1");
        ingredients.push(ingredient);
    }

    return ingredients;
}

function keepIngredients() {
    let data = document.getElementById('api-data-string').innerText;
    let pattern = /.*allowedIngredient":\["(.*)"],"q".*/;

    data = data.replace(pattern, "$1");
    data = data.split('\",\"');
    generateIngredientInputs(data);
}


function generateIngredientInputs(ingredients) {
    let location = document.getElementById('ingredients');

    while(location.firstChild) {
        location.removeChild(location.firstChild);
    }

    for (let i = 0; i < ingredients.length; i++) {
        let inputElement = document.createElement('input');
        inputElement.name = 'ingredients';
        inputElement.type = 'text';
        inputElement.style = 'display: none;';
        inputElement.value = ingredients[i];
        location.appendChild(inputElement);
    }
}


// Processes initial JSON object and appends it to HTML Elements
function showRecipes() {
    let data = document.getElementById('api-data-string').innerText;

    if (data === null || data === "") {
        return;
    }

    data = JSON.parse(data);

    let table = document.getElementById('api-recipes');
    let row;

    for (let i = 0; i < data.matches.length; i++) {
        if (i % 3 === 0) {
            row = document.createElement('tr');
            row.className = 'row';
            table.append(row);
        }

        let recipe = data['matches'][i];

        let recipeName = recipe['recipeName'];
        let thumbnailURL = recipe['imageUrlsBySize'][90];
        let thumbnailURL2 = recipe['smallImageUrls'][0];

        let cellNode = document.createElement('td');
        let recipeDataSpan = generateDataSpan(thumbnailURL, recipeName);
        let formNode = generateForm(recipe['id'], recipeDataSpan);

        cellNode.appendChild(formNode);
        row.append(cellNode);

        if (i % 3 === 2) {
            table.appendChild(row);
        }
    }

    // if (clickCount === 1) {
    //     let buttonNode = document.createElement("button");
    //     buttonNode.setAttribute("onClick", "clickMore()");
    //     buttonNode.setAttribute("value", "showMorebtn");
    //     buttonNode.setAttribute("class", "btn btn-primary");
    //     buttonNode.append("Show more");
    //     moreButton.append(buttonNode);
    // }
}

function generateForm(recipeID, recipeDataButton) {
    let formNode = document.createElement('form');
    let recipeIdInputNode = document.createElement('input');
    let submitButton = recipeDataButton;

    formNode.method = 'post';
    formNode.action = '/' + recipeID;
    formNode.id = recipeID;
    formNode.name = recipeID;

    recipeIdInputNode.type = 'text';
    recipeIdInputNode.name = 'recipeID';
    recipeIdInputNode.value = recipeID;
    recipeIdInputNode.style = 'display: none;';

    // submitTrigger.setAttribute('onclick', recipeID + '.submit();');

    formNode.appendChild(recipeIdInputNode);
    formNode.appendChild(submitButton);

    return formNode;
}

function generateDataSpan(imageURL, recipeName) {
    let buttonNode = document.createElement('button');
    let imageNode = document.createElement('img');
    let titleNode = document.createElement('p');

    buttonNode.type = 'submit';

    // let res = recipeId.replace(/=s90-c/g, "=s240-c");
    // ----------------------------------------------

    // imageNode.src = res;
    imageNode.src = imageURL;
    imageNode.alt = recipeName;
    buttonNode.appendChild(imageNode);
    // ----------------------------------------------
    // imageNode.setAttribute("onClick", "send_recipeURL(this.id)");

    titleNode.append(recipeName);
    buttonNode.appendChild(titleNode);

    return buttonNode;
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


    let ul = document.getElementById("ingredientsUL");
    ul.appendChild(li);

    generateIngredientInputs(extractUserIngredients());

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
showRecipes();
keepIngredients();

// if (document.getElementById('td') !== undefined) {
//     generateIngredientInputs(#{ingredients});
// }

console.log("yummly-api.js included");
