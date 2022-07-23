//objects
//key: value

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}


var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table);
console.log(table.color); // 'brown'

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

//Alternative approach to build objects (create empty first, then populate)
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;


//brackets notation
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}