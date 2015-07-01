$(function() {
	$('.sidemenu-container').on('click','.close',function() {
		$(this).parents('.sidemenu-content-wrapper').hide();
	})
	.on('click','.sidemenu-contact',function() {
		var $container = $(this).parents('.sidemenu-item'),
			$content = $container.find('.sidemenu-content-wrapper');

		$content.show();
	});
});