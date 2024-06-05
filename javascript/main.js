function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function square(x) {
    return multiply(x, x);
}

function addSquares(x, y) {
    return add(square(x), square(y));
}

function performAddition() {
    const x = parseFloat(document.getElementById('firstNumber').value);
    const y = parseFloat(document.getElementById('secondNumber').value);
    alert(`${x} + ${y} = ${add(x, y)}`);
}

function performMultiplication() {
    const x = parseFloat(document.getElementById('firstNumber').value);
    const y = parseFloat(document.getElementById('secondNumber').value);
    alert(`${x} * ${y} = ${multiply(x, y)}`);
}

function performSquare() {
    const x = parseFloat(document.getElementById('firstNumber').value);
    alert(`${x}² = ${square(x)}`);
}

function performAddSquares() {
    const x = parseFloat(document.getElementById('firstNumber').value);
    const y = parseFloat(document.getElementById('secondNumber').value);
    alert(`(${x}²) + (${y}²) = ${addSquares(x, y)}`);
}