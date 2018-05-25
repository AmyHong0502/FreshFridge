$(document).ready(function () {
    $(".itemButton").click(function() {
        $(this).parent().toggleClass("faded");

        if(!($(this).parent().hasClass("faded"))){
            $("#ingredientsUL").append('<li id=' + $(this).next("figcaption").text() + ' class="ingredientLi">' + $(this).next("figcaption").text() +'</li>');
        }
        else{
            $('#ingredientsUL li:contains('+$(this).next("figcaption").text()+')').remove();
        }
    });
});
