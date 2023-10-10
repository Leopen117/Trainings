function squareDigits(num){
  var result =  ""
  console.log("num", num.length);
  for (let i = 0; i <= num.length; i++) {
    i =i * i;
    result.push(i);
  };
  
}

squareDigits(3212);