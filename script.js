const passwordElements = document.getElementById('password');
const copyElements = document.getElementById('copy');
const lenElements = document.getElementById('len');
const lowerElements = document.getElementById('lower');
const upperElements = document.getElementById('upper');
const numberElements = document.getElementById('number');
const symbolElements = document.getElementById('symbol');
const generateElements = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*()_+-*/=,.<>;:";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenElements.value;

    let password = '';

    for (let i=0; i < len; i++) {
        const x = generateX();
        password += x;
    }

    passwordElements.innerText = password;

}

function generateX() {
    const xs = [];

    if (upperElements.checked) {
        xs.push(getUppercase())
    }

    if (lowerElements.checked) {
        xs.push(getLowercase())
    }

    if (numberElements.checked) {
        xs.push(getNumber())
    }

    if (symbolElements.checked) {
        xs.push(getSymbol())
    }

    if (xs.length === 0) return "";
    
    return xs[Math.floor(Math.random() * xs.length)];
}

generateElements.addEventListener('click', generatePassword);

copyElements.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    const password = passwordElements.innerText;

    if (!password) {
        return;
    }

    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
});