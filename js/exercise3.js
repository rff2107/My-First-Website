// ***** Global variables ***** //
var apiKey = "abdb9cc6bf09abf6215a390e833be94b";
var baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
var city;
var units = "imperial";
var weatherData;
var temperature = 0;
var humidity = 0;
var button;
var windrot = 0;
var windspeed = 0;
var cloudiness = 0;
var Y_AXIS = 1;
var suntextY = 580;
var suntextX = 500;
var tempX = 150;
var tempY = 500;
var windX = 500;
var windY = 250;
var pressureX = 150;
var pressureY = 150;


// ***** Setup function ***** //
function setup(){
	createCanvas(800, 800);
	button = select("#submit");
	city = select("#city");
	button.mousePressed(queryAPI);
    
    from = color(77, 85, 99);
    to = color(145, 182, 242);
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
    cloudiness = weatherData.clouds.all;
    unix_sunrise = weatherData.sys.sunrise;
    unix_sunset = weatherData.sys.sunset;
    pressure = weatherData.main.pressure;
	console.log(weatherData);
}

 function drawArrow(){
     push();
        scale(map(windspeed, 0, 150, 0, 20), 1);
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
 }

function setGradient(x, y, w, h, from, to, axis){
    noFill();
        for (var i = y; i <+ y+h; i++){
            var inter = map(i, y, y+h, 0, 1);
            var c = lerpColor(to, from, inter);
            stroke(c);
            line(x, i, x+w, i);
    }
}


// ***** Draw function ***** //
function draw(){
	background(77, 78, 79);
    colorMode(RGB);

    push();
    fill(255);
    textSize(40);
    text("Is today a good day for a sail?", 20, 50);
    pop();    

    
/*time of data grab
	if (weatherData){
        push();
        fill(255);
        textSize(10);
        text(Date, 10, 780);
        pop();
    }    
*/
    
//Wind arrow labels
    push();
    stroke(255);
    noFill();
    ellipse(windX, windY, 200, 200)
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(CENTER,TOP);
    text("Wind Speed and Direction", windX, windY - 125);
    pop();
    
    push();
    setGradient(windX + 120, windY - 100, 20, 200, from, to, Y_AXIS);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,TOP);
    text("0%", windX + 150, windY - 100);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,CENTER);
    text("50%", windX + 150, windY);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,BOTTOM);
    text("100%", windX + 150, windY + 100);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,TOP);
    text("Cloud Cover", windX + 120, windY - 125);
    pop();
    
//temperature labels
    push();
    fill(255);
    textSize(10);
    textAlign(CENTER,TOP);
    text("temperature", tempX + 10, tempY + 210);
    pop();
    
    push();
    noFill();
    stroke(255);
    rect(tempX, tempY, 20, 200);
    pop();

    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,TOP);
    text("128 F", tempX + 30, tempY);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,CENTER);
    text("96 F", tempX + 30, tempY + 50);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,CENTER);
    text("64 F", tempX + 30, tempY + 100);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,CENTER);
    text("32 F", tempX + 30, tempY + 150);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,BOTTOM);
    text("0 F", tempX + 30, tempY + 200);
    pop();
    
//temperature    
	noStroke();
	if (weatherData){
        push();
        rectMode(CORNERS);
        fill(178, 8, 34);
		rect(tempX, tempY + 200, tempX + 20, tempY + 200 - map(temperature, 0, 128, 0, 200));
        pop();
    }
    
    push();
    noFill();
    stroke(255);
    rect(tempX, tempY, 20, 200);
    pop();
    
    push();
    noFill();
    stroke(255);
    line(tempX, tempY + 25, tempX + 20, tempY + 25);
    line(tempX, tempY + 50, tempX + 20, tempY + 50);
    line(tempX, tempY + 75, tempX + 20, tempY + 75);
    line(tempX, tempY + 100, tempX + 20, tempY + 100);
    line(tempX, tempY + 125, tempX + 20, tempY + 125);
    line(tempX, tempY + 150, tempX + 20, tempY + 150);
    line(tempX, tempY + 175, tempX + 20, tempY + 175);
    pop();
    
