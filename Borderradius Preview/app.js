
    const box = document.getElementById("variableBox");
    const textarea = document.getElementById("cssBorderStyleCode");
    

    function changeTextareaValue() {
        
        textarea.value = `border-radius: ${box.style.borderTopLeftRadius} ${box.style.borderTopRightRadius} ${box.style.borderBottomLeftRadius} ${box.style.borderBottomRightRadius};`
    console.log(box.style);
    }
    document.addEventListener("DOMContentLoaded", changeTextareaValue)
    
    function changeCurveLeftTop(e) {
        box.style.borderTopLeftRadius = e.target.value + "%";
        changeTextareaValue();

    }
    document.getElementById("curveLeftTop").addEventListener("input", changeCurveLeftTop);          
       
     
    function changeCurveRightTop(e) {
        box.style.borderTopRightRadius = e.target.value + "%";
        changeTextareaValue();
    }
    document.getElementById("curveRightTop").addEventListener("input", changeCurveRightTop);
        

    
    function changeCurveLeftBottom(e) {
        box.style.borderBottomLeftRadius = `${e.target.value}%`;
        changeTextareaValue();
    }
    document.getElementById("curveLeftBottom").addEventListener("input", changeCurveLeftBottom);

    
    function changeCurveRightBottom(e) {
        box.style.borderBottomRightRadius = `${e.target.value}%`;
        changeTextareaValue();
    }
    document.getElementById("curveRightBottom").addEventListener("input", changeCurveRightBottom);
    
        
    //textarea.value = `border-radius: ${box.style.borderTopLeftRadius} ${box.style.borderTopRightRadius} ${box.style.borderBottomLeftRadius} ${box.style.borderBottomRightRadius};`
                

        















//const inputElements = document.querySelectorAll("input"); 
//console.log(inputElements);
//function getValueFromElement(e) {
    
// }

// inputElements.forEach(getValueFromElement);



// inputElements.forEach(function(e) {
//     const value = e.value;
//     input.addEventListener("value", function(e));
   
//     console.log(value);
// });

// inputElements.forEach((e) => {
//     const value = e.value;
//     console.log(value);
// });

// const elementEckeLO =  
// const valueEckeLO = elementEckeLO.value;
