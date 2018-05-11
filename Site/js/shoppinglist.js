var counter = 0;

// Create a new list when clicking on the "Add" button
function newElement() {
    var trigger = document.createElement("div");
    trigger.setAttribute("class", "trigger");
    var inputValue = document.getElementById("list-name").value;
    var text = document.createTextNode(inputValue);
    trigger.appendChild(text);
    var toggle = document.createElement("div");
    toggle.setAttribute("class", "toggle");
    toggle.setAttribute("id", "panel " + counter);
    var myBreak = document.createElement("br");
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("current-list").appendChild(trigger);
        document.getElementById("current-list").appendChild(toggle);
        document.getElementById("current-list").appendChild(myBreak);
        document.getElementById("list-name").value = "";
        document.getElementById("btn-close").click();
        itemInput();
        addButton();
        createTable();
        counter++;
    }
}

// Add Buttons to the Dropdown List
function addButton() {
    var itemBtn = document.createElement("button");
    var itemText = "Add Item";
    var btnText = document.createTextNode(itemText);
    itemBtn.appendChild(btnText);
    itemBtn.setAttribute("class", "btn btn-success btn-sm add");
    itemBtn.setAttribute("id", "addItem " + counter);
    itemBtn.setAttribute("onclick", "newItemClick(this.id)");

    var browseBtn = document.createElement("button");
    var browseText = "Browse";
    var textNode = document.createTextNode(browseText);
    browseBtn.appendChild(textNode);
    browseBtn.setAttribute("class", "btn btn-primary btn-sm browse");
    browseBtn.setAttribute("id", "browseItem " + counter);

    document.getElementById("panel " + counter).appendChild(itemBtn);
    document.getElementById("panel " + counter).appendChild(browseBtn);

    var lineBreak = document.createElement("hr");
    document.getElementById("panel " + counter).appendChild(lineBreak);
}


// Create Table Tags
function createTable() {
    var divTable = document.createElement("div");
    divTable.setAttribute("class", "table-responsive");

    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table table-borderless");

    var tableBody = document.createElement("tbody");
    tableBody.setAttribute("id", "myTable" + counter);

    tableTag.appendChild(tableBody);

    divTable.appendChild(tableTag);
    document.getElementById("panel " + counter).appendChild(divTable);
}

// Create Input Field Text to add an Item
function itemInput() {
    var formTag = document.createElement("form");
    formTag.setAttribute("class", "form-inline");

    var formDiv = document.createElement("div");
    formDiv.setAttribute("class", "form-group");

    var labelTag = document.createElement("label")
    labelTag.setAttribute("class", "control-label");
    labelTag.setAttribute("for", "item-name " + counter);

    var labelText = "Product:";
    var labelTextNode = document.createTextNode(labelText);
    labelTag.appendChild(labelTextNode);

    var inputTag = document.createElement("input");
    inputTag.setAttribute("type", "text");
    inputTag.setAttribute("class", "form-control panelInput");
    inputTag.setAttribute("id", "item-name " + counter);

    var labelQty = document.createElement("label")
    labelQty.setAttribute("class", "control-label");
    labelQty.setAttribute("for", "item-qty " + counter);

    var qtyText = "Quantity:";
    var labelQtyText = document.createTextNode(qtyText);
    labelQty.appendChild(labelQtyText);

    var qtyTag = document.createElement("input");
    qtyTag.setAttribute("type", "text");
    qtyTag.setAttribute("class", "form-control panelInput");
    qtyTag.setAttribute("id", "item-qty " + counter);


    formDiv.appendChild(labelTag);
    formDiv.appendChild(inputTag);
    formDiv.appendChild(labelQty);
    formDiv.appendChild(qtyTag);
    formTag.appendChild(formDiv);
    document.getElementById("panel " + counter).appendChild(formTag);
}

// Add's item to the current Shopping List
function newItemClick(clicked_id) {
    var buttonId = clicked_id;
    var buttonSplit = buttonId.split(" ");
    var buttonNum = buttonSplit[1];

    var inputText = document.getElementById("item-name " + buttonNum);
    var inputValue = inputText.value;

    console.log(inputValue);

    if (inputValue == "") {
        alert("Product Cannot be Empty");
    } else {
        var tableRow = document.createElement("tr");

        var tableData = document.createElement("td")
        var text = inputValue;
        var tableHeadTextNode = document.createTextNode(text);
        tableData.appendChild(tableHeadTextNode);

        tableRow.appendChild(tableData);
        document.getElementById("myTable" + buttonNum).appendChild(tableRow);

        document.getElementById("item-name " + buttonNum).value = "";
    }
}


// Clicks Add button when pressing enter
window.onload = function() {
    var input = document.getElementById("list-name");
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btn-add").click();
        }
    });
}

// The current input for item-name Selected
var currentToggle = 0;

// Toggle Function for Individual Shopping List
$(document).ready(function() {
    $(document).on('click', '.trigger', function() {
        $(this).toggleClass("bg-primary text-white");
        $(this).next(".toggle").slideToggle("slow");
    });
});


// Prevents Reload upon pressing Enter on form
$(document).ready(function() {
    $(document).on('submit', 'form', function() {
        return false;
    });
});

// Get's the current ID of the input text
$(document).ready(function() {
    $(document).on('click', '.panelInput', function() {
        var panelSplit = ($(this).attr('id')).split(" ");
        var panelNum = panelSplit[1];
        currentToggle = panelNum
        panelClick();
    });
});

// Clicks' button when pressed enter on input
function panelClick() {
    var input = document.getElementById("item-name " + currentToggle);
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("addItem " + currentToggle).click();
            console.log(currentToggle);
        }
    });
}

