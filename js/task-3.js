const elInput = document.querySelector("#name-input");
console.log(elInput);

const elOutput = document.querySelector("#name-output");
console.log(elOutput);

elInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim().length != 0) {
    elOutput.textContent = event.currentTarget.value.trim();
  } else {
    elOutput.textContent = "Anonymous";
  }
});