function filterFunction() {
    let input, filter, ul, li, a;
    input = document.getElementById("fridgeFilter");
    filter = input.value.toUpperCase();
    let div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");

    for (let i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "block";
        } else {
            a[i].style.display = "none";
        }
    }
}

let x = 0;
let array = Array();

function add_element_to_array() {
    array[x] = document.getElementById("fridgeFilter").value;
    alert("Ingredient: " + array[x] + " has been added");
    x++;
    document.getElementById("fridgeFilter").value = "";
}

function display_array() {
    let e = "<hr/>";

    for (let y = 0; y < array.length; y++) {
        e += "Ingredient " + (y + 1) + " = " + array[y] + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}