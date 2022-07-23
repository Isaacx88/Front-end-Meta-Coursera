//Try-catch block

try {
    console.log(c+d);
} catch (err) {
    //do something here
}

console.log("This line now runs")


//throw
try {
    throw new Error();
} catch (err) {
    console.log(err)
    //do something here
}

console.log("This line now runs")