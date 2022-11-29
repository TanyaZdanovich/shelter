let body = document.querySelector('body');
let header = document.querySelector('.our-pets__header');
let menu = document.querySelector('.header__nav');
let menuBtn = document.querySelector('.header__btns');
let titleColor = document.querySelector('.logo__title');
let subtitleColor = document.querySelector('.logo__subtitle');
let menuItem = document.querySelectorAll('.list__item');
let btnColor = document.querySelectorAll('.line');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('open');
	menu.classList.toggle('open');
	body.classList.toggle('open');
    header.classList.toggle('open');
    titleColor.classList.toggle('open');
    subtitleColor.classList.toggle('open');
    btnColor.forEach(function(el){ el.classList.toggle('open')});
});

if (menuItem) {
	menuItem.forEach(menuItem => {
	   menuItem.addEventListener('click', function () {
		  menu.classList.remove('open');
		  menuBtn.classList.remove('open');
		  body.classList.remove('open');
          header.classList.remove('open');
          btnColor.forEach(function(el){ el.classList.remove('open')});
          titleColor.classList.remove('open');
          subtitleColor.classList.remove('open');
	   })
	})
};