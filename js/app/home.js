$(window).on('load',function() {
	$(".flexslider").flexslider({
		directionNav: false,
		animation: 'slide',
		start: function() {
			$('body').addClass('loaded');
			$(".footer").css('visibility','visible');
			/*图片懒加载*/
			$(".flexslider").find('img').each(function() {
				var $self = $(this),
					url = $self.data('src');
				if(url) {
					this.src= url;
				}
			});
		}
	});
});