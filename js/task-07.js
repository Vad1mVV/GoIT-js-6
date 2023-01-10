const inputRangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

function onInputInput(event) {
    const value = inputRangeEl.value;
    spanEl.style.fontSize = `${value}px`;
}

inputRangeEl.addEventListener('input', onInputInput);