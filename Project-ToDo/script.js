let tasks = [];
let userInput = "";

/* stops when done is entered*/
while (true) {
    userInput =  prompt("Enter a task: ");
    /* adds to tasks array if done was not entered */
    if (userInput.toLowerCase() !== "done") {
        tasks.push(userInput);
    }
    else {
        break;
    }
}

//outputs tasks in order
for (let i = 0; i < tasks.length; i++) {
    console.log(`${i+1}: ${tasks[i]}`);
}


//from course
/* tasks.forEach((task, index) => {
    console.log(`${index}: ${task}`);
}); */