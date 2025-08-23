import { getLocalStorage } from "./nesFuncs.js";


window.addEventListener('load', () => {
    setThemeOnLocal()
});


function setThemeOnLocal() {
    const localTheme = getLocalStorage('theme');
    
    localTheme == 'dark'
        ? document.body.classList.add('dark_theme')
        : document.body.classList.remove('dark_theme'); 
}
