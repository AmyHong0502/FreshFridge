$(document).ready(function () {
	$(".itemButton").click(function() {
		$(this).parent().toggleClass("faded");
		
		if(!($(this).parent().hasClass("faded"))){
			$("#ingredientsUL").append('<li id=' + $(this).next("figcaption").html() + ' class="ingredientLi">' + $(this).next("figcaption").html() +' <a class="remove">&times;</a></li>'); 
		}
		else{
			$('#ingredientsUL #'+$(this).next("figcaption").html()).remove();
		}
	});
	$(document).on("click", "a.remove" , function() {
		$("figcaption:contains("+$(this).parent().text()+")").parent().toggleClass("faded");
        $(this).parent().remove();
    });
});