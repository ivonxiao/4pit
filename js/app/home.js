$(window).on('load',function() {
	$(".flexslider").flexslider({
		directionNav: false,
		animation: 'slide',
		start: function() {
			$('body').addClass('loaded');
			$(".home-news-wrapper,.footer").css('visibility','visible');
		}
	});
});

$(function() {
	/*
	滚动新闻
	 */
	$(".home-news-list").flexslider({
		selector: '.home-news-list-slides li',
		direction: 'vertical',
		animation: 'slide',
		directionNav: false,
		controlNav: false,
		customDirectionNav: '.news-pager-nav'
	});
	

	$('.news-pager-nav').on('click','.caret-previous',function() {
		$('.home-news-list').flexslider("previous");
	})
	.on('click','.caret-next',function() {
		$('.home-news-list').flexslider("next");
	});
});