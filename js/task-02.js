const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");
let ingredientsTable = [];

listOfIngredients.forEach((element) => {
  const listItem = document.createElement("li");
  listItem.textContent = element;
  listItem.classList.add("item");
  ingredientsTable.push(element);
});

listOfIngredients.append(...ingredients);

// const listOfIngredients = document.querySelector("#ingredients");
// ingredients.forEach((element) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = element;
//   listItem.classList.add("item");
//   listOfIngredients.append(listItem);
// });
