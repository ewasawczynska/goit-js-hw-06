const inputZip = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

inputZip.addEventListener("input", (event) => {
  outputText.style.fontSize = event.currentTarget.value + "px";
});
