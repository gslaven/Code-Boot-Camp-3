/*
https://suredbits.com/api/
NFL Teams and stats from https://suredbits.com/api/nfl/team/

http://api.suredbits.com/nfl/v0/team/atl/roster
http://api.suredbits.com/nfl/v0/team/atl/schedule
*/
let varAtlName = "Atlanta Falcons";
let varTeamId = "ATL";
console.log(varAtlName + ", TeamID: " + varTeamId);

/*
This is here to allow for Cross origin access requests
this shpould allowme to query info from the server
at sured bits and  not have any problems
*/
var { xhr, proxyURL, requestURL } = pullATLData();

function pullATLData() {
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const requestURL = "http://api.suredbits.com/nfl/v0/team/" +
        varTeamId + "/roster";
    let xhr = new XMLHttpRequest();
    //Using Heroku to allow for CORS issues to not catch up with me
    try {
        console.log("In JS opennig pullATLData Try");
        console.log("xhr.open");
        xhr.open('GET', proxyURL + requestURL, true);
        console.log("xhr.send");
        xhr.send();
        console.log("xhr.addEventListener");
        xhr.addEventListener("readystatechange", processRequest, false);
        console.log("End JS opening pullATLData Try");
    }
    catch (err) {
        console.log("In JS opening Failed Catch");
        let varErr = "The following error happened: <br>";
        varErr = varErr + err.description;
        console.log("varErr:" + varErr);
        createNewDiv(varErr, 0);
        console.log("Just Created a newDiv");
        console.log("End JS opening Catch");
    }
    return { xhr, proxyURL, requestURL };
}

function processRequest(e) {
    console.log("In processRequest");
    console.log("xhr.readyState:" + xhr.readyState);
    console.log("xhr.status:" + xhr.status);
    //console.log("xhr.responseText:" + xhr.responseText);
    console.log(xhr);
    try {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("In processReuest: If statement");
            let response = JSON.parse(xhr.responseText);
            console.log("response.length:  " + response.length);
            console.log(response);
            response.sort(function (a, b) {
                return a.fullName.split(" ")[1].localeCompare(b.fullName.split(" ")[1]);
            });
            if (xhr.responseText.length === 0) {
                console.log("Error found in response object");
                console.log("displayError()");
                displayError();
            } else {
                let varDispText = [];
                let counter = 0;
                for (elm in response) {
                    console.log(elm);
                    varDispText =
                        response[elm]["fullName"] + " (Jersey # - " +
                        response[elm]["uniformNumber"] + ")<br>" +
                        `<a href="` +
                        response[elm]["profileUrl"] +
                        `">Player Profile on NFL.com</a><br>`;
                    counter++;
                    console.log(varDispText);
                    console.log(counter);
                    displayResults(varDispText, counter);
                }
            }
        }
    } catch (error) {
        console.log("In processRequest Catch");
        let varErr = "The following error happened: <br>";
        varErr = varErr + error.description;
        console.log("varErr:" + varErr);
        displayMajorError(varErr, 0);
        console.log("Just Created a newDiv");
    }
}

function displayResults(paramDispTest, counter) {
    console.log("In displayResults()");
    createNewDiv(paramDispTest, counter);
    console.log("Just Created a displayResults div");
}

function displayError(paramErrorText = "") {
    console.log("In displayError()");
    console.log("paramErrorText" + paramErrorText);
    if (paramErrorText.length === 0) {
        paramErrorText =
            "Sorry, something has gone wrong with your request at :<br><br>'" +
            proxyURL + "<br>" + requestURL + "'. <br><br>" +
            "Please check the URL and the spelling in it!<br>" +
            "Most likely this is caused by a spelling error " +
            "for the team. <br><br>" +
            "Please try again!<br>";
    } else {
        paramErrorText = paramErrorText + "<br>" +
            "Sorry, something has gone wrong with your request at :<br><br>'" +
            proxyURL + "<br>" + requestURL + "'. <br><br>" +
            "Please check the URL and the spelling in it!<br>" +
            "Most likely this is caused by a spelling error " +
            "for the team. <br><br>" +
            "Please try again!<br>";

    }
    createNewDiv(paramErrorText, 0);
}

function displayMajorError(paramXHRError) {
    console.log("In displayMajorError()");
    console.log("paramXHRError:");
    console.log(paramXHRError);
    if (paramXHRError.length === 0) {
        paramXHRError =
            "Sorry, something has gone wrong with your request at :<br><br>'" +
            proxyURL + "<br>" + requestURL + "'. <br><br>" +
            "Please check the URL and the spelling in it!<br>" +
            "Most likely this is caused by a spelling error " +
            "for the team. <br><br>" +
            "Please try again!<br>";

    } else {
        paramXHRError = paramXHRError + "<br>" +
            "Sorry, something has gone wrong with your request at :<br><br>'" +
            proxyURL + "<br>" + requestURL + "'. <br><br>" +
            "Please check the URL and the spelling in it!<br>" +
            "Most likely this is caused by a spelling error " +
            "for the team. <br><br>" +
            "Please try again!<br>";

    }
    console.log("paramXHRError: " + paramXHRError);
    createNewDiv(paramXHRError, 0);
}

function createNewDiv(paramDispText, paramSequenceNum = 0) {
    console.log("In createNewDiv");
    console.log("paramDispText:" + paramDispText);
    let newDiv = document.createElement('div');
    newDiv.id = "atlDiv" + paramSequenceNum;
    console.log(paramSequenceNum % 2);
    if (paramSequenceNum % 2 === 0) {
        //This is an even row so give the even class
        newDiv.className = "even"
    } else {
        //This is an odd row so give the odd class
        newDiv.className = "odd"
    }
    console.log(newDiv);
    console.log(paramDispText);
    newDiv.innerHTML = paramDispText;
    document.body.appendChild(newDiv);
}