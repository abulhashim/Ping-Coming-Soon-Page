const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const button = document.querySelector("button");

function validateEmail(email) {
  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexPattern.test(email);
}

button.addEventListener("click", () => {
  const isValidEmail = validateEmail(emailInput.value.trim());

  if (!isValidEmail) {
    errorMessage.ariaHidden = false;
    errorMessage.classList.remove("hidden");
    emailInput.classList.replace("border-PaleBlue", "border-LightRed");
  } else {
    errorMessage.ariaHidden = true;
    errorMessage.classList.add("hidden");
    emailInput.classList.replace("border-LightRed", "border-PaleBlue");
  }
});
