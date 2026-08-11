// Basic arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Nice try, genius!"; // Snarky error message for divide by 0
    }
    return a / b;
}

// Global state variables
let firstOperand = null;
let currentOperator = null;
let secondOperand = null;
let shouldResetDisplay = false;

// Central operate dispatcher
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}
const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.btn-number');

function appendNumber(number) {
    // Reset display if starting a new entry after pressing an operator or equals
    if (display.textContent === '0' || shouldResetDisplay) {
        display.textContent = '';
        shouldResetDisplay = false;
    }
    
    // Extra Credit: Prevent multiple decimals
    if (number === '.' && display.textContent.includes('.')) return;

    display.textContent += number;
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});
const operatorButtons = document.querySelectorAll('.btn-operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

function setOperator(operator) {
    // If user presses another operator consecutively without entering a new number, update operator
    if (currentOperator !== null && shouldResetDisplay) {
        currentOperator = operator;
        return;
    }

    // Evaluate pair if first operand and operator are already stored
    if (firstOperand !== null && currentOperator !== null) {
        evaluate();
    }

    firstOperand = display.textContent;
    currentOperator = operator;
    shouldResetDisplay = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetDisplay) return;

    secondOperand = display.textContent;
    const result = operate(currentOperator, firstOperand, secondOperand);

    if (typeof result === 'string') {
        display.textContent = result; // Display divide-by-zero error
    } else {
        display.textContent = roundResult(result);
    }

    firstOperand = display.textContent;
    currentOperator = null;
    shouldResetDisplay = true;
}

function roundResult(number) {
    return Math.round(number * 100000) / 100000;
}

function clear() {
    display.textContent = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    shouldResetDisplay = false;
}

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.dataset.operator));
});

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);