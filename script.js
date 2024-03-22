document.getElementById("contactForm").addEventListener("submit", function(event) {
  var emailInput = document.getElementById("email");
  if (!emailInput.validity.valid) {
    event.preventDefault();
    emailInput.classList.add("is-invalid");
  }
});