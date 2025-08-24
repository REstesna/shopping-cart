import { getUserFromSUPA } from "./api.js";
import { decreaseProductFromBasketHandler, increaseProductFromBasketHandler, removeProductFromBasketHandler } from "./productCountAndDelete.js";
import { userState } from "./main.js";
import { renderBasketProducts } from "./renderBasket.js";
import { loadSuggestProductHandler } from "./suggestion.js";
import { addToCartHandler } from "./addtocart.js";

export const basketProductContainer = document.querySelector('#basket_product_container');

const discountInputElem = document.querySelector('#discount_input');
const confirmDiscountBtn = document.querySelector('#confirm_discount');
const checkoutPriceElems = document.querySelectorAll('.checkout_price');

const welcomeToUserElem = document.querySelector('#welcome-to-user');


const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "py-2 px-4 bg-green-500 text-center captalize text-white ml-2 rounded-[6px] cursor-pointer",
    cancelButton: "py-2 px-4 bg-red-400 text-center captalize text-white rounded-[6px] cursor-pointer",
  },
  buttonsStyling: false,
});

document.addEventListener('click', e => {
    if ( e.target.closest('button.add-to-cart_btn') ) {   
        addToCartHandler(e);
    }    
})


const isUserExist = Cookies.get('username');

if (!isUserExist) {
    
    swalWithBootstrapButtons
        .fire({
          title: "You need to Login!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Login page!",
          cancelButtonText: "Home page",
          reverseButtons: true,
        })
        .then((result) => {
            
            if (result.isConfirmed) {
                location.href = './login.html'
                
            } else {
                location.href = './index.html'

            }
       
        });


}

let finalPrice;
let daysArr = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let date = new Date();

const discountCodes = [
    {disCode: 'relax', disVal: 88},
]
window.addEventListener('load', ()=> {
    setStatFromLocal();
    setStateFromSUPA();
});

// render products in basket 
userState.subscribe(renderBasketProducts);

// set state from local (temp)
function setStatFromLocal() {
    const localUserState = JSON.parse(localStorage.getItem('state'));
    userState.setState(localUserState);
}


document.addEventListener('click', e => {

    // decrease product if click target equal to decrease button... 
    if ( e.target.closest('button.decrease_product_btn') ) {
     decreaseProductFromBasketHandler(e)  
    }

    // increase product if click target equal to increase button... 
    if ( e.target.closest('button.increase_product_btn') ) {
     increaseProductFromBasketHandler(e); 
    }

    // remove product if click target equal to increase button...
    if ( e.target.closest('button.remove_product_btn') ) {
     removeProductFromBasketHandler(e); 
    }

    
})

async function setStateFromSUPA() {
    const username = Cookies.get('username')
    const userStateInSUPA = await getUserFromSUPA(username);
    userState.setState(userStateInSUPA)
}



function calculateBasketPriceHandler (state) {

    finalPrice = 0;
    
    state.basket.map( p => finalPrice += ( p.price * p.quantity ) )
    
    document.querySelector('#items_total').innerHTML = `${finalPrice}$`;

    checkoutPriceElems.forEach( elem => elem.innerHTML = `${finalPrice}$` )
    
    
}
userState.subscribe(calculateBasketPriceHandler);


function discountHandler() {
    
    const input = discountInputElem.value; 
    
    if ( !input.trim() ) {
        console.log('empty');
        return;
    }
    
    const discount = discountCodes.find(d => d.disCode === input);
    
    if ( discount ) {
        const disVal = (discount.disVal * finalPrice) / 100;
        checkoutPriceElems.forEach( elem => elem.innerHTML = `${(finalPrice - disVal).toFixed(2)}$` );
        document.querySelector('#discount_price').innerHTML = `${disVal.toFixed(2)}$`;
        Swal.fire({
            title:`${discount.disVal}% discount applied`,
            icon: 'success'
        })
    } else {
        Swal.fire({
            title:'The discount code entered is not valid.',
            icon: 'error'
        })
    }
    
    
    
}


function sayHiToUserHandler(state){
    welcomeToUserElem.innerHTML = `${state.name} ${state.lastname}`
}
userState.subscribe(sayHiToUserHandler)



document.querySelector('#day_show').innerHTML = daysArr[date.getDay() ];

setTimeout( () => {
    Swal.fire("discount-code is [relax] :))))");
} , 20000)

console.log('%c discount-code is [relax] :))))', 'color:yellow;' );

userState.subscribe(loadSuggestProductHandler);

confirmDiscountBtn.addEventListener('click', discountHandler);