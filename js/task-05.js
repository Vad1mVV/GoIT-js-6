const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function onInputInput(event) {
    if (inputEl.value === '') {
        spanEl.textContent = 'Anonymous';
    }
    if (inputEl.value !== '') {
        spanEl.textContent = inputEl.value;
    }
}

inputEl.addEventListener('input', onInputInput);