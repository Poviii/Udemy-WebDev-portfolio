//idea is a random number generator that outputs a random number (//*) representing a chance of love happening.
prompt("Please insert the first lovebird's name: ")
prompt("Please insert the first lovebird's name: ") /*This doesn't matter :D*/

function love(){
var chance = Math.random() * 100; //*
chance = Math.floor(chance) + 1;
console.log("The chance of love between them is " + chance + "%");
}
love()