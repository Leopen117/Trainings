
/***
 * this function encodes stuff
 * @param word
 */
function duplicateEncoder(word) {
  let result = "";
  let input = word.toLowerCase();
  for (let i = 0; i < input.length; i++) {
    if (input.indexOf(input[i]) == input.lastIndexOf(input[i])) {
      result += "(";
    } else {
      result += ")";
    }

      
  }
  return result
}

  
    
            
  

const foo = duplicateEncoder("Success");
console.log("This is the result : ", foo);