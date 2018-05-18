// Counter for the current number for shopping lists
var counter = 0;

// Create a new list when clicking on the "Add" button
function newElement() {
    var trigger = document.createElement("div");
    trigger.setAttribute("class", "trigger");
    trigger.setAttribute("id", "list-header" + counter);
    var inputValue = document.getElementById("list-name").value;
    var text = document.createTextNode(inputValue);
    trigger.appendChild(text);
    var toggle = document.createElement("div");
    toggle.setAttribute("class", "toggle");
    toggle.setAttribute("id", "panel " + counter);
    var myBreak = document.createElement("br");
    myBreak.setAttribute("id", "break" + counter);
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
        createRemoveSelected();
        counter++;
    }
}

function createRemoveSelected() {
    var deleteSelectedBtn = document.createElement("button");
    deleteSelectedBtn.setAttribute("id", "deleteSelectedmyTable" + counter);
    deleteSelectedBtn.setAttribute("class", "btn btn-danger btn-sm delete-selected");
    deleteSelectedBtn.setAttribute("style", "display: none;");
    deleteSelectedBtn.innerHTML = "Remove";

    var myBreak = document.createAttribute("br");

    document.getElementById("panel " + counter).appendChild(deleteSelectedBtn);
}

// Add Buttons to the Dropdown List
function addButton() {
    var itemBtn = document.createElement("button");
    var itemText = "New Item";
    var btnText = document.createTextNode(itemText);
    itemBtn.appendChild(btnText);
    itemBtn.setAttribute("class", "btn btn-primary btn-sm add");
    itemBtn.setAttribute("id", "showForm" + counter);

    var editListBtn = document.createElement("button");
    var textNode = document.createTextNode("Edit");
    editListBtn.appendChild(textNode);
    editListBtn.setAttribute("class", "btn btn-primary btn-sm browse");
    editListBtn.setAttribute("id", "browseItem " + counter);
    editListBtn.setAttribute("data-toggle", "modal");
    editListBtn.setAttribute("data-target", "#editListModal");

    var addItemBtn = document.createElement("button");
    var itemBtnNode = document.createTextNode("Add Item");
    addItemBtn.appendChild(itemBtnNode);
    addItemBtn.setAttribute("class", "btn btn-success btn-sm add-Item");
    addItemBtn.setAttribute("id", "addItem " + counter);
    addItemBtn.setAttribute("onClick", "newItemClick(this.id)");
    addItemBtn.setAttribute("style", "display:none;");

    document.getElementById("panel " + counter).appendChild(itemBtn);
    document.getElementById("panel " + counter).appendChild(editListBtn);
    document.getElementById("panel " + counter).appendChild(addItemBtn);
}

// Create Table Tags
function createTable() {
    var divTable = document.createElement("div");
    divTable.setAttribute("class", "table-responsive");

    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table table-borderless");
    tableTag.setAttribute("id", "myTable" + counter);
    tableTag.setAttribute("width", "400");

    var tableHeader = document.createElement("thead");

    var tableHeadRow = document.createElement("tr");

    var emptyCol1 = document.createElement("th");
    emptyCol1.setAttribute("width", "5%");
    var emptyCol2 = document.createElement("th");
    emptyCol2.setAttribute("width", "5%");

    var productCol = document.createElement("th");
    productCol.setAttribute("class", "product header");
    productCol.setAttribute("width", "50%");
    productCol.innerHTML = "Product";

    var qtyCol = document.createElement("th");
    qtyCol.setAttribute("width", "30%")
    qtyCol.setAttribute("class", "qty header");
    qtyCol.innerHTML = "Qty";

    tableHeadRow.appendChild(emptyCol1);
    tableHeadRow.appendChild(productCol);
    tableHeadRow.appendChild(qtyCol);
    tableHeadRow.appendChild(emptyCol2);
    tableHeader.appendChild(tableHeadRow);

    tableTag.appendChild(tableHeader);

    var tableBody = document.createElement("tbody");
    tableBody.setAttribute("id", "tableBody" + counter);

    tableTag.appendChild(tableBody);

    divTable.appendChild(tableTag);
    document.getElementById("panel " + counter).appendChild(divTable);
}

