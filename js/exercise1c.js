var xpos = 0;
var ypos = 0;
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
    colorMode(HSB, 360, 100, 100);
    for (var j = 0; j < 40; j++) {
        for (var i = 0; i < 40; i++) {
            var h = map(j, 0, 40, 0, 360);
            var s = map(j, 0, 40, 0, 100);
            var b = map(j, 0, 40, 0, 100);
            fill(h, s, b);
            rect(10 + xpos + (xstep * i), 10 + ypos + (ystep * j), 20, 20);
        }
    }
}