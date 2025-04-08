/* Prompts user for number and parses that string to a float*/
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

let operator = prompt("Enter the operator (+, -, *, /):")

/*Switch statement based on the four basic operators*/
switch(operator) {
    case "+":
        console.log("Sum: " + (num1 + num2));
        break;
    case "-":
        console.log("Difference: " + (num1 - num2));
        break;
    case "*":
        console.log("Product: " + (num1 * num2));
        break;
    case "/":
        console.log("Quotient: " + (num1 / num2));
        break;
    default:
        console.log("Please pick a valid operator...")
        break;
}