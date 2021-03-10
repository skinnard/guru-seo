const closeBtn = document.querySelector(".close-btn");
const ctaBtn = document.getElementById("cta-btn");
const contactModalWrapper = document.getElementById("contact-modal");
const contactModal = document.getElementById("contact-modal-inner");
const heroBtn = document.getElementById("hero-btn");

ctaBtn.addEventListener("click", function (e) {
	e.preventDefault();
	contactModalWrapper.classList.remove("hidden");
    console.log(contactModalWrapper.length);
});

heroBtn.addEventListener("click", function (e) {
	e.preventDefault();
	contactModalWrapper.classList.remove("hidden");
});

closeBtn.addEventListener("click", function (e) {
	contactModalWrapper.classList.add("hidden");
});

contactModalWrapper.addEventListener("click", function (event) {
	var isClickInside = contactModal.contains(event.target);
	if (!isClickInside) {
        contactModalWrapper.classList.add("hidden");
	} 
});
