$(document).ready(function () {
    $(".itemButton").click(function() {
        $(this).parent().toggleClass("faded");

        if(!($(this).parent().hasClass("faded"))){
            $("#ingredientsUL").append('<li id=' + $(this).next("figcaption").html() + '>' + $(this).next("figcaption").html() +'</li>');
        }
        else{
            $('#ingredientsUL #'+$(this).next("figcaption").html()).remove();
        }
    });
});