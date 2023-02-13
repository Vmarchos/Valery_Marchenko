const form = document.querySelector('.box');
let fields = form.querySelectorAll('.field');
const login = document.getElementById('login');
const password = document.getElementById('password');
const btnvalidation = document.getElementById('#btnvalidation');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    //     console.log('login: ',login.value);
    // console.log('password: ',password.value);
    checkInputs();
})

function checkInputs() {
    //Получаем строку из инпута
    const loginValue = login.value.trim();
    const passwordValue = password.value.trim();

    if (loginValue === '') {
        setErrorFor(login, 'Поле Логин обязательно для заполнения');
    } else {
        setSuccessFor(login);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Поле Пароль обязательно для заполнения');
    } else {
        setSuccessFor(password)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-conrol error';
    small.innerHTML = message;
    formControl.className = 'error';
    formControl.style.color = 'red';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-conrol success';
}