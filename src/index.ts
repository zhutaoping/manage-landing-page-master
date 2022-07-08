import "./scss/main.scss";
import form from "./form";
import slider from "./slider";

form();
slider();

const checkbox = document.querySelector("[data-checkbox]") as HTMLInputElement;
const headerModal = document.querySelector("[data-header__modal]")!;
const headerMenu = document.querySelector("[data-header__menu]")!;
const menuItems = document.querySelectorAll("[data-menu-item]");
const overlay = document.querySelector("[data-overlay]")!;

function toggleModal() {
	overlay.classList.toggle("checked");
	headerModal.classList.toggle("checked");
	headerMenu.classList.toggle("checked");
	menuItems.forEach((item) => {
		item.classList.toggle("checked");
	});
}

checkbox.addEventListener("change", () => {
	toggleModal();
});

overlay.addEventListener("click", () => {
	toggleModal();
	checkbox.checked = false;
});

menuItems.forEach((item) => {
	item.addEventListener("click", () => {
		toggleModal();
		checkbox.checked = false;
	});
});
