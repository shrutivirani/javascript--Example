const firstname = "shruti";
const lastname = 'domadiya';

let fullname = firstname + ' '+lastname;
let fullname1 = `${firstname} ${lastname}`;
let fullname2 = `   ${firstname}     ${lastname}  `.length; //it counts space also in length
let fullname3 = `   ${firstname}     ${lastname}  `.trim().length; // it removes all empty spaces
let fullname4 = `${firstname} ${lastname}`.toUpperCase();

document.getElementById("stringdemo").innerHTML = fullname +' '+ fullname1 +' '+ fullname2 +' '+ fullname3 +' '+ fullname4;

console.log(firstname);