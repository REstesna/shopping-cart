
export function renderProductsHandler(productsContainer, products) {

    const docFrag = document.createDocumentFragment();
    productsContainer.innerHTML = '';

    

    products.forEach( p => {
        
        

        const div = document.createElement('div');
        div.className = 'product_container';

        div.innerHTML = `

        
                <!-- img div  -->
                <div class="product-img_container ">
                    <img loading="lazy" class="object-cover" src="${p.imgSrc}" alt="">
                </div>
                <!-- produc title  -->
                <h4 class="product_title main-font-700">${p.title}</h4>
                <!-- description -->
                <p class="product_description main-font-300 ">${p.description}</p>
                <!-- price & left count  -->
                <div class="flex justify-between items-center pr-3">
                    <div>
                        <span class="product-span_style main-font-700">price: $${p.price}</span>
     
                    </div>
                    <div class="stars">
                        <span class="stars__bg">★★★★★</span>
                        <span class="stars__fg" style="width: ${ (p.rate * 100) / 5 }%">★★★★★</span>
                    </div>

                </div>
                <!-- add to cart button  -->
                <button id="${p.id}" class="add-to-cart_btn">
                    <svg id="basket_icon" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 4H5.62563C6.193 4 6.47669 4 6.70214 4.12433C6.79511 4.17561 6.87933 4.24136 6.95162 4.31912C7.12692 4.50769 7.19573 4.7829 7.33333 5.33333L7.51493 6.05972C7.616 6.46402 7.66654 6.66617 7.74455 6.83576C8.01534 7.42449 8.5546 7.84553 9.19144 7.96546C9.37488 8 9.58326 8 10 8V8"
                            stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                        <path
                            d="M18 17H7.55091C7.40471 17 7.33162 17 7.27616 16.9938C6.68857 16.928 6.28605 16.3695 6.40945 15.7913C6.42109 15.7367 6.44421 15.6674 6.49044 15.5287V15.5287C6.54177 15.3747 6.56743 15.2977 6.59579 15.2298C6.88607 14.5342 7.54277 14.0608 8.29448 14.0054C8.3679 14 8.44906 14 8.61137 14H14"
                            stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M14.5279 14H10.9743C9.75838 14 9.15042 14 8.68147 13.7246C8.48343 13.6083 8.30689 13.4588 8.15961 13.2825C7.81087 12.8652 7.71092 12.2655 7.51103 11.0662C7.30849 9.85093 7.20722 9.2433 7.44763 8.79324C7.54799 8.60536 7.68722 8.44101 7.85604 8.31113C8.26045 8 8.87646 8 10.1085 8H16.7639C18.2143 8 18.9395 8 19.2326 8.47427C19.5257 8.94854 19.2014 9.59717 18.5528 10.8944L18.1056 11.7889C17.5677 12.8647 17.2987 13.4026 16.8154 13.7013C16.3321 14 15.7307 14 14.5279 14Z"
                            stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                        <circle cx="17" cy="20" r="1" fill="#33363F" />
                        <circle cx="9" cy="20" r="1" fill="#33363F" />
                    </svg>
                    add to Cart
                </button>
            

        `
        docFrag.appendChild(div);
        
    } );

    productsContainer.appendChild(docFrag);
    

}