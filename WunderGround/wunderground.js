/*
Armed with this knowledge create a webpage that takes in city 
and state names for a location then display the 
Current temperature, humidity, cardinal wind direction and 
wind speed for that location
*/
let state = prompt("Enter your State");
let city = prompt("Enter your City");

// Display variables for the website
let dispCityState = ("Conditions currently in " + city + ", " + state + ": \n");
let dispTemp = ("Temperature: \n");
let dispHum = ("Humidity: \n");
let dispWindDirection = ("Wind Direction: \n");
let dispWindSpeed = ("Wind Speed: \n");

// Variables to hold values to be displayed
let varTemp;
let varHum;
let varWindDirection;
let varWindSpeed;

let xhr = new XMLHttpRequest();
xhr.open('GET', "http://api.wunderground.com/api/b237449efd64346c/conditions/q/" +
    state + "/" + city + ".json", true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);

function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        console.log(response);
        console.log("Error in response? ('error' in response)");
        console.log("error" in response);
        if ("error" in response) {
            console.log("Error found in response object");
            // response.current_observation.temp_c);
            displayError();
        } else {
            console.log("No Error");
            // response.current_observation.temp_c);
            varTemp = response.current_observation.temp_f;
            varHum = response.current_observation.relative_humidity;
            varWindDirection = response.current_observation.wind_dir;
            varWindSpeed = response.current_observation.wind_mph;
            displayResults();
        }

    }

}

function displayResults() {
    console.log("displayResults()");
    console.log(document.getElementById('h1Display'));
    document.getElementById('h1Display').innerHTML =
        dispCityState +
        dispTemp + string(varTemp) +
        dispHum + string(varHum) +
        dispWindDirection + string(varWindDirection) +
        dispWindSpeed + string(varWindSpeed);
}

function displayError() {
    console.log("In displayError()");
    document.getElementById('h1Display').innerHTML =
        city + ", " + state + "is not a vaild City, State combination.  Please refresh and try again."
}