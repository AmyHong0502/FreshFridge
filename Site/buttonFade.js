$(document).ready(function () {
	$(".itemButton").click(function() {
		$(this).parent().toggleClass("faded");
	});
});