$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.menu,.container__header,.section__logo').toggleClass('active');
	});
});