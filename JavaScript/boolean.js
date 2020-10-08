let example4 = false;
console.log(Boolean(example4));//false

example4 = 500.89;
console.log(Boolean(example4)); //true

example4 = true;
console.log(Boolean(example4)); //true

example4 = null;
console.log(Boolean(example4)); //false

example4 = NaN; //not at number
console.log(Boolean(example4)); //false

example4 = 0;
console.log(Boolean(example4)); //false

example4 = "";
console.log(Boolean(example4)); //false

example4 = " ";
console.log(Boolean(example4)); //true

example4 = undefined;
console.log(Boolean(example4)); //false

example4 = -5;
console.log(Boolean(example4)); //true