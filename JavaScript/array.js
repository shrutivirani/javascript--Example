let example5 = [1, 2, 3];
console.log(example5);

console.log(example5.length); //for length

example5.push(5, 7, 8);
console.log(example5);

example5.pop();
console.log(example5);

example5[0] = 3;
example5[3] = 10; //change specific value with other value
console.log(example5);

example5.forEach((element) => {
    console.log(element);// it prints all elements of variable
});

for(let i=0; i>3; i++) {
    console.log(example5[i])// it prints one by one element of variable
}


//chanllenge

let company = ["toilet paper", "bottled water", "sanitizer"];
console.log(company);

company[0] = "paper towel";
console.log(company);

company.pop();
console.log(company);

company.push("bleach");
console.log(company);
