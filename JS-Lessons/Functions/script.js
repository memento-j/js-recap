// Arrow Functions/Function Expressions(Anon Func)

//Anonymous Functions Store a function inside a variable
const greet = function(name) {
    return `Hello ${name}`
}

console.log(greet("John"))

//Arrow functions () => {} (shorter syntax) modern way to write functions
//Removes function keyword, and automatically returns one line
// if more than one line, you will need the return statement or the function will reeturn undefined
const square = (num) => num**2;

console.log(square(13))

//Arrow functions with multiple parameters 
const multiply = (a,b) => {
    console.log(`Multiplying ${a} and ${b}`)
    return a*b
}

console.log(multiply(5,6))

//Function Hoisting
//function declaration vs expressions
//function declarations are hoisted and caan be called before deefinition
//bad practice!!!!!!!
//anonymous functions and arrow functions are not hoisted

hello();

function hello() {
    console.log("why does this work? :D js is funny!");
    
}

