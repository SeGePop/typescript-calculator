"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const firstString = (0, readline_sync_1.question)('Enter first number:\n ');
    const operator = (0, readline_sync_1.question)('Enter operator:\n');
    const secondString = (0, readline_sync_1.question)('Enter second number:\n');
    const validInput = isNumber(firstString) && isOperator(operator) && isNumber(secondString);
    if (validInput) {
        const firstNum = parseInt(firstString);
        const secondNum = parseInt(secondString);
        const results = calculate(firstNum, operator, secondNum);
        console.log(results);
    }
    else {
        console.log('\nInvalid Input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+': return firstNum + secondNum;
        case '-': return firstNum - secondNum;
        case '*': return firstNum * secondNum;
        case '/': return firstNum / secondNum;
    }
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(str) {
    switch (str) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default: return false;
    }
}
main();
//# sourceMappingURL=index.js.map