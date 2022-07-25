// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(dairy) {
    for (var item of dairy){
        console.log(item);
    }
}

logDairy(dairy);
// Task 2
const animal = {
    canJump: true
};
    
const bird = Object.create(animal);
   
bird.canFly = true;    
bird.hasFeathers = true;

function birdCan(){
    for(var key of Object.keys(bird)){
        console.log(key, ":", bird[key]);
    }
}

birdCan(bird);

// Task 3
function animalCan(){
    for (hability in bird){
        console.log(hability, ":", bird[hability]);

    }
}

animalCan(bird);
