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
const proxyURL =
    "https://cors-anywhere.herokuapp.com/";
const requestURL =
    "http://api.suredbits.com/nfl/v0/team/" +
    varTeamId + "/roster";

let xhr = new XMLHttpRequest();
//Using Heroku to allow for CORS issues to not catch up with me
try {
    console.log("In Try");
    xhr.open('GET', proxyURL + requestURL, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
    console.log(xhr);
} catch (error) {
    console.log("In Catch");
    let varErr = "The following error happened: <br>";
    varErr = varErr + er.description;
    document.getElementById('h1Display').innerHTML = varErr;
}

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        console.log("Response Object:");
        console.log("xhr.readyState: " + xhr.readyState);
        console.log("xhr.status: " + xhr.status);
        console.log("xhr.responseText: " + xhr.responseText);
        console.log("Response Object");
        console.log(response[0]);
        console.log(response);
        response.sort(function(a, b){
            return a.fullName.split(" ")[1].localeCompare(b.fullName.split(" ")[1]);
        });
        if (response.length === 0) {
            console.log("Error found in response object");
            // response.current_observation.temp_c);
            displayError();
        } else {
            console.log("No Error");
            // response.current_observation.temp_c);
            displayResults(response);
        }
    }
    else {
        displayMajorError(xhr)
    }
}

function displayResults(paramResponse) {
    let varDispText = [];
    console.log("In displayResults()");
    for (elm in paramResponse) {
        console.log(elm);
        varDispText = varDispText +
            paramResponse[elm]["fullName"] + " (Jersey # - " +
            paramResponse[elm]["uniformNumber"] + ")<br>" +
            `<a href="` +
            paramResponse[elm]["profileUrl"] +
            `">Player Profile on NFL.com</a><br>`;
    }
    console.log(varDispText);
    document.getElementById('h1Display').innerHTML = varDispText;
}

function displayError() {
    console.log("In displayError()");
    document.getElementById('h1Display').innerHTML =
        "Sorry, something has gone wrong with your request at :<br><br>'"
        + proxyURL + "<br>" + requestURL + "'. <br><br>"
        + "Please check the URL and the spelling in it!<br>"
        + "Most likely this is caused by a spelling error "
        + "for the team. <br><br>"
        + "Please try again!<br>";
}

function displayMajorError(paramErrResponse) {
    let varErrText = [];
    console.log("In displayMajorError()");
    console.log(paramErrResponse);
    for (elm in paramErrResponse) {
        varErrText = varErrText + paramErrResponse[elm] + "<br>";
    };
    document.getElementById('h1Display').innerHTML = varErrText;
}
