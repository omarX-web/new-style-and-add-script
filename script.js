const resultDiv = document.getElementById("resultDiv");
var equation = "";
function AddNumber(number) {
    equation = equation + number;
    resultDiv.innerText = equation;
}

function calculate() {
    if (equation !="") {
        const result = eval(equation);
        resultDiv.innerText = result;
        equation = "";
    }
}

function ClearDiv() {
    equation = "";
    resultDiv.innerText = 0;
}