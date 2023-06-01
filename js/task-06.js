const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const inputLength = textInput.dataset.length;
  if (textInput.value.length >= inputLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
