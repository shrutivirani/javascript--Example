// Challenge: Analytics

/*
 1. Track our user's activity.
 2. While the total updates is under 10 updates keep logging the update count.
 3. After we reach our threshold say, 'No longer tracking the user'.
 4. Change the logic to a do while with it updating just a single time.
*/

let totalUpdates = 0;
while (true) {
    totalUpdates++;
    console.log("you can login")
    if(totalUpdates >= 10) {
        console.log("No longer tracking the user");
        break;
    }
}

do{
    totalUpdates++;
    console.log("you can login")
    if(totalUpdates > 10) {
        console.log("No longer tracking the user");
        break;
    }
}
while(false)


