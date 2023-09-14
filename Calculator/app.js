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
reset.addEventListener("click", resetDisplay)
function resetDisplay() {
   usedOpe = "";
   firstNum = "";
   secNum = "";
}
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
        console.log("ope color :", ope.style.color)
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
// switch color of target Operator
//    if (ope.id == minus) {
//        ope.style.color = white;
//        ope.style.backgrounColor = orange;
//    } else if (ope.id == plus) {
//        ope.style.color = white;
//        ope.style.backgrounColor = orange;
//    } else if (ope.id == multiply) {
//        ope.style.color = white;
//        ope.style.backgrounColor = orange;
//    } else if (ope.id == divide) {
//        ope.style.color = white;
//        ope.style.backgrounColor = orange;
//    }

//Headline Button
const headlineBtn = document.getElementById("headline")
headlineBtn.addEventListener("click", hello)
function hello() {
    display.value = "Let's do some calculation!"
}