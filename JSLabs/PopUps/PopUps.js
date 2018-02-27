console.log("PopUps.js loaded");
/*
let answer = prompt("How Are you?");
console.log("The user is "+answer+".");
alert("The user is "+answer+".");s
*/

let varCost = prompt("How much was yor dinner?");

alert("Your should tip: $" + varCost * .15);
alert("Your total bill will tip: $" +  (varCost * 1.15).toFixed(2));