// Create Input Field Text to add an Item
function itemInput() {
    var toggleDiv = document.createElement("div");
    toggleDiv.setAttribute("id", "input-toggle");
    toggleDiv.setAttribute("style", "display:none;");

    var formTag = document.createElement("form");

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

    formDiv.appendChild(labelTag);
    formDiv.appendChild(inputTag);

    labelTag = document.createElement("label")
    labelTag.setAttribute("class", "control-label");
    labelTag.setAttribute("for", "item-qty " + counter);

    labelText = "Quantity:";
    labelTextNode = document.createTextNode(labelText);
    labelTag.appendChild(labelTextNode);

    var inputTag = document.createElement("input");
    inputTag.setAttribute("type", "text");
    inputTag.setAttribute("class", "form-control panelInput");
    inputTag.setAttribute("id", "item-qty " + counter);

    formDiv.appendChild(labelTag);
    formDiv.appendChild(inputTag);

    var amountType = document.createElement("select");
    amountType.setAttribute("class", "form-control");
    amountType.setAttribute("id", "qty-type" + counter);

    var unitLabel = document.createElement("label");
    unitLabel.setAttribute("class", "control-label");
    unitLabel.setAttribute("for", "item-qty " + counter);

    labelTextNode = document.createTextNode("Unit:");
    unitLabel.appendChild(labelTextNode);

    var option1 = document.createElement("option");
    option1.setAttribute("value", "pcs");
    option1.innerHTML = "pcs";

    var option2 = document.createElement("option");
    option2.setAttribute("value", "bags");
    option2.innerHTML = "bags";

    var option3 = document.createElement("option");
    option3.setAttribute("value", "kg");
    option3.innerHTML = "kg";

    var option4 = document.createElement("option");
    option4.setAttribute("value", "lbs");
    option4.innerHTML = "lbs";

    var option5 = document.createElement("option");
    option5.setAttribute("value", "mL");
    option5.innerHTML = "mL";

    var option6 = document.createElement("option");
    option6.setAttribute("value", "oz");
    option6.innerHTML = "oz";

    amountType.appendChild(option1);
    amountType.appendChild(option2);
    amountType.appendChild(option3);
    amountType.appendChild(option4);
    amountType.appendChild(option5);
    amountType.appendChild(option6);

    formDiv.appendChild(unitLabel);
    formDiv.appendChild(amountType);

    formTag.appendChild(formDiv);
    toggleDiv.appendChild(formTag);
    document.getElementById("panel " + counter).appendChild(toggleDiv);
}

// Removes list from the current shopping lists
function removeList() {
    document.getElementById("edit-close-list").click();
    document.getElementById("list-header" + currentPanelButton).remove();
    document.getElementById("panel " + currentPanelButton).remove();
    document.getElementById("break" + currentPanelButton).remove();
}

// Changes the shopping list name
function editShoppingList() {
    document.getElementById("edit-close-list").click();

    var newListName = document.getElementById("modal-listName").value;

    document.getElementById("list-header" + currentPanelButton).innerHTML = newListName;
}

// The current pannel of the button
currentPanelButton = 0

// Get's the current List and set's the currentPanelButton variable
$(document).ready(function() {
    $(document).on('click', '.browse', function() {
        var btnID = $(this).attr("id");
        console.log(btnID);

        var splitID = btnID.split(" ");
        currentPanelButton = splitID[1];

        var currentListName = document.getElementById("list-header" + currentPanelButton).innerHTML;

        occupyEditListModal(currentListName);
    });
});

// Occupies the input in the edit list modal
function occupyEditListModal(listName) {
    document.getElementById("modal-listName").value = listName;
}

// Add's item to the current Shopping List
function newItemClick(clicked_id) {
    var buttonId = clicked_id;
    var buttonSplit = buttonId.split(" ");
    var buttonNum = buttonSplit[1];

    var inputText = document.getElementById("item-name " + buttonNum).value;

    var qtyValue = document.getElementById("item-qty " + buttonNum).value;

    var e = document.getElementById("qty-type" + buttonNum);
    var qtyUnit = e.options[e.selectedIndex].text;

    var inputValue = inputText;
    var qtyInputValue = qtyValue + " " + qtyUnit;
    console.log(inputText);

    if (inputValue == "" && qtyValue == "") {
        // alert("Product Cannot be Empty");
    } else {
        var tableRow = document.createElement("tr");

        var tableCheckBox = document.createElement("td");
        tableCheckBox.setAttribute("width", "5%");

        var labelCheckBox = document.createElement("label");
        labelCheckBox.setAttribute("class", "containerCheckBox");

        var inputCheckBox = document.createElement("input");
        inputCheckBox.setAttribute("type", "checkbox");
        inputCheckBox.setAttribute("class", "checkBox");

        var spanCheckBox = document.createElement("span");
        spanCheckBox.setAttribute("class", "checkmark");
        spanCheckBox.setAttribute("id", "myCheckBox");

        labelCheckBox.appendChild(inputCheckBox);
        labelCheckBox.appendChild(spanCheckBox);
        tableCheckBox.appendChild(labelCheckBox);

        tableRow.appendChild(tableCheckBox);

        var tableData = document.createElement("td")
        tableData.setAttribute("width", "50%");
        tableData.setAttribute("class", "listItem");
        var text = inputValue;
        var tableHeadTextNode = document.createTextNode(text);
        tableData.appendChild(tableHeadTextNode);

        var tableQty = document.createElement("td")
        tableQty.setAttribute("width", "30%");
        tableQty.setAttribute("class", "itemQty");
        var textQty = qtyInputValue;
        var tableQtyTextNode = document.createTextNode(textQty);
        tableQty.appendChild(tableQtyTextNode);

        var tableEdit = document.createElement("td");
        tableEdit.setAttribute("width", "5%");

        var editButton = document.createElement("input");
        editButton.setAttribute("type", "image");
        editButton.setAttribute("src", "img\\icons\\pencil.png");
        editButton.setAttribute("id", "editButton");
        editButton.setAttribute("data-toggle", "modal");
        editButton.setAttribute("data-target", "#editModal");

        tableEdit.appendChild(editButton);

        tableRow.appendChild(tableData);

        tableRow.appendChild(tableQty);

        tableRow.appendChild(tableEdit);

        document.getElementById("tableBody" + buttonNum).appendChild(tableRow);

        document.getElementById("item-name " + buttonNum).value = "";
        document.getElementById("item-qty " + buttonNum).value = "";
    }
}

