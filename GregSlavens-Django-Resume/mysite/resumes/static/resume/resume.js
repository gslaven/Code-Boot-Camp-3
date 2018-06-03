console.log("In Resume.JS");
function funPath(paramTemplateText, paramID) {
  varReturnPath = window.location.href;
  varReturnPath = varReturnPath.toLowerCase().split("resumes/")[0];
  varReturnPath = varReturnPath + "resumes/";
  varReturnPath = varReturnPath + paramTemplateText + "/";
  varReturnPath = varReturnPath + paramID;
  console.log(varReturnPath);
  window.location.href = varReturnPath;
}