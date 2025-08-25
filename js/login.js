import { getUserFromSUPA, insertRowInUser } from "./api.js";


const loginBtn = document.querySelector('#login-btn');
const usernameInputElem = document.querySelector('#username');
const LoginContainerElem = document.querySelector('#login-container');
const loginPassworInput = document.querySelector('#login-password');

const signupName = document.querySelector('#signup-name');
const signupLastname = document.querySelector('#signup-lastname');
const signupPassword = document.querySelector('#signup-password');

const signupNameInputElem = document.querySelector('#signup-name');
const signupNameSpanElem = document.querySelector('#signup-name-span');

const signuplastnameInputElem = document.querySelector('#signup-lastname');
const signuplastnameSpanElem = document.querySelector('#signup-lastname-span');

const showPasswordBtn = document.querySelector('#show-password-btn');
const showLoginPasswordBtn = document.querySelector('#show-login-password-btn');
let showingSignupPass = false;
let showingLoginPass = false;


let countClick = 1;

let user;

const isUserExist = Cookies.get('username');
if (isUserExist) location.href = './index.html';

window.addEventListener('DOMContentLoaded', () => {
    usernameInputElem.focus();
});

async function continueToLoginOrSignup () {


    loginBtn.disabled = true;
    usernameInputElem.disabled = true;

    loginBtn.innerHTML = `<div class="loader"></div>`  

    


    user = await getUserFromSUPA(usernameInputElem.value); 
  

    loginBtn.innerHTML = `Continue <img src="icon/arrow-right.svg" alt="">`   
        

    
    if (user.status === 'login') {

        LoginContainerElem.classList.add('login');
        setTimeout( () => {loginPassworInput.focus()} ,600);

    } else if (user.status === 'signup') {
        LoginContainerElem.classList.add('signup');
        setTimeout( () => {signupName.focus()} ,400)
    }
    
    loginBtn.disabled = false;


}


//////
function validateInpusHandler() {
    
    if ( user.status === 'login' && !loginPassworInput.value == '' ) {
        complateLoginhandler();

    } else if ( user.status === 'signup' && !( signupLastname.value == '' || signupName.value == '' || signupPassword.value == '')) {
    
        complateSignupHandler();
    } else{
        Swal.fire({
            icon:'error',
            title: 'Please fill in all fields.'
        })
    }

}

//// login handler 
function complateLoginhandler() {

    
    if ( loginPassworInput.value === user.password ) {
        
        console.log('logged in');

        console.log(user.username);

        Cookies.set('username', user.username, { expires: 3 });
        location.href = "./index.html";

        
    } else {
        
        Swal.fire({
            icon: "error",
            title: "The password is incorrect.",
        });
        
    }
    
    
}

//// signup handler 
async function complateSignupHandler() {

    await insertRowInUser(signupName.value, [], signupPassword.value, signupLastname.value, usernameInputElem.value)

    
}



// add event listeners
loginBtn.addEventListener("click", e => {

    if (usernameInputElem.value.trim() === ''){
            Swal.fire({
            icon:'error',
            title: 'Please fill in all fields.',
            showConfirmButton: false,
            showDenyButton: true,
            allowEnterKey: false,
                })
            return;
        }

    if (countClick === 1) {
        continueToLoginOrSignup();
    } else {
        validateInpusHandler();
    }
    countClick++
});

document.addEventListener('keypress', e => {

    if( e.charCode === 13 ) {

        if (usernameInputElem.value.trim() === ''){
            Swal.fire({
            icon:'error',
            title: 'Please fill in all fields.',
            showConfirmButton: false,
            showDenyButton: true,
            allowEnterKey: false,
                })
            return;
        }

        if (countClick === 1) {
                continueToLoginOrSignup();
            } else {
                validateInpusHandler();
            }
            countClick++


    }
    

})


function limitCharInputHandler(input, span, limit) {


    input.addEventListener('input', e => {
        
        if ( input.value.length >= limit ) {  
            input.value = input.value.slice(0, 20);
        }
        span.innerHTML = limit - input.value.length;
    })
}




limitCharInputHandler(signupNameInputElem,signupNameSpanElem, 20)
limitCharInputHandler(signuplastnameInputElem,signuplastnameSpanElem, 20)


function showPasswordHandler(fleg, showPassBtn, passInput) {
    
    showPassBtn.addEventListener('click', () => {
        showPassBtn.classList.toggle('open-eye');

    fleg = !fleg

    if ( fleg ) {
        passInput.type = 'text'
    } else {
        passInput.type = 'password'
    }
    })
    
    
}

showPasswordHandler(showingLoginPass, showLoginPasswordBtn, loginPassworInput)
showPasswordHandler(showingSignupPass, showPasswordBtn, signupPassword)



usernameInputElem.addEventListener('input', () => {
    usernameInputElem.value = usernameInputElem.value.replace(/[^A-Za-z0-9_]/g, '');
});

loginPassworInput.addEventListener('input', () => {
    loginPassworInput.value = loginPassworInput.value.replace(/[\s]/, '');
});

signupPassword.addEventListener('input', () => {
    signupPassword.value = signupPassword.value.replace(/[\s]/, '');
})

