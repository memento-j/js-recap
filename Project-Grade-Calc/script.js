 //ask 3 times for input and stores into an array to return
function getScores(){
    let scores = []
    for (let i=0; i < 3; i++) {
        scores[i] = parseFloat(prompt(`Input Test Score ${i+1}`)) / 100
    }
    return scores
}

//calculates the average based off an array of giveen scores
function calcAverage(scores) {
    let average = 0;
    for (let i = 0; i < scores.length; i++) {
        average += scores[i];
    }
    return average/scores.length;
}

//based on the average, a grade is assigned
function assignGrade(average) {
    if (average >= .90) {
        return "A"
    }
    else if (average >= .80) {
        return "B"
    }
    else if (average >= .70) {
        return "C"
    }
    else if (average >= .60) {
        return "D"
    }
    else {
        return "F"
    }
}


let scores = getScores();
let average = calcAverage(scores);
let grade = assignGrade(average);
console.log(`Your average score is: ${average}`);
console.log(`Your grade is: ${grade}`);