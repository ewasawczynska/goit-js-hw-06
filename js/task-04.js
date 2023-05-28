let counterValue = 0;
const value = document.querySelector("#value");

const substract = (counterValue) => {
  counterValue -= 1;
  return (value.textContent = counterValue);
};

const add = (counterValue) => {
  counterValue += 1;
  return (value.textContent = counterValue);
};

const buttonMinus = document.querySelector("#counter.firstChild");
buttonMinus.addEventListener("click", substract);

const buttonPlus = document.querySelector("#counter.lastChild");
buttonPlus.addEventListener("click", add);
