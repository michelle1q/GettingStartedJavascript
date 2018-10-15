// var firstDice=5;
// var secondDice=3;

var getDiceRoll=function(){
    console.log("rolling a dice");
    return Math.ceil(6*Math.random());
}
var getDiceSize=function(diceSize){
 var result =Math.ceil(diceSize * Math.random());
 return result;
}
for(var i=0;i<roll;i+=1){
    console.log("*");
}
var showResult=function (){
var firstDice=getDiceRoll();
var secondDice=getDiceRoll();

console.log(firstDice);
console.log(secondDice);
console.log(firstDice+secondDice);
}


//write a for loop to roll the dice 10 times
for(var j=0;j<=10;j++){
    var dice=Math.ceil(6*Math.random());
    console.log(dice);
    if(dice>=4){
        console.log("*");
    }else {
        console.log("-");
    }

}

var thing=[1,2,3,"pizza"];

for(var i=0;i<thing.length;i++){
    console.log(thing[i]);
}

for(var i=0;i<process.argv.length;i++){
    console.log(process.argv[i]);
}
//console.log(6*Math.random());

//var value=6* Math.random();

//var roll=Math.ceil(value); //ceil --always round up e.g 5.9 ---6 / round -- round goes to the closest integer(up or down)/floor always rounds down


showResult();

var roll=getDiceRoll();

for(var i=0;i<10;i+=1){
    console.log(roll);
    roll=getDiceRoll(6);
}

for(var i=0;i<10;i+=1){
//var x; console.log(x); --->undefined

//NaN -not a number
console.log("log");
console.error("error");
console.warn("warn");

}
