$(function () {

	$(".rateYo").rateYo({
		rating: 4.5,
		readOnly: true,
	});

	$('.faq__acc-link').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('faq__acc-link--active');
		$(this).children('.faq__acc-text').slideToggle();
	});

	$('.feedback__slide').slick({
		arrows: false,
		slidesToShow: 2,
		dots: true,
		infinity: true,
		draggable: false,
		appendDots: $('.feedback__dots'),
		responsive:
			[
				{
					breakpoint: 980,
					settings: {
						slidesToShow: 1,
						draggable: true,
					},
				},
			],
	});
	$('.feedback__prev').on('click', function (e) {
		e.preventDefault();
		$('.feedback__slide').slick('slickPrev');
	});
	$('.feedback__next').on('click', function (e) {
		e.preventDefault();
		$('.feedback__slide').slick('slickNext');
	});

	setInterval(() => {
		if ($(window).scrollTop() > 0 && $('.header__hat').hasClass('header__hat--open') === false) {
			$('.burger').addClass('burger--follow')
		} else {
			$('.burger').removeClass('burger--follow')
		}

		if ($('.header__hat').hasClass('header__hat--open')) {
			$('.burger').addClass('burger--open')
		}
		else {
			$('.burger').removeClass('burger--open')
		}
	}, 0);

	$('.burger, .overlay, .header__hat a').on('click', function (e) {
		e.preventDefault()
		$('.header__hat').toggleClass('header__hat--open')
		$('.overlay').toggleClass('overlay--show')
	})

});

setTimeout(function () {
	$('body').addClass('body_visible');
}, 100);

const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault()
		const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
		document.querySelector(goto).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}