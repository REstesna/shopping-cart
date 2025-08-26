import { userState } from "./main.js";


export function exportCartPDFHandler() {
    
    const userBasket = userState.getState().basket;
    console.log(userBasket);
    

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(25);

    doc.text('Your Basket', 100,20, {align: 'center'});

    let yPos = 40;
    let totalPrice = 0;
    
    userBasket.forEach((item, index) => {
        const itemPrice = item.price * item.quantity;
        totalPrice += itemPrice;

        doc.setFontSize(12);


        doc.text (`${index + 1} | ${item.title}`, 20, yPos);
        doc.text ( `Price: ${item.price.toLocaleString()}$`, 90, yPos );
        doc.text (`quantity: ${item.quantity}`, 120, yPos);
        doc.text (`Total: ${itemPrice.toLocaleString()}$`, 150, yPos);

        yPos += 12;
    });

    yPos += 15;

    doc.setFontSize(16);
    doc.text(`Total basket price: ${totalPrice.toLocaleString()}$`, 20, yPos);

    doc.save('basket.pdf');

    
    
    
}