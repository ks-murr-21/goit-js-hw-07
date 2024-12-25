const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;  
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); 

    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); 
  }

  input.value = '';
});

destroyButton.addEventListener('click', () => {
  destroyBoxes(); 
});
