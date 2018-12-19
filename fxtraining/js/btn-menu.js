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