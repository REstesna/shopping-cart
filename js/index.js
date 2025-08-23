
import { addToCartHandler } from "./addtocart.js";
import { getUserFromSUPA } from "./api.js";
import { logoutHandler } from "./logout.js";
import { userState } from "./main.js";
import { paginationHandler, renderPaginationBtn, showActivePageHandler } from "./pagination.js";
import {products} from "./main.js"




const $ = document;

// selectros 
const loginBtn = $.querySelector('#login__btn');
const logoutBtn = $.querySelector('#logout__btn');
const countOfProducts = $.querySelector('#count-of-procucts');
///
window.addEventListener('load' , () => {
    renderOnLoginStatus();
    getUserStatusFromLocal();
    getUserStatus();    
})

export let currentPageFlag = {page: 1}; 
export let itemPerPage = 12;



$.addEventListener('click', e => {
    if ( e.target.closest('button.add-to-cart_btn') ) {   
        addToCartHandler(e);
    }    
})


paginationHandler(itemPerPage, currentPageFlag.page);

renderPaginationBtn(products.length, itemPerPage, currentPageFlag.page);

showActivePageHandler();


function renderOnLoginStatus() {

    const state = userState.getState();

    if ( state.login ) {
        logoutBtn.classList.add('block');
        loginBtn.classList.add('hidden');
        countOfBasketProduct(state);
    } else {
        logoutBtn.classList.add('hidden');
        loginBtn.classList.add('block');
    }
    
    
    
}

function countOfBasketProduct(state) {    
    countOfProducts.innerHTML = state.basket.length;
}

userState.subscribe(countOfBasketProduct);

async function getUserStatus() {

    let username = Cookies.get('username');


        if (username) {
            let userRes = await getUserFromSUPA(username);      

        let newUserState = {

                status: 'login',
                basket: userRes.basket,
                created_at: userRes.created_at,
                id: userRes.id,
                lastname: userRes.lastname,
                name: userRes.name,
                // password: userRes.password,
                username: userRes.username,
        }


    userState.setState(newUserState);
 }
    
}

function getUserStatusFromLocal() {


    let localUserState = JSON.parse(localStorage.getItem('state'));
    

    if (localUserState) {
        userState.setState(localUserState);
    }
    
}



//////////////////////// logout btn show when user is login
function renderLogoutBtnHandler (state) {
    if ( state.status === 'login' ) {
        document.querySelector('#login__btn').style.display = 'none';
        document.querySelector('#logout__btn').style.display = 'flex';
    } else {
        document.querySelector('#login__btn').style.display = 'flex';
        document.querySelector('#logout__btn').style.display = 'none';
    }
}

userState.subscribe(renderLogoutBtnHandler);

//////////////////////////////
document.querySelector('#logout__btn').addEventListener('click', logoutHandler)