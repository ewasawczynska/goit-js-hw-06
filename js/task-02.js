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

ingredients.forEach((element) => {
  const listItem = document.createElement("li");
  listItem.textContent = element;
  listItem.classList.add("item");
  ingredientsTable.push(listItem);
});

listOfIngredients.append(...ingredientsTable);
