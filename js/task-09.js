const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onButtonClick(event) {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  textEl.textContent = randomColor;
}

buttonEl.addEventListener('click', onButtonClick)