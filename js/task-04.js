let counterValue = 0;
const value = document.querySelector("#value");

const substract = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const add = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const buttonMinus = document.querySelector('[data-action="decrement"]');
buttonMinus.addEventListener("click", substract);

const buttonPlus = document.querySelector('[data-action="increment"]');
buttonPlus.addEventListener("click", add);
