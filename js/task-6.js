function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    const initialSize = 30;
    const boxes = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${initialSize + i * 10}px`;
      box.style.height = `${initialSize + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }
    boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
      destroyBoxes(); 
      createBoxes(amount);
      input.value = '';
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);
});
