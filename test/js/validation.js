'use strict'
//alert('Hellow world');
let nameTooltip = null;
let surNameTooltip = null;
let telTooltip = null;
let emailTooltip = null;

/*document.onmouseover =*/
function showTooltip(e, l, t) {
    let target = e; //.target;

    let tooltip = target.getAttribute('data-tooltip');
    if (!tooltip) return;

    let tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltip;
    document.body.appendChild(tooltipElem);

    let coords = target.getBoundingClientRect();

    let left = l + coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не вылезать за левую границу окна

    let top = t + coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    let showingTooltip = tooltipElem;
    return showingTooltip;
};

/*document.onmouseout =*/
function hideTooltip(tooltip) {

    if (tooltip) {
        document.body.removeChild(tooltip);
        tooltip = null;
        return tooltip;
    }

};

//--------------------------------------

function inputOnlyLetters(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    let chr = getChar(e);
    if (chr == null) return;
    if (chr >= '0' && chr <= '9') {
        showError(e.target);
        if (e.target.name == 'name') nameTooltip = showTooltip(e.target, 0, 30);
        if (e.target.name == 'surname') surNameTooltip = showTooltip(e.target, 0, 30);
        return false;
    }
    resetError(e.target);
    if (e.target.name == 'name') nameTooltip = hideTooltip(nameTooltip);
    if (e.target.name == 'surname') surNameTooltip = hideTooltip(surNameTooltip);

}

function inputTel(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    let chr = getChar(e);
    if (chr == null) return;
    if (!((chr >= '0' && chr <= '9') || chr == '+' || chr == '-' || chr == '(' || chr == ')')) {
        showError(e.target);
        if (e.target.name == 'tel') telTooltip = showTooltip(e.target, 0, 30);
        return false;
    }
    resetError(e.target);
    if (e.target.name == 'tel') telTooltip = hideTooltip(telTooltip);

}

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }
    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
    }
    return null; // специальная клавиша
}

function checkMailMask(e) {
    let target = e.target;
    let arr = target.value.split('');
    if (!arr.includes('@')) {
        showError(target);
        emailTooltip = showTooltip(target, 0, 30);
        return false;
    } else {
        resetError(target);
        emailTooltip = hideTooltip(emailTooltip);
        return true;
    }
}

//-----------------------------------------

function showError(inputElem) {
    inputElem.classList.add('error');
}

function resetError(inputElem) {
    inputElem.classList.remove('error');
}

function validate(form) {
    let elems = form.elements;

    resetError(elems.name);
    nameTooltip = hideTooltip(nameTooltip);
    resetError(elems.surname);
    surNameTooltip = hideTooltip(surNameTooltip);
    resetError(elems.tel);
    telTooltip = hideTooltip(telTooltip);
    resetError(elems.email);
    emailTooltip = hideTooltip(emailTooltip);


    if (!elems.name.value) {
        showError(elems.name);
        nameTooltip = showTooltip(elems.name, 0, 30);
    }
    if (!elems.surname.value) {
        showError(elems.surname);
        surNameTooltip = showTooltip(elems.surname, 0, 30);
    }
    if (!elems.tel.value) {
        showError(elems.tel);
        telTooltip = showTooltip(elems.tel, 0, 30);
    }
    if (!elems.email.value) {
        showError(elems.email);
        emailTooltip = showTooltip(elems.email, 0, 30);
    }


    if (elems.name.value && elems.surname.value && elems.tel.value && elems.email.value && checkMailMask(email.value)) return true;

}
//-------------------------------------
let form = document.forms.registration;
let btnSubmit = document.getElementsByName('submit');


//---------------------------------------

form.onclick = function (e) {
    let target = e.target;

    if (target.name != 'submit') {
        resetError(target);
        if (target.name == 'name') nameTooltip = hideTooltip(nameTooltip);
        if (target.name == 'surname') surNameTooltip = hideTooltip(surNameTooltip);
        if (target.name == 'tel') telTooltip = hideTooltip(telTooltip);
        if (target.name == 'email') emailTooltip = hideTooltip(emailTooltip);
        form.elements.name.onkeypress = inputOnlyLetters;
        form.elements.surname.onkeypress = inputOnlyLetters;
        form.elements.tel.onkeypress = inputTel;
        form.elements.email.onblur = checkMailMask;
    }

    if (target.name == 'submit') {
        form.onsubmit = function () {
            if (!validate(form)) return false;
        }
    }

}