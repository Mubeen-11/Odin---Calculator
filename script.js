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