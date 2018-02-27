console.log("StoryTimePopUps.js has loaded");
function fnAskUser(){
let varWordArray = [];
let varNumberArray = [];

varWordArray.push(prompt("Give me a NOUN - "));
varWordArray.push(prompt("Give me a VERB - "));
varWordArray.push(prompt("Give me an ADJEDCTIVE - "));
varWordArray.push(prompt("Give me a DESTINATION - "));

varNumberArray.push(prompt("Give me a NUMBER - "));
varNumberArray.push(prompt("Give me ANOTHER NUMBER - "));

let varResult = "The " + varNumberArray[0]+ " "
	+ varWordArray[0] + " was " + varWordArray[1] + " towards the "
	+ varWordArray[3] + " which was " + varNumberArray[1] +" as "
	+ varWordArray[2] + " he or she ... or, or ... even THEY thought!!";

alert(varResult);
}
