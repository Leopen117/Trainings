function spinWords(string){
    const splitString = string.split(" ")
    splitString.forEach((obj,i) => {
        if (obj.length > 4) {
            const splitObj = obj.split("");
            const revObj = splitObj.reverse();
            const strRevObj = revObj.join('');
            splitString.splice(i, 1, strRevObj);
        }
        
    });
    
    const foo = splitString.join(" ");
    console.log(foo)
}



spinWords("Was passiert denn hier");