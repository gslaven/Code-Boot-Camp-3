/*
Object Oriented Programming
Custom Classes
*/
console.log("Succesfully Loaded OOPCustomClasses.js");
/*
<----- Abstraction ----->
Club is my Abstract class.  It is not called directly and serves as the base 
of what is contained inside each individual golf club instantiated.

<----- Inheritance ----->
Each Individual golf club extends (inherits) it's base properties from the Club class

<----- Polymorphism ----->
Each club will have it's own Swing function, that will produce different results when called

<----- Encapsulation ----->
The getters and setters of each private property, encapsulate, or obfuscate, the actual identity of the private variables they set or get.  The users never have to know what they ar in principle.
*/
class Club
{
  //Constructor takes properties in as input to be used for setting variables on init
  constructor(length, shaft, grip, loft) 
  {
    this._length = length;
    this._shaft = shaft;
    this._grip = grip;
    this._loft = loft;
  }

  // <----- Encapsulation -----> implemented via my Getters and Setters
  get Length()
  {
    return this._length;
  }
  set Length(length)
  {
    this._length = length;
  }

  get Shaft()
  {
    return this._shaft;
  }
  set Shaft(shaft)
  {
    this._shaft = shaft;
  }

  get Grip()
  {
    return this._grip;
  }
  set Grip(grip)
  {
    this._grip = grip;
  }

  get Loft()
  {
    return this._loft;
  }
  set Loft(loft)
  {
    this._loft = loft;
  }

    //Gets weight of club through a calculation by fnCalcWeight
  get Weight()
  {
    return fnCalcWeight(this.Shaft, this.Length);
  }
}
/*Calculates weight of the club using length and shaft material lbs/in**3 estimates from here: http://www.psyclops.com/tools/technotes/materials/density.html &
clube head estimates https://www.calculator.net/conversion-calculator.html
*/
function fnCalcWeight(paramShaft, paramLength)
{
  let varResults = 0;
  
  // What material is this club made out of
  switch (String(paramShaft).toLowerCase())
  {
    case String("Steel").toLowerCase():
      //If Steel, use Density of 0.28 lb/in**3(cubed) + Estimated weight of Club Head
      varResults = (paramLength * 0.28) + 0.440924884; //gram2lbs from web
      break;
    case String("Graphite").toLowerCase():
      //If Graphite, use Density of 0.08 lb/in**3(cubed)
      varResults = (paramLength * 0.08) + 0.440924884; //gram2lbs from web
      break;
    default:
      //If neither, then just return 0
      varResults = 0;
    break;
  }
  return varResults;
}

//Concrete Class - Driver
class Driver extends Club // extends = <----- Inheritance ----->
{
  //<----- Polymorphism -----> Two Swing functions, different results
  Swing() 
  {
    //todo: Use paramClub to modify
    return "<----- DRIVER Swing ----->  Address teed ball with feet set shoulder width apart.  Place ball just inside front foot of your stance.  Start backswing and rotate as far as you comfortablly can.  Start downswing and let 'er rip!!";
  }

}

class NineIron extends Club // extends = <----- Inheritance ----->
{
  constructor(length, shaft, grip, loft, chipping)
  {
    super(length, shaft, grip, loft);
    this._chipping = chipping;
  }
  //<----- Polymorphism -----> Two Swing functions, different results
  Swing()
  {
    if (chipping) 
    {
      return "<----- CHIPPING Nine Iron Swing ----->  Address ball with feet together and slighlty off angle towards hole.  Place ball slightly behind your back foot. Start backswing and rotate 1/2 to 3/4 of a normal backswing.  Start downswing and hit behind the ball in a downward motion.";
    }
    else 
    {
      return "<----- APPROACH Nine Iron Swing ----->  Address ball with feet slightly less than shoulder width apart.  Place ball in line with your back heel. Start backswing and rotate as far as you comfortablly can. Start downswing and hit behind the ball in a downward motion.";
    }
  }

}

//get the output div
let outputDiv = document.getElementById("output");

//Create a HTML Unstructured List (ul) element to store the tests and results for display
let varResultsUl = document.createElement("ul");

