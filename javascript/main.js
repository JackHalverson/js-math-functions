function addFun() {
    const x = parseFloat(document.getElementById('firstNumber').value);
    const y = parseFloat(document.getElementById('secondNumber').value);
    alert("answer: " + (x+y))
}

function multiplyFun() {
    const x = parseFloat(document.getElementById('firstNumber').value);
    const y = parseFloat(document.getElementById('secondNumber').value);
    alert("answer: " + (x*y))
}

function squareFun() {
    const x = parseFloat(document.getElementById('firstNumber').value);
    const y = parseFloat(document.getElementById('secondNumber').value);
    alert("first number squared: " + (x*x))
}

function addSquaresFun() {
    const x = parseFloat(document.getElementById('firstNumber').value);
    const y = parseFloat(document.getElementById('secondNumber').value);
    alert("answer: " + ((x*x)+(y*y)))
}
