const formEl = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Все строки должны быть заполнены!');
    }

    if (email.value !== '' || password.value !== '') {
        const values = {};
        values.email = email.value;
        values.password = password.value;

        formEl.reset()

        console.log(values)
    }
};

formEl.addEventListener('submit', onFormSubmit);