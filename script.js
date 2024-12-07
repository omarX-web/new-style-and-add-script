const resultDiv = document.getElementById("resultDiv");
var equation = "";
const dangerCharcter = ["*", "/", "+", "-"]

function AddNumber(number) {
    const endCharcter = equation.slice(-1)
    if (dangerCharcter.includes(endCharcter) && dangerCharcter.includes(number)) {
        deleteNumber();
    }

    if (equation == "" && dangerCharcter.includes(number)) {
        
    } else {
        equation = equation + number;
        resultDiv.innerText = equation;
        
    }
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

function deleteNumber(params) {
    equation = equation.slice(0, -1)

    if (equation == "") {
        resultDiv.innerText = "0";
    } else {
        resultDiv.innerText = equation;
    }
}