let choice = 'd';

switch (choice) {
    case 'a':
        console.log("a is selected");
        break;
    case 'b':
        console.log("b is selected");
        break;
    case 'c':
        console.log("c is selected");
        break;
    case 'd':
        console.log("d is selected");
        break;
    default:
        console.log("No case is selected");
}

// Challenge: Customer Upgrade

/*
 1. Our business wants to convince users to upgrade their accounts.
 2. Check a user's account type (switch) of 'shopper', 'super shopper', & 'guest'.
 3. If a user is a 'guest' ask them if they want to upgrade to a 'shopper'.
 4. If a user is a 'shopper' ask if they want to upgrade to a 'super shopper'
 5. If a user is a 'super shopper' tell them they are the best!
 6. If we don't know user's status they are a guest.
*/

let accountType = 'super shopper';

switch(accountType) {
    case 'shopper' :
        console.log("are you want to update your account to super shopper?");
        break;
    case 'super shopper':
        console.log("you are the best");
        break;
    case 'guest' :
        console.log("are you want to update your account to shopper?");
        break;
    default:
        console.log("you are the guest!");
}