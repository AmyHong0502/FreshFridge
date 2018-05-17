$(document).ready(function () {
	
	//Preset item button
	$(".itemButton").click(function() {
		$(this).parent().toggleClass("faded");
		
		if(!($(this).parent().hasClass("faded"))){
			$("#ingredientsUL").append('<li id=' + $(this).next("figcaption").text() + ' class="ingredientLi">' + $(this).next("figcaption").text() +' <a class="remove">&times;</a></li>'); 
		}
		else{
			$('#ingredientsUL li:contains('+$(this).next("figcaption").text()+')').remove();
		}
	});
	
	//Close button
	$(document).on("click", "a.remove", function() {
		var selectedItem = $(this).parent().contents().filter(textFilter).text();
		var presetFigure = $("figcaption:contains("+selectedItem+")").parent();
		//var str = JSON.stringify(presetFigure, null, 4);
		//window.alert(str);
		presetFigure.toggleClass("faded");
        $(this).parent().remove();
    });
	
	function textFilter() {
		return this.nodeType !== 1;
	}
	
});