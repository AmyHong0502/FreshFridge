// Create a new list item when clicking on the "Add" button
function newElement() {
  //Adds Manual choice to UL
  var li = document.createElement("li");
  li.setAttribute("class", "ingredientLi");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase());
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("ingredientsUL").appendChild(li);
	
	//Toggle preset on manual input
	var lowerInput = inputValue.toLowerCase();
	var presetItems = document.getElementsByTagName("figcaption");
	for(var i = 0; i < presetItems.length; i++){
		var lowerItem = presetItems[i].innerHTML.toLowerCase();
		if(lowerInput === lowerItem){
			//window.alert("Match");
			$("figure").children("figcaption:contains(" + presetItems[i].innerHTML + ")").parent().toggleClass('faded');
		}
	}
	
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Pressing Enter to Add Ingredient to List.
window.onload = function() {
    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btnadd").click();
    }
});
}

// Pressing X to clear Search Field
function clearField() {
    document.getElementById("myInput").value = "";
}

// Toggle Slide
$(document).ready(function(){
    $("#flip1").click(function(){
        $(this).toggleClass("bg-primary text-white");
        $("#panel1").slideToggle("slow");
        e.stopPropagation();
    });
});

$(document).ready(function(){
    $("#flip2").click(function(){
        $(this).toggleClass("bg-primary text-white");
        $("#panel2").slideToggle("slow");
        e.stopPropagation();
    });
});

$(document).ready(function(){
    $("#flip3").click(function(){
        $(this).toggleClass("bg-primary text-white");
        $("#panel3").slideToggle("slow");
        e.stopPropagation();
    });
});

$(document).ready(function(){
    $("#flip4").click(function(){
        $(this).toggleClass("bg-primary text-white");
        $("#panel4").slideToggle("slow");
        e.stopPropagation();
    });
});

$(document).ready(function(){
    $("#flip5").click(function(){
        $(this).toggleClass("bg-primary text-white");
        $("#panel5").slideToggle("slow");
        e.stopPropagation();
    });
});

$(document).ready(function(){
    $("#flip6").click(function(){
        $(this).toggleClass("bg-primary text-white");
        $("#panel6").slideToggle("slow");
        e.stopPropagation();
    });
});







