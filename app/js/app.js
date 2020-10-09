'use strict'

document.addEventListener('DOMContentLoaded', () => {

	// slider
	const slider = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		spaceBetween: 150,
		slidesPerView: 1,
		breakpoints: {
			1201: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 150,
			},
		},
	})
	// slider ends

	// menu
	const btnBurger = document.querySelector('.header__burger'),
		headerWrapper = document.querySelector('.header__wrapper'),
		menuLiParents = document.querySelectorAll('.menu__li--parent')

	const overlay = document.createElement('div')
	overlay.classList.add('overlay')
	document.body.insertAdjacentElement('beforeend', overlay)

	const toggleMenu = () => {
		btnBurger.classList.toggle('header__burger--close')
		headerWrapper.classList.toggle('header__wrapper--open')
		overlay.classList.toggle('overlay--active')
	}

	menuLiParents.forEach(li => li.addEventListener('click', (e) => li.classList.toggle('menu__li--active')))

	btnBurger.addEventListener('click', toggleMenu)
	overlay.addEventListener('click', toggleMenu)

// menu ends
})
