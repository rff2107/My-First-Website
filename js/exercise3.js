// ***** Global variables ***** //
var apiKey = "abdb9cc6bf09abf6215a390e833be94b";
var baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
var city;
var units = "metric";
var weatherData;
var temperature = 0;
var humidity = 0;
var button;

// ***** Setup function ***** //
function setup(){
	createCanvas(800, 800);
	button = select('#submit');
	city = select("#city");
	button.mousePressed(queryAPI);
}

function queryAPI(){
	var query = baseURL + city.value() + "&apiKey=" + apiKey + "&units=" + units;
	loadJSON(query, getWeatherData);
}

function getWeatherData(apiData){
	weatherData = apiData;
	temperature = weatherData.main.temp;
	humidity = weatherData.main.humidity;
	console.log(weatherData);
}

// ***** Draw function ***** //
function draw(){
	background(255);
	fill(0);
	noStroke();
	if (weatherData){
		ellipse(200, 200, temperature *10, temperature * 10);
	}
}