function carousel() {
	const container = document.querySelector("[data-container]") as HTMLElement;
	const slides = Array.from(document.querySelectorAll("[data-slide]"));

	let isDragging = false,
		startPos = 0,
		currentTranslate = 0,
		prevTranslate = 0,
		animationID: any,
		currentIndex = 0;

	slides.forEach((slide, index) => {
		// const slideImage = slide.querySelector("img")!;
		// slideImage.addEventListener("dragstart", (e) => e.preventDefault());

		// Touch events
		slide.addEventListener("touchstart", touchStart(index));
		slide.addEventListener("touchend", touchEnd);
		slide.addEventListener("touchmove", touchMove);

		// Mouse events
		// slide.addEventListener("mousedown", touchStart(index));
		// slide.addEventListener("mouseup", touchEnd);
		// slide.addEventListener("mousemove", touchMove);
		// slide.addEventListener("mouseleave", touchEnd);
	});

	window.addEventListener("resize", setPositionByIndex);

	window.oncontextmenu = function (e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	};

	function touchStart(index: number) {
		return function (e: any) {
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

	function touchMove(e: any) {
		if (isDragging) {
			const currentPosition = getPositionX(e);
			currentTranslate = prevTranslate + currentPosition - startPos;
		}
	}

	function setPositionByIndex() {
		currentTranslate = currentIndex * -window.innerWidth;
		prevTranslate = currentTranslate;
		setSliderPosition();
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
}
export default carousel;
