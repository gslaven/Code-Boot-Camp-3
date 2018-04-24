/*armed with the above API, yesterdays python practice 
and the new forLoop knowledge build a python script that 
will print all current astronaut names in your python console
*/

// Display variables for the website
console.log("In PythonForLoop.js");
let xhr = new XMLHttpRequest();
xhr.open('GET', "http://api.open-notify.org/astros.json", true);
console.log(xhr);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        displayResults(response);
    }

}

function displayResults(paramResponse) {
    console.log("In displayResults()");
    console.log(paramResponse);
    console.log(document.getElementById('h1Display'));
    let dispText = "----- Current Astronauts in Space ----- <br>";
    for (let astro of paramResponse.people) {
        dispText = dispText + 
            astro["name"] + " on board the " + astro["craft"] + 
            "<br>";
    }
    document.getElementById('h1Display').innerHTML = dispText;
}