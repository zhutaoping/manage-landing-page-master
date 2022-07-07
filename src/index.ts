import "./scss/main.scss";

const email = document.querySelector("[data-mail]") as HTMLInputElement;

email.addEventListener("input", (e) => {
	if (email.validity.typeMismatch) {
		email.setCustomValidity("請輸入有效的電郵位址!");
		email.reportValidity();
	} else {
		email.setCustomValidity("");
	}
});
