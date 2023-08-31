const inputTxt = document.getElementById("inputText");
const outputTxt = document.getElementById("outputText");
const btnToCsv = document.querySelector("#convertToCsv");
const btnToJson = document.querySelector("#convertToJson");
const sepSelection = document.querySelectorAll("input[name='radio']");
let currentLine = "" 
let result = "";





// JSON zu CSV



btnToCsv.addEventListener("click", outputCsv);
function outputCsv() {
    sepSelection.forEach((r) => {
        if(r.checked){
             splitChar = r.value
        }
    })
    const inputJsonObj = JSON.parse(inputTxt.value);
    
    
    const inputKeys = Object.keys(inputJsonObj[0])  
    inputKeys.forEach(header)
    function header(key) {
        const keysValue = `${key}${splitChar}`
        currentLine = currentLine + keysValue
    }   
    console.log('HEADER currentLine :', Object.keys(inputJsonObj[0]));
    
    
    currentLine = currentLine + "\n"    
    
    inputJsonObj.forEach((obj)=>{
        const inputJsonObjEntries = Object.entries(obj)
        inputJsonObjEntries.forEach(outputCurrentLine)
        function outputCurrentLine(entry)  {    
            const outputValue = `${entry[1]}${splitChar}`;           
            currentLine = currentLine + outputValue;          
        }  
        currentLine = currentLine + "\n"
    })  
    result = result + currentLine;
    outputTxt.value = result
}

// CSV zu JSON


btnToJson.addEventListener("click", outputJson)
function outputJson() {

    const splitTxt = inputTxt.value.split("\n");
    const headTxt = splitTxt.shift()
    const splitHeadTxt = headTxt.split(","); 
    
    sepSelection.forEach((r) => {
        if(r.checked){
             splitChar = r.value
        }
    })
    let result = []
    splitTxt.forEach((obj) => {
        const currentLine = obj.split(splitChar);
        const outputJSON = {} 
        
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