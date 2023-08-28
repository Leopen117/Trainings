const inputTextElement = document.getElementById("inputText");
const outputTextElement = document.getElementById("outputText");
const btnJsonToCsv = document.querySelector("#convertToCss");
const btnCsvToJson = document.querySelector("#convertToJson");


 
// JSON zu CSV

const inputJsonObj = JSON.parse(inputTextElement.value);

let result = "";

btnJsonToCsv.addEventListener("click", outputCsv);
function outputCsv() {
    let currentLine = "";

    inputJsonObj.forEach((obj)=>{
        const inputJsonObjEntries = Object.entries(obj)
        inputJsonObjEntries.forEach(outputCurrentLine)
        function outputCurrentLine(entry)  {
            const outputValue = `"${entry[1]}";`;
            currentLine = currentLine + outputValue;
        }  
        currentLine = currentLine + "\n"
    })  
    result = result + currentLine;
    outputTextElement.value = result
}

// CSV zu JSON

btnCsvToJson.addEventListener("click", outputJson);

function outputJson() {
   
    const splitCsvElement = inputTextElement.value.split(";");
   
    splitCsvElement.forEach((obj) => {
        console.log(obj);
    })
    
    
}













// const obj1 = {
//     name: "Paul",
//     age: 28
// }

// const age = obj1.age

// const str = '{name: "Paul", age: 28}'

// const obj2 = JSON.parse(str)

// obj2.age