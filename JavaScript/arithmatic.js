let num1, num2, num3;
num1 = 200;
num2 = 100;
num3 = 150;
 let finalprice = num1 + num2 +(num3*2);
console.log(finalprice);

console.log(finalprice/4);

console.log(finalprice-5);

//challenges
/*
 1. Create 3 variables to store an item price. The last price 2 items were ordered (multiplication).
 2. Tell the user what the total price is before discount.
 3. Inform the user what the average price of items is before discount.
 4. Inform them the final price after saving 5 dollars with promo code 'I Got 5 On It'.
*/
let item1 = 100, item2 = 200, item3 = 300;
let finalprices = item1 + item2 + (item3 *2);
console.log("final price before discount is: " + finalprices);

let averageprices = finalprices/4;
console.log("average price before discount is: " + averageprices);

let savedprices = finalprices -5;
console.log("saved price is: " +savedprices);

