function form() {
	const form = document.querySelector("[data-form]") as HTMLFormElement;
	const email = document.querySelector("[data-mail]") as HTMLInputElement;

	form.addEventListener("submit", (e) => {
		if (!email.checkValidity()) {
			e.preventDefault();
			email.setCustomValidity("請輸入電郵位址");
			email.reportValidity();
		}
	});

	email.addEventListener("input", (e) => {
		if (email.validity.typeMismatch) {
			email.setCustomValidity("需為有效的電郵位址");
			email.reportValidity();
		} else {
			email.setCustomValidity("");
		}
	});
}

export default form;
