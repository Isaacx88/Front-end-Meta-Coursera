function addTwoNums (a, b){ 
    try {
        var result = a+b;   

        if (typeof(a) != 'number'){
            throw new ReferenceError("The first argument is not a number!");
        } else if (typeof(b) != 'number'){
            throw new ReferenceError("The second argument is not a number!");
        } else {
            console.log(result);
        }
                
    } catch (err){
        console.log("Error!", err);
    }
}

addTwoNums(5, "5");
console.log("It still works");