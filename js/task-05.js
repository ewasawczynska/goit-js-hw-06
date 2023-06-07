const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput !== "") {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
});

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
});
