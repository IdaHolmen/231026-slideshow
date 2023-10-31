document.addEventListener("DOMContentLoaded", function() {

	const slides = document.querySelectorAll(".slideshow__image");
	const dots = document.querySelectorAll(".dot");
	let currentSlide = 0;

	const showSlide = (index) => {
		slides.forEach((slide) => slide.style.display = "none");
		dots.forEach((dot) => dot.classList.remove("active"));
		slides[index].style.display = "block";
		dots[index].classList.add("active");
	}

	const nextSlide = () => {
		currentSlide = (currentSlide + 1) % slides.length;
		showSlide(currentSlide);
	}

	const previousSlide = () => {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		showSlide(currentSlide);
	}

	const setDotClickHandlers = () => {
		dots.forEach((dot, index) => {
			dot.addEventListener("click", () => {
				currentSlide = index;
				showSlide(currentSlide);
			});
		});
	}

	document.querySelector(".previous").addEventListener("click", previousSlide);
	document.querySelector(".next").addEventListener("click", nextSlide);

	showSlide(currentSlide);
	setDotClickHandlers();
});