
import { getUserFromSUPA, updateUserHandler } from "./api.js";
import { userState, products } from "./main.js";

export async function addToCartHandler(event) {

    const usernameCookie = Cookies.get('username');
    
    

    if (usernameCookie !== undefined) {

            const productID = event.target.closest('button.add-to-cart_btn').id;
            const userBasket = userState.getState().basket;
            
            

            const mainProduct = products.find(p => p.id === +productID); 

            const productIndexInBasket = userBasket.findIndex(p => p.id === +mainProduct.id);
            
            if ( productIndexInBasket === -1 ) {
                mainProduct.quantity = 1
                userBasket.push(mainProduct);
            } else {
                userBasket[productIndexInBasket].quantity += 1;
            }
            
            userState.setState({ basket: userBasket });

            const notyf = new Notyf();
            notyf.success('The product has been added to your cart.');
            
            const userInSUPA = await getUserFromSUPA(usernameCookie);
            const productIndexInSUPA = userInSUPA.basket.findIndex (p => p.id === +productID);
            if ( productIndexInSUPA === -1 ) {
                mainProduct.quantity = 1;
                userInSUPA.basket.push(mainProduct);
            } else {
                userInSUPA.basket[productIndexInSUPA].quantity += 1;
            }

            console.log(userInSUPA);
            
            await updateUserHandler(usernameCookie, userInSUPA.basket);


    } else {
        swal.fire({
            icon: 'error',
            title: 'Login or signup first.',
            footer: '<a class="text-lg underline" href="./login.html"> Click to login or signup</a>'
        })
    }

  
    
    
    

}