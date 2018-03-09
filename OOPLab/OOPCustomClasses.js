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
  get Weight()
  {
    //returns the calculated weight given by the fnCalcWeight function
    return fnCalcWeight();
  }

  /*Calculates weight of the club using length and shaft material lbs/in**3 estimates from here: http://www.psyclops.com/tools/technotes/materials/density.html
  */
  fnCalcWeight()
  {
   let varResults = 0;
   // What material is this club made out of
   switch (Shaft.ToLower())
   {
     case String("Steel").ToLower:
       //If Steel, use Density of 0.28 lb/in**3(cubed)
       varResults = (Length * 0.28);
       break;
     case String("Graphite").ToLower:
       //If Graphite, use Density of 0.08 lb/in**3(cubed)
       varResults = (Length * 0.08);
       break;
     default:
       //If neither, then just return 0
       varResults = 0;
     break;
   }
   return varResults; 
 }
}


class Driver extends Club 
{

}

function Test ()
{
  //get the output div
  let outputDiv = document.getElementById("output");
  //Clear out any potential data in the div
  outputDiv.innerHTML = "";

  //Create a HTML Unstructured List (ul) element to store the tests and results for display
  let varResultsUl = document.createElement("ul");
  outputDiv.appendChild(varResultsUl)

  //Create a new List Item (li) to add to the UL
  let varResultsLI = document.createElement("li");

  //Create a HTML Text Node to store the tests and results for display
  let varResultsNode = document.createTextNode("");

  //Test the club instantiation and set the variables
  let varClub = new Club(-1, "testClubShaft", "testClubGrip", -1 );

  //test the club instantiation by changing values
  varClub.Length = 48;
  varClub.Shaft = "Steel";
  varClub.Grip = "Foam";
  varClub.Loft = 12;

  //Build HTML by looping through properties
  for (var prop in varClub)
  {
  //Create a HTML Text Node to store the tests and results for display
  varResultsNode = document.createTextNode("(" +prop + " = " + varClub[prop] + ") // ");
  varResultsLI.appendChild(varResultsNode);
  }
  //Take results of the for loop and display them in a list
  varResultsUl.appendChild(varResultsLI);
  //Displays the results of the js setting variables and Classes
  outputDiv.appendChild(varResultsUl);
}
Test();
Test();
