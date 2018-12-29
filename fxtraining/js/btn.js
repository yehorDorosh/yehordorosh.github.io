let subMenu = document.querySelector('.useful-links');
function toggleClass(el, class1, class2) {
el.className = (el.className == class1) ? class2 : class1;
}
subMenu.onclick = function (e) {
    let target = e.target;
    let windowWidth = window.innerWidth;
    if (windowWidth <= 730 & subMenu.className == 'useful-links') toggleClass(subMenu, 'useful-links', 'sub-menu');
    if ((e.offsetX > (subMenu.offsetWidth - 65)) & target.className == 'caption') toggleClass(subMenu, 'useful-links', 'sub-menu');
}

let regBtn = document.querySelector('.deal__top-reg-btn');
let formBg = document.querySelector('.form-bg');
let formCross = document.querySelector('.reg-window--cross');
let regBtn2 = document.querySelector('.how-make-money__btn');
let cryptoTable = document.querySelector('.crypto-rate-table');

regBtn.onclick = function (e) {
    let target = e.target;
    formBg.style.display = 'block';
}

regBtn2.onclick = function() {
    formBg.style.display = 'block';
}

cryptoTable.onclick = function(e) {
    let target = e.target;
    if (target.className =='crypto-rate-table__btn') formBg.style.display = 'block';
}

formCross.onclick = function (e) {
    let target = e.target;
    formBg.style.display = 'none';
}