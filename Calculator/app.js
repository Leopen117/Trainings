const display = document.getElementById("display");
const reset = document.getElementById("reset");
const positiveNegative = document.getElementById("positiveNegative");
const result = document.getElementById("result")
const operators = document.getElementsByName("operator");
const digits = document.getElementsByName("digit");
const plusMinus = document.getElementById("plusMinus")
let usedOpe = "";
let firstNum = "";
let secNum = "";

// Reset 
//reset.addEventListener("click", resetDisplay)
//function resetDisplay() {
//    display.value = "";
//}
// Zahlen anzeigen
digits.forEach((obj) => {
    obj.addEventListener("click", addDigit);
    function addDigit() {
        display.value = display.value + obj.innerHTML;
    }
})
// Vorzeichen umdrehen
plusMinus.addEventListener("click", changeSign);
function changeSign() {
    display.value = display.value * -1;
}
// RechenOperation
operators.forEach((ope) => {
    ope.addEventListener("click", calculateOperation);
    function calculateOperation() {
        usedOpe = ope.innerHTML;
        firstNum = parseFloat(display.value);
        display.value = "";
    }
})
// Result
result.addEventListener("click", addResult);
function addResult() {
    secNum = parseFloat(display.value);
    if (usedOpe == "+") {
        display.value = firstNum + secNum;
    } else if (usedOpe == "-") {
        display.value = firstNum - secNum;
    } else if (usedOpe == "x") {
        display.value = firstNum * secNum;
    } else {
        display.value = firstNum / secNum;
    }

}
