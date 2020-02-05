$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.header').toggleClass('active');
	});
});

$(document).ready(function() {
	$('.second__burger').click(function(event) {
		$('.second__burger,.second__menu,.second').toggleClass('active');
	});
});

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.market,.right,.for-market-and-right').toggleClass('active');
	});
});

$(document).ready(function() {
	$('.background').click(function(event) {
		$('.input__input').toggleClass('focus');
	});
});