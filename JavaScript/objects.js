let example6 = {
    firstName: 'shruti',
    lastName: 'domadiya',
    address:{
        city: 'surat',
        state: 'gujarat',
        pincode: '395004'
    },
    age: 24,
    contactNo: 9714530984
}
example6.age = 25;

console.log("keys are: " +Object.keys(example6));
console.log("value is: " +Object.values(example6));

console.log("value is: " +Object.entries(example6));

Object.entries(example6).forEach(([key, value]) => {
    console.log(value);
    console.log(key);
});

for (var key in example6) {
    console.log("User " + example6[key] + " is key of " + key); // "User shruti is #234"
}

//challenges
let user = {
    firstName: 'Shruti',
    lastName: 'Domadiya'
}

user['address'] = {
    city:'Surat',
    state: 'Gujarat'
}

user['hobbies'] = ["travelling", "dancing", "swimming"];

user['gold_member'] = "true";
console.log(user);

//output
// user = {firstName:'shruti',
//         lastName: 'Domadiya',
//         address: {
//             city:'Surat',
//             state: 'Gujarat'
//         },
//         hobbies: ["travelling", "dancing", "swimming"],
//         gold_member: true
//     }

