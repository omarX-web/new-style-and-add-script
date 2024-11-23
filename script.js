const resultDiv = document.getElementById("resultDiv");
var equation = "";
function AddNumber(number) {
    equation = equation + number;
    resultDiv.innerText = equation;
}

function calculate() {
    const result = eval(equation);
    resultDiv.innerText = result;
}

function ClearDiv() {
    equation = "";
    resultDiv.innerText = 0;
}