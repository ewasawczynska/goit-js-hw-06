const textInput = document.querySelector("#validation-input");
const inputMinLength = 6;
const validField = document.querySelector("#validation-input.valid");
const invalidField = document.querySelector("#validation-input.invalid");

textInput.addEventListener(
  "blur",
  (inputMinLength, validField, invalidField) => {
    textInput.length >= inputMinLength ? validField : invalidField;
  }
);
