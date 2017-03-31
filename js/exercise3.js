// ***** Global variables ***** //
var apiKey = "abdb9cc6bf09abf6215a390e833be94b";
var baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
var city;
var units = "metric";
var weatherData;
var temperature = 0;
var humidity = 0;
var button;
var windrot = 0;
var windspeed = 0;
var cloudiness = 0;


// ***** Setup function ***** //
function setup(){
	createCanvas(800, 800);
	button = select("#submit");
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
    windrot = weatherData.wind.deg;
    windspeed = weatherData.wind.speed;
    cloudiness = weatherData.clouds;
	console.log(weatherData);
}

// ***** Draw function ***** //
function draw(){
	background(255);
    from = color(77, 85, 99);
    to = color(145, 182, 242);
    var cloudbackground = lerpColor(from, to, map(cloudiness, 0, 100, 0, 1));
    
    fill(cloudbackground);
    rect(0, 0, 800, 800);
    
	noStroke();
	if (weatherData){
        push();
        fill(100, 100, 100);
		rect(200, 200, 20, temperature * 10);
        pop();
    }
    if (weatherData){
        push();
        fill(115, 158, 226);
        translate(400, 200);
        scale(map(windspeed, 0, 150, 0, 20), 1);
        rotate(windrot);
        beginShape();
        vertex(50, 0);
        vertex(20, 40);
        vertex(20, 20);
        vertex(-50, 20);
        vertex(-50, -20);
        vertex(20, -20);
        vertex(20, -40);
        endShape(CLOSE);
        pop();
        
        push();
        fill(255);
        textSize(20);
        textAlign(CENTER,TOP);
        text(nfc(windspeed, 2, 1) + " mph", 400, 310);
        pop();
        
        push();
        fill(255);
        textSize(30);
        textAlign(CENTER,TOP);
        text("Wind Speed", 400, 65);
        pop();

        push();
        stroke(255);
        noFill();
        ellipse(400, 200, 200, 200)
        pop();
    }
}