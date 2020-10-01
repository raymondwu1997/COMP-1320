let fruits = ["Apple", "Orange", "Plum"];

fruits.pop();//removes item from array
//ex. var value = fruits.pop();
//console.log(fruits;) 
fruits.shift();
//first item moves to back of the list
fruits.unshift();
//moves something to front of list
fruits.length();
fruits.push();

var readlineSync = require("readline-sync";
//Keep asking the user to guess a number, use readline to get input from user
//installl in terminal watch video when teacher posts
function guessGame(); [
    var correctNum = 30;
    var guess = "";
    do {
        guess = parseInt(readlineSync.question("Guess a number: "));
        if ( guess < correctNum) {
            console.log("Too low");
        } else if (guess > correctNum) {
            console.log("Too high");
        }
    } while (guess != correctNum);
    console.log("Good job!");
]

guessGame();
-----------------------------
var arr = ["hi", 2, 3];
//           0   1  2

//can have an array in an array
[
    []
]

arr[0] //=> Armann is at position 0
var ob = {
    "firstName": "Armann",
    "country": "Canada",
}

obj["firstName"] //=> Armann
console.log(obj["firstName"] + obj["country"]);
