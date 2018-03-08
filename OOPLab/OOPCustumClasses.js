/*
Object Oriented Programming
Custom Classes
*/
console.log("Succesfully Loaded OOPCustumClasses.js");
/*
Abstraction
House is my Abstract class.  It is not called directly and serves as the base of what is contained insaide of
*/

//Inheritance

//Polymorphism

//Encapsulation

class Club
{
  constructor(length, shaft, grip, loft) {
    this._length = length;
    this._shaft = shaft;
    this._grip = grip;
    this._loft = loft;
  }

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
}

class Driver {
function Swing() {

}
}

function Results ()
{
  //gives the output div a class, mostly i just wanted a box to appear around the results
  document.getElementById("output").className = "results";
  //instantiate the classes and set the variables
  let varClub = new Club(-1, "testClubShaft", "testClubGrip", -1 );


  //test the club instantiation by changing values
  varClub.Length = 48;
  varClub.Shaft = "Steel";
  varClub.Grip = "Foam";
  varClub.Loft = 12;

  for (var prop in varClub)
  {
    //Turn the results of the function into a HTMLTextNode
    let varResultsNode =
    document.createTextNode(
      "(" +prop + " = " + varClub[prop] + ") // ");

      //Displays the results of the js setting variables and Classes
      document.getElementById("output").appendChild(varResultsNode);
    }
  }
  Results();
