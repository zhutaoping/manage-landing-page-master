function slider() {
	const slides = document.querySelectorAll(
		"[data-slide]"
	) as NodeListOf<HTMLElement>;
	const btnPrev = document.querySelector("[data-btn-prev]")!;
	const btnNext = document.querySelector("[data-btn-next]")!;
	const dotContainer = document.querySelector("[data-dots]")!;

	const mediaQuery = window.matchMedia("(max-width: 399px)");

	let curSlide = 0;
	const maxSlide = slides.length;

	const createDots = function () {
		slides.forEach(function (_, i) {
			dotContainer.insertAdjacentHTML(
				"beforeend",
				`<button class="dots__dot" data-slide="${i}"></button>`
			);
		});
	};

	const activateDot = function (slide: number) {
		document
			.querySelectorAll(".dots__dot")
			.forEach((dot) => dot.classList.remove("dots__dot--active"));

		document
			.querySelector(`.dots__dot[data-slide="${slide}"]`)!
			.classList.add("dots__dot--active");
	};

	const goToSlide = function (slide: number) {
		slides.forEach(
			(s, i) => (s.style.transform = `translateX(${120 * (i - slide)}%)`)
		);
	};

	// Next slide
	const nextSlide = function () {
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}
		goToSlide(curSlide);
		activateDot(curSlide);
	};

	const prevSlide = function () {
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
		activateDot(curSlide);
	};

	const init = function () {
		createDots();
		goToSlide(0);
		activateDot(0);
	};
	if (mediaQuery.matches) init();

	btnPrev.addEventListener("click", prevSlide);
	btnNext.addEventListener("click", nextSlide);
}
export default slider;
