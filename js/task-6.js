function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Обробник події для створення елементів
createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищуємо інпут після створення
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищуємо попередні елементи перед створенням нових
  boxesContainer.innerHTML = '';

  // Створюємо новий масив div елементів
  const elements = [];
  let boxSize = 30; // Початковий розмір

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = '10px'; // Відступ між блоками

    elements.push(box);
    boxSize += 10; // Збільшуємо розмір кожного наступного елементу
  }

  // Додаємо всі елементи за одну операцію в DOM
  boxesContainer.append(...elements);
}

// Обробник події для знищення елементів
destroyBtn.addEventListener('click', destroyBoxes);

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
