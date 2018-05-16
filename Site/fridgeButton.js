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
	$(document).on("click", "a.remove" , function() {
		/*window.alert($(this).parent().contents().filter(function(){
			return this.nodeType !== 1;
		}).text());*/
		$("figcaption:contains("+$(this).parent().contents().filter(function(){
			return this.nodeType !== 1;
		}).text()+")").parent().toggleClass("faded");
        $(this).parent().remove();
    });
});