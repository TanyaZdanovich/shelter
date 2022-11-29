let body = document.querySelector('body');
let menu = document.querySelector('.header__nav');
let menuBtn = document.querySelector('.header__btns');
let menuItem = document.querySelectorAll('.list__item');
let headerMobile = document.querySelector('.header__menu-mobile');
let logo = document.querySelector('.header__logo');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('open');
	menu.classList.toggle('open');
	body.classList.toggle('open');
	headerMobile.classList.toggle('open');
	logo.classList.toggle('open');
});

if (menuItem) {
	menuItem.forEach(menuItem => {
	   menuItem.addEventListener('click', function () {
		  menu.classList.remove('open');
		  menuBtn.classList.remove('open');
		  body.classList.remove('open');
		  headerMobile.classList.remove('open');
		  logo.classList.remove('open');
	   })
	})
};