const categoryCounter = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryCounter.length}`);

categoryCounter.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryElement = element.querySelectorAll("li");
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryElement.length}`);
});
