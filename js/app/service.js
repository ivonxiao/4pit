$(function() {
	$(".flexslider").flexslider({
		directionNav: false,
		animation: 'slide'
	});

	var showHeaderNavAlways = function () {
		var scrollTop = $(window).scrollTop(),
			$nav = $('.header-nav');

		if(scrollTop > 90) {
			$nav.addClass('top-hover');
		}
		else {
			$nav.removeClass('top-hover');
		}
		
	};
	//$(window).on('scroll',showHeaderNavAlways);
});