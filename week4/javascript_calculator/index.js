const readline = require("readline-sync"); //For including readline-sync

var firstNumber = readline.questionInt("Please enter your first number: ");
var secondNumber = readline.questionInt("Please enter your second number: ");
var readlineSync = require('readline-sync'),
 operations = [ 'add', 'sub', 'mul', 'div'];
 selectedOperator =readlineSync.keyInSelect(operations, "Which operation?");
 switch (selectedOperator) {
    case 0:
        console.log("The result is: " + add(firstNumber, secondNumber));
        break;
    case 1:
        console.log("The result is: " + sub(firstNumber, secondNumber));
        break;
    case 2:
        console.log("The result is: " + mul(firstNumber, secondNumber));
        break;
    case 3:
        console.log("The result is: " + div(firstNumber, secondNumber));
        break;
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}
