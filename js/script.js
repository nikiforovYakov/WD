"use strict"
const iconBurger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
if (iconBurger) {
	iconBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//=================
let myProjectSlider = new Swiper('.project-slider',{
	slidesPerView:'auto',
	watchOverflow: true,
	spaceBetween: 45,
});
//======================
let myWorksSlider = new Swiper('.works-slider',{
	slidesPerView:'auto',
	watchOverflow: true,
	slidesPerColumn: 1,
	autoHeight: false,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	speed: 800,
});
//==============================
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset

			if (iconBurger.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconBurger.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

