let form = document.forms.reg;
let email = form.elements.email;
let password = form.elements.password;
let btnSubmit = form.elements.submit;
let checkBox = form.elements.checkbox;
let text = document.querySelector('.reg-window--text2');

function checkValidInput(inputElem, mask, required) {
    if (inputElem.value.match(mask) != null || (!required && !inputElem.value)) {
        inputElem.isValid = true;
    } else {
        inputElem.isValid = false;
    }
}

var message1, message2;

function emailValid() {
    if (message1) message1.remove();
    checkValidInput(email, /[a-zA-Z0-9_]+@[a-zA-Z0-9_]/, true);
    if (email.isValid == false) {
        email.classList.add('error');
        message1 = document.createElement('div');
        message1.className = 'message';
        form.insertBefore(message1, btnSubmit);
        message1.innerText = 'Укажите email в формате example@mail.ru';
        text.style.marginBottom = '15px';
        if (message2) text.style.marginBottom = '-8px';
    } else {
        email.classList.remove('error');
        if (message1) message1.remove();
        text.style.marginBottom = '41px';
        if (message2) text.style.marginBottom = '15px';
    }
}

function passwordValid() {
    if (message2) message2.remove();
    checkValidInput(password, /\d{5}/, true);
    if (password.isValid == false) {
        password.classList.add('error');
        message2 = document.createElement('div');
        message2.className = 'message';
        form.insertBefore(message2, btnSubmit);
        message2.innerText = 'Пароль не менее 5 символов';
        text.style.marginBottom = '15px';
        if (message1) text.style.marginBottom = '-8px';
    } else {
        password.classList.remove('error');
        message2.remove();
        text.style.marginBottom = '41px';
        if (message1) text.style.marginBottom = '15px';
    }
}

email.onblur = function () {
    emailValid();
}
password.onblur = function () {
    passwordValid();
}

btnSubmit.onclick = function () {
    emailValid();
    passwordValid();
    form.onsubmit = function () {
        if (!(email.isValid & password.isValid)) return false;
        return false;
    }
}