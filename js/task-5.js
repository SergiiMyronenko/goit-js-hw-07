function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.querySelector('.change-color').addEventListener('click', function() {
  const newColor = getRandomHexColor(); // Генеруємо новий колір
  document.body.style.backgroundColor = newColor; // Змінюємо колір фону <body>
  document.querySelector('.color').textContent = newColor; // Оновлюємо текст в span з класом .color
});