import { question } from 'readline-sync';

type Operator = '+' | "-" | "*" | "/";

function main(): void{
    const firstString: string = question('Enter first number:\n ');
    const operator: string = question('Enter operator:\n');
    const secondString: string = question('Enter second number:\n');

    const validInput: boolean = isNumber(firstString) && isOperator(operator) && isNumber(secondString);

    if(validInput){
        const firstNum: number = parseInt(firstString);
        const secondNum: number = parseInt(secondString);
        const results = calculate(firstNum, operator as Operator, secondNum);
        console.log(results)
    }
    else{
        console.log('\nInvalid Input\n')
        main();
    }
    
}

function calculate(firstNum: number, operator: Operator, secondNum: number){
    switch(operator){
        case '+': return firstNum + secondNum;
        case '-': return firstNum - secondNum;
        case '*': return firstNum * secondNum;
        case '/': return firstNum / secondNum;
    }
}

function isNumber(str: string): boolean{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

function isOperator(str: string): boolean{
    switch(str){
        case '+':
            case '-':
                case '*':
                    case '/':
                        return true
        default: return false;
    }
}



main();