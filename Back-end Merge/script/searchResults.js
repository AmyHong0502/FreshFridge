function filterFunction() {
  
	var input, filter, ul, li, a, i;
	input = document.getElementById("fridgeFilter");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
  
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "block";
		} else {
			a[i].style.display = "none";
		}
		
	}
}

var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("fridgeFilter").value;
 alert("Ingredient: " + array[x] + " has been added");
 x++;
 document.getElementById("fridgeFilter").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Ingredient " + (y + 1) + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}