const inputEl = document.querySelector('#validation-input');

function onInputBlur(event) {
    if (inputEl.value.length !== 6) {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
    if (inputEl.value.length === 6) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    }
}

inputEl.addEventListener('blur', onInputBlur);