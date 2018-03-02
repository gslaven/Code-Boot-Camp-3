let harryPotterVisible = true;
function HideNSeek()
{
  if(harryPotterVisible === true)
  {
    document.getElementById("harry").style.visibility = "hidden";
    harryPotterVisible = false;
  }
  else
  {
    document.getElementById("harry").style.visibility = "visible";
    harryPotterVisible = true;
  }
}

//For my Personal About Me Page
let skillsVisible = true;
console.log(skillsVisible)
function fnToggleSkillsMatrix()
{
  if(skillsVisible === true)
  {
    console.log("true branch")
    console.log(skillsVisible)
    document.getElementById("skillsmatrix").style.visibility = "hidden";
    skillsVisible = false;
    console.log(skillsVisible)
  }
  else
  {
    console.log("false branch")
    console.log(skillsVisible)
    document.getElementById("skillsmatrix").style.visibility = "visible";
    skillsVisible = true;
    console.log(skillsVisible)
  }
}

let blockQuoteStyleChanged = true;
function fnToggleBlockQuoteStyle()
{
  if(blockQuoteStyleChanged === true)
  {
    console.log("true branch")
    console.log(document.getElementById("blqMyInfo").classname)
    document.getElementById("blqMyInfo").classname = "quoteChanged";
    blockQuoteStyleChanged = false;
    console.log(document.getElementById("blqMyInfo").classname)
  }
  else
  {
    console.log("false branch")
    console.log(blockQuoteStyleChanged)
    document.getElementById("blqMyInfo").classname = "quote";
    blockQuoteStyleChanged = true;
    console.log(document.getElementById("blqMyInfo").classname)
  }
}

function fnTest()
{
  document.getElementById("gregsH1").className = "quoteChanged";
}

function fnPTest()
{
  document.getElementById("gregsP").className = "quoteChanged";
}
