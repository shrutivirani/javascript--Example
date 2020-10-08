let number = 6.78;
console.log(number.toFixed(1)); //it fixes number in given number of digit
console.log(number.toLocaleString());

let d = new Date();
console.log(d.toLocaleString());//it prints same answer of value of variable;
console.log(d.getDate());// it prints date only

let number1 = 6.7777700000000000;
console.log(number1.toPrecision()); //it removes extra meaningless digit

//chanllenges
let example1 = parseInt("33 years after 32");
let example2 = parseFloat("44 years after 43");
let example3 = number.toFixed(4);

console.log(example1);
console.log(typeof example1); //number

console.log(example2);
console.log(typeof example2); //number

console.log(example3);
console.log(typeof example3); //string