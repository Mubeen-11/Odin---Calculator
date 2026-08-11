// DOM elements
const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.btn-number');
const operatorButtons = document.querySelectorAll('.btn-operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');

// State variables
let firstOperand = null;
let currentOperator = null;
let secondOperand = null;
let shouldResetDisplay = false;

// Basic math functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return "Nice try, genius!";
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
}

function appendNumber(number) {
    if (display.textContent === '0' || shouldResetDisplay) {
        display.textContent = '';
        shouldResetDisplay = false;
    }
    if (number === '.' && display.textContent.includes('.')) return;
    display.textContent += number;
}

function setOperator(operator) {
    if (currentOperator !== null && shouldResetDisplay) {
        currentOperator = operator;
        return;
    }
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
        display.textContent = result;
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

// Extra Credit: Backspace
function handleBackspace() {
    if (shouldResetDisplay) return;
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

// Mouse Event Listeners
numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.dataset.operator));
});

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', handleBackspace);

// Extra Credit: Keyboard Support
window.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
    if (e.key === '.') appendNumber('.');
    if (e.key === '=' || e.key === 'Enter') evaluate();
    if (e.key === 'Backspace') handleBackspace();
    if (e.key === 'Escape') clear();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        setOperator(e.key);
    }
});