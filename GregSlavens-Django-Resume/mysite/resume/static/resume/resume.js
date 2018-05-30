console.log("In Resume.JS");
function funPath(paramTemplateText, paramID) {
  varReturnPath = window.location.href;
  varReturnPath = varReturnPath.toLowerCase().split("greg-slavens-resumes/")[0];
  varReturnPath = varReturnPath + "greg-slavens-resumes/";
  varReturnPath = varReturnPath + paramTemplateText + "/";
  varReturnPath = varReturnPath + paramID;
  console.log(varReturnPath);
  window.location.href = varReturnPath;
}