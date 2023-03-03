'use strict';

const ms = 4000;
let titles = [
	'Каркасно-штамповочное производство',
	'Производство печатных плат',
	'Механообрабатывающее производство',
	'Сборочно-монтажное производство',
	'Производство лакокрасочных покрытий',
	'Литье алюминия',
	'Литье изделий из пластмасс',
];
let numberOfImages = titles.length;
let currentImage = 0;
let lastImage = currentImage;

let prod = document.querySelector('.prod');

// загружаем картиночки
for (let i = 0; i < titles.length; i++) {
	let img = document.createElement('div');
	img.classList = 'img';
	img.setAttribute('val', i);
	// let attrib = 	`linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, 
	// 				rgba(85, 85, 102, 0.03) 70%, 
	// 				rgba(0, 0, 17, 0.8) 100%), 
	// 				url(img/pr/pr${i}.jpg)`;
	let attrib = 	`linear-gradient(to bottom,
					rgba(0, 0, 17, .6), 
					rgba(0, 0, 17, .6)), 
					url(img/pr/pr${i}.jpg)`;
	img.style.backgroundImage = attrib;
	document.querySelector('.crop').append(img);
}

// создаем массив из всех картинок
let images = prod.querySelectorAll('.img');

// создаем кружочки в circleContainer
for (let i = 0; i < numberOfImages; i++) {
	let circle = document.createElement('div');
	circle.classList = 'circle';
	circle.setAttribute('val', i);
	document.querySelector('.circleContainer').append(circle);
}

// создаем массив из всех кружочков
let circles = document.querySelectorAll('.circle');

// функция для замены картинки и описания
function setNewImage(number) {
	images[lastImage].style.opacity = null;
	images[number].style.opacity = 1;
	document.querySelector('.prod p').innerHTML = titles[number];
}

// функция для замены кружочка
function setCircle(number) {
	circles.forEach(item => item.innerHTML = '&#9675;');	
	circles[number].innerHTML = '&#9679;';
}

// функция, вычисляющая номер картинки и кружочка
function computeImg() {
	if (currentImage >= numberOfImages) currentImage = 0;
	setNewImage(currentImage);
	setCircle(currentImage);
	lastImage = currentImage;
	currentImage++;
}

// загружаем картинки изделий
let tiles = document.querySelectorAll('.tile');
for (let item of tiles) {
	let number = item.getAttribute('val');
	item.style.backgroundImage = 	`linear-gradient(to bottom, 
									rgba(0, 0, 17, .6), 
									rgba(0, 0, 17, .6)),
									url(img/items/${number}.jpg)`;
}

// ставим нулевую картинку и включаем интервал
computeImg();
let interval = setInterval(computeImg, ms);



document.addEventListener('mouseover', (event) => {
	let targetClass = event.target.classList;
	// if (targetClass == 'img' || targetClass == 'description' || targetClass == 'circle') {
	// 	clearInterval(interval);
	// }

	if (targetClass == 'cover') {
		event.target.style.color = 'white';
		event.target.style.backgroundColor = 'rgba(255, 255, 255, 0)';
	}
});

document.addEventListener('mouseout', (event) => {
	let targetClass = event.target.classList;
	// if (targetClass == 'img' || targetClass == 'description' || targetClass == 'circle') {
	// 	interval = setInterval(computeImg, ms);
	// }

	if (targetClass == 'cover') {
		event.target.style.color = null;
		event.target.style.backgroundColor = null;
	}
});

document.addEventListener('click', (event) => {
	if (event.target.classList == 'circle') {
		currentImage = event.target.getAttribute('val');
		computeImg();
		clearInterval(interval);
		interval = setInterval(computeImg, ms);
	}
});



