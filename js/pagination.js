import { currentPageFlag, itemPerPage } from "./index.js";
import { renderProductsHandler } from "./renderProduct.js";
import {products} from "./main.js"

const $ = document;

const productsContainerElem = $.querySelector('#products__conatainer');
const paginationItemsContainer = $.querySelector('#pagination__items_container');
const prevPaginationElem = $.querySelector('#prev_pagination');
const nextPaginationElem = $.querySelector('#next_pagination');

let btnCount;



export function paginationHandler(itemPerPage, currentPage) {

    if ( currentPage > 5 || currentPage < 1 ) {
        return;
    }

  let start = (currentPage - 1) * itemPerPage;
  let end = start + itemPerPage;

  let productsSlice = products.slice(start, end);

  renderProductsHandler(productsContainerElem, productsSlice);
  
}


export function renderPaginationBtn(productsCount, itemPerPage, currentPage) {

  btnCount = Math.ceil( productsCount / itemPerPage );  

  for ( let i = 1 ; i <= btnCount ; i++ ) {

    const li = $.createElement('li');
      li.className = 'pagination_item';
      li.id = 'pagination_item';

      li.dataset.currentPage = i;
      li.addEventListener('click', e => {
        currentPageFlag.page = e.target.closest('li').dataset.currentPage;
        paginationHandler(itemPerPage, currentPageFlag.page);
        productsContainerElem.scrollIntoView({behavior: "smooth", block:"start", inline: "start"});
        showActivePageHandler()
      

      });
      li.innerHTML = i;

      paginationItemsContainer.appendChild(li);
  }


}


export function showActivePageHandler () {
    
      $.querySelectorAll('#pagination_item').forEach(l => {
     

        if ( l.dataset.currentPage == currentPageFlag.page  ) {

          l.classList.add('active_pagination');

        } else if ( l.className.includes('active_pagination') )  {

            l.classList.remove('active_pagination');
            
        }
      })
}

nextPaginationElem.addEventListener('click', () => {

    if (currentPageFlag.page < btnCount) {
    currentPageFlag.page += 1;
        paginationHandler(itemPerPage, currentPageFlag.page);
        productsContainerElem.scrollIntoView({behavior: "smooth", block:"start", inline: "start"});
        showActivePageHandler();
    }

    
})
prevPaginationElem.addEventListener('click', () => {

    if (currentPageFlag.page > 1) {
        currentPageFlag.page -= 1;
            paginationHandler(itemPerPage, currentPageFlag.page);
            productsContainerElem.scrollIntoView({behavior: "smooth", block:"start", inline: "start"});
            showActivePageHandler();
    }

    
})