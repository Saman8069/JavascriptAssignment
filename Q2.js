/* Create a calculator function that takes two numbers and an operator (+, -, *, /) as argument of the function and returns the result*/

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

console.log("Enter two numbers for mathematical operations");
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter 1 for addition, 2 for subtracton, 3 for division and 4 for multiplication"));

switch(c){
    case 1:
        console.log("The sum is ", add(a,b));
        break;
    case 2:
        console.log("The difference is ", subtract(a,b));
        break;
    case 3:
        console.log("The division is ", divide(a,b));
        break;
    case 4:
        console.log("The product is ", multiply(a,b));
        break;
    default:
        console.log("Please enter a valid choice");
        break;
}
