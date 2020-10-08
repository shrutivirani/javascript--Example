let rOperator1 = 10, rOperator2 = 20;
console.log(typeof rOperator1);
console.log(typeof rOperator2);

console.log(rOperator1 == rOperator2);//false
console.log(rOperator1 != rOperator2);//true
console.log(rOperator1 === rOperator2);//false

rOperator2= 10;
console.log(rOperator1 == rOperator2);//true
console.log(rOperator1 === rOperator2);//true

rOperator2= '10';
console.log(rOperator1 == rOperator2);//true it checks value only
console.log(rOperator1 === rOperator2);//false it checks data type and value both


// Challenge: Best Promo Code

/*
 1. Our business wants to make sure we give our users the best promo codes available for two categories.
 2. Create two promo codes in variables and compare to find out if the first one is a better value for the dollars off category.
*/

let promocode1 = 5;
let promocode2 = 6;
 if(promocode1>=promocode2)
console.log("promo code one is better than other");
else
console.log("promo code one isn't better than other");