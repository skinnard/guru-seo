const contactModalWrapper = document.getElementById("contact-modal");
const contactModal = document.getElementById("contact-modal-inner");
const closeBtn = document.querySelector(".close-btn");
const contactTrigger = document.querySelectorAll(".contact-trigger");
const triggerArray = [...contactTrigger];

// contactTrigger.addEventListener("click", function (e) {
// 	e.preventDefault();
//     console.log('clicked');
// 	// contactModalWrapper.classList.remove("hidden");
// });

triggerArray.forEach((trigger) => {
	// do something awesome with each div
	trigger.addEventListener("click", function (e) {

		e.preventDefault();
		console.log(trigger);
		contactModalWrapper.classList.remove("hidden");
	});
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
