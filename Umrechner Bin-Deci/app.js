const binary = document.getElementById("binaryNumber");
const decimal = document.getElementById("decimalNumber");

function convertDecimalNumber() {
    
    
    const binaryNumber = binary.value
    decimal.value = parseInt(binaryNumber, 2);

    for (let i = 0; i < binaryNumber.length; i++ ) {
        if (binaryNumber[i] == 0 || binaryNumber[i] == 1) {
            binary.style.backgroundColor = "green";
        } else {
            binary.style.backgroundColor = "red";
            return
        }
    }

   
    // if (binaryNumber == 0 ) {
        //     binary.style.backgroundColor = "red";
        // } else if (binaryNumber == 1) {
        //     binary.style.backgroundColor = "red";
        // } else {
        //     binary.style.backgroundColor = "green";
        // }


 

}

document.addEventListener("input", convertDecimalNumber)





// function convertDecimalNumber() {
//     document.querySelector("decimalNumber").innerText = parseInt(binary.value, 2)
    
// }
// document.addEventListener("input", convertDecimalNumber);