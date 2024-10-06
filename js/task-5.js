function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', () => {
  const otherColor = getRandomHexColor();

  body.style.backgroundColor = otherColor;

  colorSpan.textContent = otherColor;
});
