// console.log('Hello World');
// var person = "John";
// console.log('Hello, ' + person);
// var greeting = "Hello ";
// console.log(greeting + person);

// greeting = "Hi ";
// console.log(greeting + person);


// for (var i = 1; i<6; i++){
//     console.log(i)
// }
// console.log('Counting completed!')


// for (var i = 5; i>0; i--){
//     console.log(i);
// }
// console.log('Countdown finished!');

var cubes = 'ABCDEFG';

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}