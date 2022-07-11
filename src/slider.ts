export function carousel() {
	const container = document.querySelector("[data-container]") as HTMLElement;
	const slides = Array.from(document.querySelectorAll("[data-slide]"));
	const dotContainer = document.querySelector("[data-dots]")!;

	let isDragging = false,
		startPos = 0,
		currentTranslate = 0,
		prevTranslate = 0,
		animationID: any,
		currentIndex = 0;

	slides.forEach((slide, index) => {
		slide.addEventListener("touchstart", touchStart(index));
		slide.addEventListener("touchend", touchEnd);
		slide.addEventListener("touchmove", touchMove);
	});

	window.oncontextmenu = function (e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	};

	function touchStart(index: number) {
		return function (e: Event) {
			currentIndex = index;
			startPos = getPositionX(e);
			isDragging = true;

			animationID = requestAnimationFrame(animation);
		};
	}

	function touchEnd() {
		cancelAnimationFrame(animationID);
		isDragging = false;
		const movedBy = currentTranslate - prevTranslate;

		if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;

		if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

		setPositionByIndex();
	}

	function touchMove(e: Event) {
		if (isDragging) {
			const currentPosition = getPositionX(e);
			currentTranslate = prevTranslate + currentPosition - startPos;
		}
	}

	function setPositionByIndex() {
		currentTranslate = currentIndex * -window.innerWidth;
		prevTranslate = currentTranslate;
		setSliderPosition();
		activateDot(currentIndex);
	}

	function getPositionX(e: any) {
		return e.touches[0].clientX;
	}

	function animation() {
		setSliderPosition();
		if (isDragging) requestAnimationFrame(animation);
	}

	function setSliderPosition() {
		container.style.transform = `translateX(${currentTranslate}px)`;
	}

	const createDots = function () {
		slides.forEach(function (_, i) {
			dotContainer.insertAdjacentHTML(
				"beforeend",
				`<button class="dots__dot" data-slide="${i}"></button>`
			);
		});
	};
	createDots();

	const activateDot = function (slide: number) {
		document
			.querySelectorAll(".dots__dot")
			.forEach((dot) => dot.classList.remove("dots__dot--active"));

		document
			.querySelector(`.dots__dot[data-slide="${slide}"]`)!
			.classList.add("dots__dot--active");
	};
	activateDot(0);
}
