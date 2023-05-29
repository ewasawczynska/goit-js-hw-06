let counterValue = 0;
const value = document.querySelector("#value");

const substract = (counterValue) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const add = (counterValue) => {
  counterValue += 1;
  value.textContent = counterValue;
};

const buttonMinus = document.querySelector("button:first-of-type");
buttonMinus.addEventListener("click", substract);

const buttonPlus = document.querySelector("button:last-of-type");
buttonPlus.addEventListener("click", add);
