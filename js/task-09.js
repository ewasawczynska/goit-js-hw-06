function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const setFocusBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorValue = document.querySelector(".color");

setFocusBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
});