//atmospheric pressure labels
    push();
    fill(255);
    textSize(10);
    textAlign(CENTER,TOP);
    text("atmospheric pressure", pressureX + 10, pressureY - 25);
    pop();
    
    push();
    noFill();
    stroke(255);
    rect(pressureX, pressureY, 20, 200);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,TOP);
    text("1085 hPa", pressureX + 30, pressureY);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(RIGHT,TOP);
    text("32.04 inHg", pressureX - 10, pressureY);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,CENTER);
    text("978 hPa", pressureX + 30, pressureY + 100);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(RIGHT,CENTER);
    text("25.69 inHg", pressureX - 10, pressureX + 100);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,BOTTOM);
    text("870 hPa", pressureX + 30, pressureY + 200);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(RIGHT,BOTTOM);
    text("28.87 inHg", pressureX - 10, pressureY + 200);
    pop();
    
//atmospheric pressure
    noStroke();
	if (weatherData){
        push();
        rectMode(CORNERS);
        fill(214, 214, 214);
		rect(pressureX, pressureY + 200, pressureX + 20, pressureY + 200 - map(pressure, 870, 1085, 0, 200));
        pop();
    }
    
//sunrise and sunset labels
    push();
    stroke(255);
    noFill();
    ellipse(suntextX, suntextY, 200, 200);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(CENTER,TOP);
    text("sunrise and sunset", suntextX, suntextY + 130);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(CENTER,BOTTOM);
    text("noon", suntextX, suntextY - 110);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(LEFT,CENTER);
    text("6pm", suntextX + 110, suntextY);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(CENTER,TOP);
    text("midnight", suntextX, suntextY + 110);
    pop();
    
    push();
    fill(255);
    textSize(10);
    textAlign(RIGHT,CENTER);
    text("6am", suntextX - 110, suntextY);
    pop();
    
//sunrise and sunset
    if (weatherData){
        push();
        var datetimeX = unix_sunrise*1000;
        function prettyDate(date) {
            return date.getUTCHours() +':'+ date.getUTCMinutes();
        }
        fill(255);
        textSize(10);
        text(nfc((prettyDate(new Date(+datetimeX))), 2, 1), suntextX - 130, suntextY - 70);
        pop();
    }
    
    if (weatherData){
        push();
        
        var datetimeY = unix_sunset*1000;
        function prettyDate(date) {
            return date.getUTCHours() +':'+ date.getUTCMinutes();
        }
        fill(255);
        textSize(10);
        text(nfc((prettyDate(new Date(+datetimeY))), 2, 1), suntextX + 100, suntextY - 70);
    }
   
    push();
    angleMode(DEGREES);
    fill(232, 178, 44);
    ellipseMode(CENTER);
    arc(suntextX, suntextY, 200, 200, map((new Date(+datetimeX)), 0, 24, 0, 360), map((new Date(+datetimeY)), 0, 24, 0, 360));
    pop();
   
 /*   push();
    angleMode(DEGREES);
    fill(232, 178, 44);
    ellipseMode(CENTER);
    arc(suntextX, suntextY, 200, 200, 200, 10);
    pop();
*/
    
//wind arrow - direction and speed    
    if (weatherData){
        
        push();
//        from = color(77, 85, 99);
//        to = color(145, 182, 242);
        var cloudbackground = lerpColor(from, to, map(cloudiness, 0, 100, 1, 0));
        fill(cloudbackground);
        ellipse(windX, windY, 200, 200)
        pop();
        
        push();
        fill(255);
        translate(windX, windY);
        rotate(windrot);
        drawArrow();
        pop();

        push();
        fill(255);
        textSize(20);
        textAlign(CENTER,TOP);
        text(nfc(windspeed, 2, 1) + " mph", windX, windY + 110);
        pop();
        



    }
}