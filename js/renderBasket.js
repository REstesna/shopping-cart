import { basketProductContainer } from "./cart.js";


export function renderBasketProducts (state) {

    const basket = state.basket;
    const docFrag = document.createDocumentFragment();
    basketProductContainer.innerHTML = ''

    basket.map( p => {

        
        
        
        docFrag.append(`
            
            <li id="${p.id}" class="flex justify-between flex-wrap lg:gap-0 gap-4">
                            <div class="flex gap-4">
                                <div class="">
                                    <img class="max-w-32 rounded-[10px]" src="${p.imgSrc}" alt="procuct">
                                </div>
                                <div class="flex flex-col justify-between md:py-2">
                                    <h4 class="main-font-700 text-[14px] sm:text-xl">${p.title}</h4>
                                    <span class="text-[var(--blue-color)]">${p.price}$</span>
                                </div>
                            </div>

                            <!-- right content -->
                            <div class="flex items-center gap-4 ml-auto">

                                <!-- quantity -->
                                <div class="${p.quantity === 1 ? "last_prodcut" : ''} flex items-center justify-between gap-2 bg-[var(--second-white-color)]/50 p-1 rounded-full">
                                    <button class="decrease_product_btn cursor-pointer w-[25px] rounded-full bg-[var(--main-white-color)]">
                                        <!-- trash svg -->
                                        <svg id="trach__svg-icon" class="m-[4px] " width="17" height="17" viewBox="0 0 17 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.7765 4.51926C12.4743 4.29111 10.1582 4.17358 7.84907 4.17358C6.48018 4.17358 5.11129 4.24272 3.7424 4.38099L2.33203 4.51926"
                                                class="stroke-[var(--main-black-color)]" stroke-width="1.2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M6.13477 3.82091L6.28686 2.91523C6.39748 2.25844 6.48044 1.76758 7.64884 1.76758H9.4602C10.6286 1.76758 10.7185 2.2861 10.8222 2.92215L10.9743 3.82091"
                                                class="stroke-[var(--main-black-color)]" stroke-width="1.2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M13.29 6.7041L12.8406 13.6661C12.7645 14.7515 12.7023 15.595 10.7734 15.595H6.3349C4.40601 15.595 4.34379 14.7515 4.26774 13.6661L3.81836 6.7041"
                                                class="stroke-[var(--main-black-color)]" stroke-width="1.2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.40039 11.7925H9.70261" class="stroke-[var(--main-black-color)]"
                                                stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.82617 9.02686H10.283" class="stroke-[var(--main-black-color)]"
                                                stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <!-- minus svg  -->
                                         <svg id="minus__svg-icon" width="23px" height="23px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 12L18 12" class="stroke-[var(--main-black-color)]"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </button>
                                    <span class="main-font-700 w-[15px] text-center">${p.quantity}</span>
                                    <button class="increase_product_btn cursor-pointer rounded-full bg-[var(--blue-color)] ">
                                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6V18" class="stroke-[var(--static-white-color)]"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6 12H18" class="stroke-[var(--static-white-color)]"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <!-- Remove product btn  -->
                                <button
                                    class="remove_product_btn cursor-pointer text-sm main-font-700 text-[var(--blue-color)]">Remove</button>
                                <!-- final price white count  -->
                                <div class="text-xl main-font-700 min-w-[63px] text-center">${p.price * p.quantity}$</div>
                            </div>
                        </li>


        `);
        
    } )

        
    basketProductContainer.innerHTML = docFrag.textContent;
    

}