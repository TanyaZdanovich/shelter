let body = document.querySelector('body');
let header = document.querySelector('.main__header');
let menu = document.querySelector('.header__nav');
let menuBtn = document.querySelector('.header__btns');
let menuItem = document.querySelectorAll('.list__item');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('open');
	menu.classList.toggle('open');
	body.classList.toggle('open');
    header.classList.toggle('open');
});

if (menuItem) {
	menuItem.forEach(menuItem => {
	   menuItem.addEventListener('click', function () {
		  menu.classList.remove('open');
		  menuBtn.classList.remove('open');
		  body.classList.remove('open');
          header.classList.remove('open');
	   })
	})
};