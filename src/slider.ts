function slider() {
	const btns = document.querySelectorAll(
		"[data-carousel-btn]"
	) as NodeListOf<HTMLElement>;

	btns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;
			const slides = btn
				.closest("[data-carousel]")! // Up the DOM
				.querySelector("[data-slides]"); // Down the DOM

			const activeSlide = slides!.querySelector("[data-active]") as HTMLElement;
			let newIndex = [...slides!.children].indexOf(activeSlide!) + offset;
			if (newIndex < 0) newIndex = slides!.children.length - 1;
			if (newIndex >= slides!.children.length) newIndex = 0;
			//@ts-ignore
			slides!.children[newIndex].dataset.active = true;
			delete activeSlide.dataset.active;
		});
	});
}

export default slider;