function Test (paramClubName, paramClub)
{
  //test the club instantiation with values passed by user
  paramClub.Length = paramClub.Length;
  paramClub.Shaft = paramClub.Shaft;
  paramClub.Grip = paramClub.Grip;
  paramClub.Loft = paramClub.Loft;
  TestDisplayBuilder(paramClubName, paramClub);
}

function TestDisplayBuilder (paramClubName, paramClub)
{
  //Test description to be displayed in HTML
  fnDisplayTestName(paramClubName + " Instantiation, default or no values");

  //Test description to be displayed in HTML
  fnDisplayTestName(paramClubName + " Weight Calculation");
  //Display the Club Weight
  fnDisplayClubWeight(paramClub);

  //Test description to be displayed in HTML
  fnDisplayTestName(paramClubName + " Swing Instructions");
  //Display the Club Swing Instructions
  fnDisplayClubSwing(paramClub);
  
  //Test description to be displayed in HTML
  fnDisplayTestName(paramClubName + " Instantiation, changing values with setters");

  //test the club instantiation by changing values with setters
  fnDisplayLoopPropertiesResults(paramClub);
}

function fnDisplayTestName(paramTestName) 
{
  //Create a new List Item (li) to add to the UL
  let varResultsLI = document.createElement("li");

  //Create a HTML Text Node to store the tests description for display
  let varResultsNode = document.createTextNode(paramTestName);

  //Append the list item
  varResultsLI.appendChild(varResultsNode);

  //Take results of the for loop and display them in a list
  varResultsUl.appendChild(varResultsLI);

  //Displays the results of the js setting variables and Classes
  outputDiv.appendChild(varResultsUl);
}

function fnDisplayLoopPropertiesResults(paramClub) 
{
  //Create a new List Item (li) to add to the UL
  let varResultsLI = document.createElement("li");

  //Create a HTML Text Node to display the tests results
  let varResultsNode = document.createTextNode("");

  //Build HTML by looping through properties
  for (var prop in paramClub)
  {
    //Create a HTML Text Node to store the tests and results for display
    varResultsNode = document.createTextNode("(" +prop + " = " + paramClub[prop] + ") // ");
    varResultsLI.appendChild(varResultsNode);
  }

  //Append Node Text to List Item
    varResultsLI.appendChild(varResultsNode);

  //Take results of the for loop and display them in a list
  varResultsUl.appendChild(varResultsLI);
  //Displays the results of the js setting variables and Classes
  outputDiv.appendChild(varResultsUl);
}

function fnDisplayClubWeight(paramClub) 
{
  //Create a new List Item (li) to add to the UL
  let varResultsLI = document.createElement("li");

  //Create a HTML Text Node to display the tests results
  let varResultsNode = document.createTextNode("");
    
  //Create a HTML Text Node to display the function fnGetWeight results
  varResultsNode = document.createTextNode(paramClub.Weight);
  varResultsLI.appendChild(varResultsNode);

  //Take results of the for loop and display them in a list
  varResultsUl.appendChild(varResultsLI);
  //Displays the results of the js setting variables and Classes
  outputDiv.appendChild(varResultsUl);
}

function fnDisplayClubSwing(paramClub) 
{
  //Create a new List Item (li) to add to the UL
  let varResultsLI = document.createElement("li");

  //Create a HTML Text Node to display the tests results
  let varResultsNode = document.createTextNode("");
    
  //Create a HTML Text Node to display the function fnGetWeight results
  varResultsNode = document.createTextNode(paramClub.Swing);
  varResultsLI.appendChild(varResultsNode);

  //Take results of the for loop and display them in a list
  varResultsUl.appendChild(varResultsLI);
  //Displays the results of the js setting variables and Classes
  outputDiv.appendChild(varResultsUl);
}
//Test New Driver
let varDriver = new Driver(65, "Steel", "Rubber", 12);
//Put it through it's paces
Test("Driver", varDriver);

//Test New Nine Iron with a chipping approach
let varNineIronChip = new NineIron(36, "Graphite", "Super Foam", 45, true);
//Put it through it's paces
Test("9-Iron - CHIPPING Approach", varNineIronChip);

//Test New Nine Iron with a Full approach
let varNineIron = new NineIron(36, "Graphite", "Super Foam", 45, false);
//Put it through it's paces
Test("9-Iron - FULL Approach", varNineIron);
