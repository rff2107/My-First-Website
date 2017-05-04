var xstep = 20;
var ystep = 20;
//var fillstep = ?;

function setup() {
  createCanvas(800, 800);
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
