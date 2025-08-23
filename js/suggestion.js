import { products } from "./main.js";

export function loadSuggestProductHandler(state) {

    const basket = state.basket;

   const categorysInBasket = basket.reduce ( (prev, curr) => {

        return [ ...prev, curr.category ]

    }, [] );
    
    
    const uniqueCategorysInBasket = [...new Set(categorysInBasket)];

    let related = [];

    for ( let basPro of basket ) {

        related.push(...products.filter(p => p.category === basPro.category))

            
    }
    
    const basketIDs = basket.map(b => b.id)
    
    const result = related.filter ( rele => !basketIDs.includes(rele.id));    
    

    const group = {};

    const suggestProducts = [];

    result.forEach ( res => {
        group[res.category] = [...(group[res.category] || []), res]
    } ) ;

    for ( let item in group ) {
        
        suggestProducts.push(group[item].slice(0, 2));
        
    }
    
    console.log(suggestProducts);
    
}