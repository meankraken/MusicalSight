$(document).ready(function() {
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= 200) {
			$('#menu').fadeOut();
		}
		if (scrollTop <= 200) {
			$('#menu').fadeIn();
		}
		
	});
	

});