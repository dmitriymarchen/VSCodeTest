$(document).ready(function() {
	$(".d111").css("background", "purple");
	$(".d222").css("background", "darkblue");
	$(".d333").css("background", "darkgray");
	$(".d444").css("background", "green");
	$(".d555").css("background", "orange");
	$(".d111, .d222, .d333, .d444, .d555").hover(function () 
		{
			// over
			$(this).css("color", "white");
		}, function () {
			// out
			$(this).css("color", "black");
		}
	);
});