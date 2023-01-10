const counterEl = document.querySelector('#value');
const decrementEl = document.querySelector('[data-action="decrement"]'); 
const incrementEl = document.querySelector('[data-action="increment"]');
let counterValue = 0;

function onDecrementButtonClick(event) {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}
function onIncrementButtonClick(event) {
    counterValue += 1;
    counterEl.textContent = counterValue;
}

decrementEl.addEventListener('click', onDecrementButtonClick);
incrementEl.addEventListener('click', onIncrementButtonClick);

