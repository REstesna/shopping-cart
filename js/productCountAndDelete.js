import { updateUserHandler } from "./api.js";
import { userState } from "./main.js";

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "py-2 px-4 bg-green-500 text-center captalize text-white ml-2 rounded-[6px] cursor-pointer",
    cancelButton: "py-2 px-4 bg-red-500 text-center captalize text-white rounded-[6px] cursor-pointer",
  },
  buttonsStyling: false,
});


export function decreaseProductFromBasketHandler(event) {

  const username = Cookies.get('username');

  const mainProductID = event.target.closest("li").id;
  const userBasket = userState.getState().basket;

  const procuctIndexInBasket = userBasket.findIndex(
    (p) => p.id === +mainProductID
  );
 

  if (userBasket[procuctIndexInBasket].quantity <= 1) {

    swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {

          userBasket.splice(procuctIndexInBasket, 1);
          userState.setState({ basket: userBasket });
          updateUserHandler(username, userBasket);

          
      }
    });
} else {
  userBasket[procuctIndexInBasket].quantity -= 1;
  userState.setState({ basket: userBasket });
  updateUserHandler(username, userBasket);
}


    
}



export function increaseProductFromBasketHandler(event) {

  const username = Cookies.get('username');

 
  const mainProductID = event.target.closest("li").id;
  const userBasket = userState.getState().basket;

  const procuctIndexInBasket = userBasket.findIndex(
    (p) => p.id === +mainProductID
  );

  userBasket[procuctIndexInBasket].quantity += 1;
  userState.setState({ basket: userBasket });
  updateUserHandler(username, userBasket);

  
}


export function removeProductFromBasketHandler(event) {
 
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {

          const username = Cookies.get('username');
 
          const mainProductID = event.target.closest("li").id;
          const userBasket = userState.getState().basket;

          const procuctIndexInBasket = userBasket.findIndex(
            (p) => p.id === +mainProductID
          );

          userBasket.splice(procuctIndexInBasket, 1);
          userState.setState({ basket: userBasket });
          updateUserHandler(username, userBasket);

          
      }
    });
  

}