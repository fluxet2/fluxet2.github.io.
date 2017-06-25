var link = document.querySelector(".location-btn");
var popup = document.querySelector(".modal-form");
var close = document.querySelector(".modal-form .close-btn");
var firstName = popup.querySelector("[name=first-name]");
var email = popup.querySelector("[name=email]");
var comments = popup.querySelector("textarea");
var submitError = popup.querySelector("[type=submit]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-form-show");
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-form-show");
});
submitError.addEventListener("click", function (evt) {
	if (!firstName.value) {
		evt.preventDefault();
		firstName.classList.add("form-error");
	} else {
		firstName.classList.remove("form-error");
	};
	if (!email.value) {
		evt.preventDefault();
		email.classList.add("form-error");
	} else {
		email.classList.remove("form-error");
	};
	if (!comments.value) {
		evt.preventDefault();
		comments.classList.add("form-error");
	} else {
		comments.classList.remove("form-error");
	}
});









