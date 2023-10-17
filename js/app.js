window.addEventListener('DOMContentLoaded', () => {		// Modal window/hamburger
	const menu = document.querySelector('.menu'),
		hamburger = document.querySelector('.hamburger'),
		overlay = document.querySelector('.overlay'),
		overlay2 = document.querySelector('.overlay2'),
		menuItem = document.querySelectorAll('.menu_item'),
		contactBtn = document.querySelector('.grid-element6__button'),
		modal = document.querySelector('.modal'),
		modalClose = document.querySelector('.modal__close'),
		linkMe = document.querySelector('.link-me span');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
		overlay.classList.toggle('overlay_active');
	});

	overlay.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
		overlay.classList.toggle('overlay_active');
	})

	contactBtn.addEventListener('click', () => {
		modal.classList.toggle('modal_active');
		overlay2.classList.toggle('overlay2_active');
	})

	linkMe.addEventListener('click', () => {
		modal.classList.toggle('modal_active');
		overlay2.classList.toggle('overlay2_active');
	})

	modalClose.addEventListener('click', () => {
		modal.classList.toggle('modal_active');
		overlay2.classList.toggle('overlay2_active');
	})

	overlay2.addEventListener('click', () => {
		modal.classList.toggle('modal_active');
		overlay2.classList.toggle('overlay2_active');
	})

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
			overlay.classList.toggle('overlay_active');
		})
	})
})
// Меняющийся текст
function nextMsg(i) {
	if (messages.length == i) {
		i = 0;
	}
	$('#message').html(messages[i]).fadeIn(500).delay(1000).fadeOut(500, function () {
		nextMsg(i + 1);
	});
};

var messages = [
	"Web-developer",
	"Freelancer",
	"Designer",
];

$('#message').hide();

nextMsg(0);
new WOW().init();