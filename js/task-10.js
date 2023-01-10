const createButtonEl = document.querySelector('[data-create]')
const destroyButtonEl = document.querySelector('[data-destroy]')
const counterInputEl = document.querySelector('#counter')
const boxesEl = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(event) {
  let num = 30;

  for (let i = 0; i < counterInputEl.value; i += 1) {
    const randomColor = getRandomHexColor();

    boxesEl.insertAdjacentHTML('beforeend', `<div style="background-color: ${randomColor}; height: ${num}px; width: ${num}px;"></div>`)

    num += 10
    console.log(i);
  }
}
function destroyBoxes(event) {
  boxesEl.innerHTML = '';
}

createButtonEl.addEventListener('click', createBoxes)
destroyButtonEl.addEventListener('click', destroyBoxes);