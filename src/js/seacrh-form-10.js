$('.search-tab').on('click', function (ev) {
	$('.search-tab').removeClass('active-tab');
	$(ev.target).addClass('active-tab');
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