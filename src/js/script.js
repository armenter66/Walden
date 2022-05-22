const slides = Array.from(document.querySelectorAll('.promo__slider__item'));
let slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
	showSlide((slideIndex += n));
}

function currentSlide(n) {
	showSlide((slideIndex = n));
}

function showSlide(n) {
    let i;
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.transform = '+100%';
	}
    slides[slideIndex - 1].style.display = 'block';
}

let autoSlide = setInterval(() => {

}, 500);
