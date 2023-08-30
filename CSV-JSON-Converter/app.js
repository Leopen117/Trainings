const inputTxt = document.getElementById("inputText");
const outputTxt = document.getElementById("outputText");
const btnToCsv = document.querySelector("#convertToCsv");
const btnToJson = document.querySelector("#convertToJson");
const radio = (",", ";", "tab");



 
// JSON zu CSV


let result = "";

btnToCsv.addEventListener("click", outputCsv);
function outputCsv() {
    const inputJsonObj = JSON.parse(inputTxt.value);
    let currentLine = "";

    inputJsonObj.forEach((obj)=>{
        const inputJsonObjEntries = Object.entries(obj)
        inputJsonObjEntries.forEach(outputCurrentLine)
        function outputCurrentLine(entry)  {
           // header hinzufügen
            const outputValue = `"${entry[1]}";`;
            currentLine = currentLine + outputValue;
        }  
        currentLine = currentLine + "\n"
    })  
    result = result + currentLine;
    outputTxt.value = result
}

// CSV zu JSON


btnToJson.addEventListener("click", outputJson);
    // Auswahl zwischen (,) oder (;)
function outputJson() {
    const splitTxt = inputTxt.value.split("\n");
    const headTxt = splitTxt.shift()
    const splitHeadTxt = headTxt.split(","); 
    console.log("splitTxt", splitTxt);
    console.log("headTxt", headTxt);
    console.log("splitHeadTxt", splitHeadTxt);


 
    let result = []
    splitTxt.forEach((obj) => {
        const currentLine = obj.split(splitChar);
        const outputJSON = {} 
        console.log("currentLine", currentLine)
        currentLine.forEach((obj, i) => {
                outputJSON[splitHeadTxt[i]] = currentLine[i];
                
                
            })
            result.push(outputJSON);
            console.log("outputJSON", outputJSON)
    })
    outputTxt.value = JSON.stringify(result, null, 2);

    console.log("result", result)
    
        
        
    

    
    
}
// headCsvElementforEach((obj) => {
//  const result = obj + currentLine   
//} )












// const obj1 = {
//     name: "Paul",
//     age: 28
// }

// const age = obj1.age

// const str = '{name: "Paul", age: 28}'

// const obj2 = JSON.parse(str)

// obj2.age