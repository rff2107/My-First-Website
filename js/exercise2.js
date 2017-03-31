var xpos = 0;
var ypos = 0;
var xstep = 40;
var ystep = 40;


function setup() {
  createCanvas(800, 800);
}

function draw() {
    background(255);
    stroke(100);
    strokeWeight(1);
    
    for (var j = 0; j < 20; j++) {
        for (var i = 0; i < 20; i++) {
            
            var x1 = 20 + xpos + (xstep * i);
            var y1 = 20 + ypos + (ystep * j);
            var x2 = mouseX;
            var y2 = mouseY;
            var d = int(dist(x1, y1, x2, y2));
            var diameter = map(d, 0, 800, 10, 35);
            fill(map(d, 0, 800, 0, 255));
            ellipse(x1, y1, diameter, diameter);
        }
    }
}