var xstep = 50;
var ystep = 50;
//var fillstep = ?;

function setup() {
  createCanvas(500, 500);
    colorMode(HSB);
    background(0, 0, 100);
    noStroke();
}

function draw() {
    colorMode(HSB, 100);
    for (var i = 0; i < xstep; i++) {
        for (var j = 0; j < ystep; j++) {
            var hue = i*2;
            var saturation = j*2;
            var squareX = i*10;
            var squareY = j*10;
     
            fill(hue, saturation, 100);
            rect(squareX, squareY, 10, 10);
        }
    }
}
