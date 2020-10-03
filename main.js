let makeCalendar = require("./lab-three.js").makeCalendar;
let getDayOfTheWeek = require("./lab-three.js").getDayOfTheWeek;
let isLeapYear = require("./lab-three.js").isLeapYear;
let getCenturyCode = require("./lab-three.js").getCenturyCode;

let readlineSync = require('readline-sync');
 
let userInput = readlineSync.question('Please enter a date:\ ');
console.log('The day of the week is ' + (getDayOfTheWeek(userInput)));