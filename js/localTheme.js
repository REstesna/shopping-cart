import { getLocalStorage } from "./nesFuncs.js";


window.addEventListener('load', () => {
    setThemeOnLocal()
});


function setThemeOnLocal() {
    const localTheme = getLocalStorage('theme');


    
    localTheme == 'light'
        ? document.body.classList.remove('dark_theme')
        : document.body.classList.add('dark_theme'); 
}
