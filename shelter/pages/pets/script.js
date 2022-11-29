let body = document.querySelector('body');
let headerMobile = document.querySelector('.header__menu-mobile');
let logo = document.querySelector('.header__logo');
let menu = document.querySelector('.header__nav');
let menuBtn = document.querySelector('.header__btns');
let titleColor = document.querySelector('.title-mobile');
let subtitleColor = document.querySelector('.subtitle-mobile');
let menuItem = document.querySelectorAll('.list__item');
let btnColor = document.querySelectorAll('.line');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('open');
	menu.classList.toggle('open');
	body.classList.toggle('open');
    titleColor.classList.toggle('open');
    subtitleColor.classList.toggle('open');
    btnColor.forEach(function(el){ el.classList.toggle('open')});
	headerMobile.classList.toggle('open');
	logo.classList.toggle('open');
});

if (menuItem) {
	menuItem.forEach(menuItem => {
	   menuItem.addEventListener('click', function () {
		  menu.classList.remove('open');
		  menuBtn.classList.remove('open');
		  body.classList.remove('open');
          btnColor.forEach(function(el){ el.classList.remove('open')});
          titleColor.classList.remove('open');
          subtitleColor.classList.remove('open');
		  headerMobile.classList.remove('open');
		  logo.classList.remove('open');
	   })
	})
};