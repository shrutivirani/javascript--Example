// Challenge 1: User Age

/*
 1. Our business wants to keep track of what age range a user falls into.
 2. If they are 12 or younger log 'child'.
 3. If not a child but the user's age is under 20 log 'teenager'.
 4. If neither log 'adult'.
*/

let age = 20;

if(age <= 12){
    console.log("child");
}
else if(age < 20) {
    console.log("teenager");
}
else {
    console.log("adult");
}