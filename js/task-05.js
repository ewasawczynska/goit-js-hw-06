const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

if (textInput.length !== 0) {
  textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
  });
} else {
  textInput.textContent = "Anonymous";
}
