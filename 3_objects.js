///console object
//log,warn,error

//process object
//argv,exit,title
var dice=require("./dice");
var die=dice.die;
console.log("Hello ");
console.log(process.title );


dice.size=11;

console.log(dice);
console.log(dice.size);
// console.log(dice.roll());
console.log(dice.totalRolls);
console.log(die);
