$('.search13-tab').on('click', function (ev) {
	$('.search13-tab').removeClass('active13-tab');
	$(ev.target).addClass('active13-tab');
});

$('.type-flight > *').on('click', function (ev) {
	$('.type-flight > *').removeClass('active-type-flight');
	$(ev.target).addClass('active-type-flight');
});



$('.total-travellers').on('click', function (ev) {
	$('.total-travellers-option').toggleClass('display-none');

	$('.total-travellers-option').on('click', (ev) => {
		ev.stopPropagation();
	});
});

$('.trip-type-container').on('click', function (ev) {
	$('.trip-type-options').fadeToggle(0);
});


$('.addtional-options').on('click', function (ev) {
	$('.addtional-options-container').toggleClass('display-none');
	$('.addtional-options-container').on('click', (ev) => {
		ev.stopPropagation();
	});
});

$('.hotel-travellers').on('click', function (ev) {
	$('.hotel-travellers-options').fadeToggle(0);
	$('.hotel-travellers-options').on('click', (ev) => {
		ev.stopPropagation();
	});
});

$('.flight-tab').on('click', function () {
	$('.search').css('backgroundImage', 'url(./img/bg-search.png)');
});

$('.cruise-tab').on('click', function () {
	$('.search').css('backgroundImage', 'url(./img/bg-advantage.png)');
});

$('.hotel-tab').on('click', function () {
	$('.search').css('backgroundImage', 'url(./img/bg-hotel.png)');
});

$('.search-tab').on('click', function (ev) {
	$('.search-tab').removeClass('active-tab');
	$(ev.target).addClass('active-tab');
});