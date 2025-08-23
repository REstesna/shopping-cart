import { getLocalStorage, setLocalStorage } from "./nesFuncs.js";

const $ = document;

// selectors

const openMenuBtn = $.querySelector('#menu__btn');
const menuElem = $.querySelector('#menu');
const closeMenuBtn = $.querySelector('#close__menu-btn');

const changeThemeBtn = $.querySelector('#change_theme-btn');

///


function openMenuHandler() {
    menuElem.classList.add('show_menu');
    document.body.style.overflow = 'hidden';
}

function closeMenuHandler() {
    menuElem.classList.remove('show_menu');
    document.body.style.overflow = 'auto';
}

function closeMenuByClickOutOfMenu(e) { 
    if (e.target.id == 'menu') {
        closeMenuHandler() 
    } 
}

function changeThemeHandler() {
    document.body.classList.toggle('dark_theme');
    if (document.body.className.includes('dark_theme')){
        setLocalStorage('theme', "dark");
    } else {
        setLocalStorage('theme', "light");
    }
}




openMenuBtn.addEventListener('click', openMenuHandler);
closeMenuBtn.addEventListener('click', closeMenuHandler);
menuElem.addEventListener('click', closeMenuByClickOutOfMenu);
changeThemeBtn.addEventListener('click', changeThemeHandler);