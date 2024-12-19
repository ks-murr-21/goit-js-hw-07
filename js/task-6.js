function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amount = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const containerDiv = document.querySelector("#boxes");
const destBtn = document.querySelector("button[data-destroy]");

btnCreate.addEventListener("click", () => {
  let cicle = 1;
  let size = 30;
  if ((amount.value !== 0) & ((amount.value > 0) & (amount.value <= 100))) {
    while (cicle <= amount.value) {
      cicle++;
      const createDiv = document.createElement("div");
      createDiv.style.width = `${size}px`;
      createDiv.style.height = `${size}px`;
      containerDiv.append(createDiv);
      size += 10;
      createDiv.style.backgroundColor = getRandomHexColor();
    }
  }
});

function destroyBoxes() {
  containerDiv.innerHTML = "";
}

destBtn.addEventListener("click", destroyBoxes);