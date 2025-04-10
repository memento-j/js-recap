/* console.log("Start"); */

//settimeout delays execution, allowing other code to run first
//handler(function to execute), time(in ms), parameters to pass to function
/* setTimeout(() => {
    console.log("Processing...");
    console.log("Hello after 3 secs");
}, 3000);

console.log("End"); */

//setInterval (running a function every x milliseconds)
/* let count = 0;

const interval = setInterval(() => {
    ++count;
    console.log(`Count: ${count}`);

    //clear interval cancels repeateed action set by setInteral
    //kind of like a break statement or base case
    if (count === 5) {
        clearInterval(interval)
    }
}, 1000); */







//Promises = An object thgat manages async operations
//           Wrap a promise object around {async code}
//           "I promise to return a value"
//
//           goes from pending to resolved or rejected
//           pending -> reolved or rejected
//           new promise((resolve,reject) => {asynchronous code})
// reject when async function fails to do something inside a promise

// do these chores in order

// Tasks
// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

//to do these chores in order, you need callbacks
//walkdog, call callback to clean kitchen, call callback to takeouttraash
function walkDog() {
    //put the settimeout in the promise
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //do something and get a value
            const dogWalked = true;
            //if the value matches what we want then resolve, if not, reject
            if (dogWalked) {
                //completion message
                resolve("You walked thee dog");
            }
            else {
                //failure message
                reject("You didn't walk the dog")
            }

        }, 1500);
    });
}

function cleanKitch() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            //do something and get a value
            const kitchenCleaned = true;
            //if value matches what we want then resolve, if not, reject
            if (kitchenCleaned) {
                //completion message
                resolve("You cleeaned the kitchen");
            }
            else {
                //faailure message
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });

}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //do something and get a value
            const tookOutTrash = true; 
            //if value matches what we want then resolve, if not, reject
            if (tookOutTrash) {
                resolve("You took out the trash");
            }
            else {
                reject("You didn't take out the trash");
            }
            
        }, 500);
    })

}

//"callback hell" to ensure these are run in order, 
// instead use promises so you don't need callback hell :D!
/* walkDog(() => {
    cleanKitch(() => {
        takeOutTrash(() => console.log("finished chores :D"));
    });
}); */

//method chaining to ensure these are done in order
//value parameter is the resolvee messaage
/* walkDog().then(value => {console.log(value); return cleanKitch()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("Finished chores :D");}); */


// .then runs when the promise is resolved, .catch runs when it is rejected
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5; //true if larger, false if equal to or smaller
            //teernary, if success resolve, else reject
            success ? resolve("Fetched Data :D") : reject("Error fetching data!")
        }, 2000);
    });
}

//fetchData().then(data => console.log(data)) //succeess (data is what is inside the resolve, can name the data var whatever we want though)
//    .catch(error => console.error(error)); //reject (error is the reject message)



// Async/Await 
// Async = makes a afunction retunr a promise
// Await = makes  an async function wait for a promise

// Allows your to write asynch code in a synchronous maanner
// Async doesn't have resolve or reject params
// Everything after await is placed in an event queue

//cleaner async code makes it look more like synnchronous code


//mark a function that you want to be async/await
/* async function loadData() {
    console.log("fetching data...");
    try {
        const response = await new Promise((resolve) => {
            setTimeout(() => resolve("Data successfully loaded!"), 3000);
        });
        //outputs the result of the promise (the response variable)
        console.log(response); 
    //then if any errors were to happen above it would catch it in the error
    } catch (error) {
        console.error(error);  
    }
}

loadData()
console.log("End of script"); */


//try catch and fetch with awaait
async function fetchUser() {
    //make api call and output user on success
    try {
        //api request response
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        //converts reponse to json format
        const user = await response.json();
        console.log("User info:", user);
        
    } catch (error) {
        //error from the fetch api call if it were to occur would come here
        console.error("Error fetiching user: ", error);
            
    }
}

fetchUser()
