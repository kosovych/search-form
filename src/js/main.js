$('.search13-tab').on('click', function (ev) {
	$('.search13-tab').removeClass('active13-tab');
	$(ev.target).addClass('active13-tab');
});

$('.type-flight > *').on('click', function (ev) {
	$('.type-flight > *').removeClass('active-type-flight');
	$(ev.target).addClass('active-type-flight');
});