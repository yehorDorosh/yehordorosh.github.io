
// Show/Hide menu of company link in navigation bar
let subMenu = document.querySelector('.sub-menu');
let menuButton = document.querySelector('.sum-menu-company');
let menuButtonX;
let menuButtonY;
menuButton.onclick = () => {
    if (subMenu.style.visibility != 'visible') subMenu.style.visibility = 'visible';
    else subMenu.style.visibility = 'hidden';
    menuButtonX = event.clientX;
    menuButtonY = event.clientY;
}

// Show/Hide navigation bar in mobile version
let menu = document.querySelector('.menu');
let mobNav = document.querySelector('.mob-nav');
let mobNavX;
let mobNavY;
mobNav.onclick = () => {
    if (menu.style.display != 'flex') menu.style.display = 'flex';
    else menu.style.display = 'none';
    mobNavX = event.clientX;
    mobNavY = event.clientY;
}

document.body.onclick = () => {
    if (((event.clientX > (menuButtonX + 50)) || (event.clientX < (menuButtonX - 50)) || (event.clientY > (menuButtonY + 50)) || (event.clientY < (menuButtonY - 50))) && (document.body.clientWidth > 960)) {
        subMenu.style.visibility = 'hidden';
    }
   
    if (((event.clientX > (mobNavX + 50)) || (event.clientX < (mobNavX - 600)) || (event.clientY > (mobNavY + 500)) || (event.clientY < (mobNavY - 20))) && (document.body.clientWidth < 960)) {
        menu.style.display = 'none';
    }
}
/*Change language menu */
let langMenu = document.querySelector('.language-option ul');
let langRu = document.querySelector('.ru');
let langEng = document.querySelector('.eng');
function langSelector() {
    if (langMenu.style.backgroundColor != 'white') {
        langMenu.style.backgroundColor = 'white';
        langMenu.style.border = 'solid 0.3px';
        langEng.style.visibility = 'visible';
        langRu.style.visibility = 'visible';
    } else {
        langMenu.style.backgroundColor = 'transparent';
        langMenu.style.border = 'none';
        if (! langEng.classList.contains('active')) langEng.style.visibility = 'hidden';
        if (! langRu.classList.contains('active')) langRu.style.visibility = 'hidden';
    }
}
langEng.onclick = () => {
    if (langMenu.style.backgroundColor == 'white') {
        langEng.classList.add('active');
        langRu.classList.remove('active');
    }
    langSelector();
}
langRu.onclick = () => {
    if (langMenu.style.backgroundColor == 'white') {
        langRu.classList.add('active');;
        langEng.classList.remove('active');
    }
    langSelector();
}