var $container = $('.portfolio-items');
$container.isotope({
    filter: '*',
    masonry: {
        gutter: 20
    }
});

$('.filter a').click(function(){
	$('.filter .active').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$container.isotope({
		filter: selector,
		animationOptions: {
			duration: 500,
			animationEngine : "jquery"
		}
	});
	return false;
}); 