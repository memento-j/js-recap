let rollResults = {}

//rolls dice and adds to object that keeps track of each dice roll value's count
function rollDice(min, max, attempts) {
    for (let i = 0; i < attempts; i++) {
        //gets random between min and max
        let roll = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(`Rolled a ${roll}!`);
        
        //first time rolling this number, so add to object and start count at 1
        if (rollResults[roll] === undefined) {
            rollResults[roll] = 1;
        }
        //if already added, simply increment the value
        else {
            rollResults[roll]++;
        }
    }
}

//Displays rolls and their frequency in fomratted string
function displayRolls() {
    console.log("Totals:")
    let keys = Object.keys(rollResults);
    for (let key of keys) {
        console.log(`${key} rolled ${rollResults[key]} time(s)`);
    }
}

rollDice(1, 20, 1000);
displayRolls();