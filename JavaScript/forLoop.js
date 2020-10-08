// Challenge: Total Price

/*
 1. Give our customer their total price.
 2. Add the price of the items together with a sales tax of 8%.
 3. Log the price.
*/

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];
let temp = 0;
for(let i=0; i<cartItems.length; i++) {
    temp = temp + parseInt(cartItems[i].price);
    if((i+1) == cartItems.length){
        console.log("total price is: "+temp);
        let tax = temp * 0.08;
        console.log("price with 8% tax: "+tax);
    }

}