// Boolean variable to see if checkboxes are clicked
var isChecked = false;

// Checks if any of the checkboxes are clicked
function checkIfClicked() {
    console.log("Current Table: " + currentTable);

    var checkBox = document.getElementsByClassName("checkmark");
    var i;
    for (i = 0; i < checkBox.length; i++){
        if (checkBox[i].classList.contains("checked")){
            isChecked = true;
            break;
        } else {
            isChecked = false;
        }
    }
    console.log("Is Checked: " + isChecked);
    if (isChecked) {
        document.getElementById("deleteSelected" + currentTable).setAttribute("style", "");
    } else {
        document.getElementById("deleteSelected" + currentTable).setAttribute("style", "display: none;");
    }
}

// Deletes checked rows in the current table
// BUG DETECTED : Not all checkboxed items are removed
$(document).ready(function() {
    $(document).on('click', '.delete-selected', function() {
        var table = document.getElementById(currentTable);
        for (var i = 1, row; row = table.rows[i]; i++){
            if (row.cells[0].getElementsByTagName("label")[0].getElementsByTagName("span")[0].classList.contains("checked")) {
                row.remove();
            }
        }
        document.getElementById("deleteSelected" + currentTable).setAttribute("style", "display: none;");
    });
});

// Toggles the class of the checkbox
$(document).ready(function() {
    $(document).on('click', '#myCheckBox', function() {
        console.log("test");
        $(this).toggleClass("checked");
        $(this).parent().parent().click();
        checkIfClicked();
    });
});

// Occupies the modal box inputs with the data in the table row
function occupyInput() {
    console.log("Current Row: " + currentRow);
    console.log("Current Toggle " + currentToggle);

    var productName = document.getElementById(currentTable).rows[currentRow].cells[1].innerHTML;
    var prodQty = document.getElementById(currentTable).rows[currentRow].cells[2].innerHTML;

    var mySplit = prodQty.split(" ");

    var quantity = mySplit[0];
    var unit = mySplit[1];

    console.log("Unit: " + unit);

    document.getElementById("modal-prod").value = productName;

    document.getElementById("modal-qty").value = quantity;

    var modalSelect = document.getElementById("modal-select").value = unit;
}

// Gets the values inside the modal input text
function editTableRow() {
    document.getElementById("edit-close").click();

    var productName = document.getElementById("modal-prod").value;

    var productQty = document.getElementById("modal-qty").value;

    var e = document.getElementById("modal-select");
    var qtyUnit = e.options[e.selectedIndex].text;

    changeRowValue(productName, productQty, qtyUnit);
}

// Changes the details of the item of the table row
function changeRowValue(name, quantity, unit) {
    document.getElementById(currentTable).rows[currentRow].cells[1].innerHTML = name;
    document.getElementById(currentTable).rows[currentRow].cells[2].innerHTML = quantity + " " + unit;
}

// The current row of the selected table
var currentRow = 0;

// The current table's ID
var currentTable = 0;

// Get the row of the table on edit click
$(document).ready(function() {
    $(document).on('click', 'td', function() {
        var row = $(this).parent().parent().children().index($(this).parent());
        currentTable = $(this).parent().parent().parent().attr("id");
        console.log(currentTable);
        currentRow = row + 1;
    });
});

// Clicks the parent TD element
$(document).ready(function() {
    $(document).on('click', '#editButton', function() {
        $(this).parent().click();
        occupyInput();
    });
});

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
        currentToggle = panelNum;
        panelClick();
    });
});

// Clicks' button when pressed enter on input
function panelClick() {
    var input = document.getElementById("item-qty " + currentToggle);
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("addItem " + currentToggle).click();
        }
    });
}

// Toggles display of the add item section in each Shopping List
$(document).ready(function() {
    $(document).on('click', '.add', function() {
        var buttonNode = document.getElementById(this.id);
        var buttonText = buttonNode.innerHTML;
        var nextButton = $(this).next(".browse");
        var addButton = nextButton.next(".add-Item");
        addButton.hide();
        if (buttonText === "New Item") {
            var textNode = document.createTextNode("Done");
            buttonNode.replaceChild(textNode, buttonNode.childNodes[0]);
            $(this).css("margin-top", "0px");
            nextButton.css("margin-top", "0px");
            nextButton.hide();

            addButton.show();
            addButton.css("margin-top", "0px");
        } else {
            var textNode = document.createTextNode("New Item");
            buttonNode.replaceChild(textNode, buttonNode.childNodes[0]);
            $(this).css("margin-top", "20px");
            nextButton.show();
            $(this).next(".browse").css("margin-top", "20px");
            addButton.hide();
            addButton.css("margin-top", "20px");
        }
        $(this).prev("#input-toggle").slideToggle("slow");
    });
});
