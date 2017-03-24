// ***** Global variables ***** //
var distances = [];
var maxDistance;
var spacer;

// ***** Preload function ***** //


// ***** Setup function ***** //
function setup(){
    createCanvas(800, 800);
    maxDistance = dist(width/2, height/2, width, height);
    for (var x = 0; x < width; x++){
        distances[x] = [];        
        for (var y = 0; y < height; y++){
            var distance = dist(width/2, height/2, x, y);
            distances[x][y] = distance/maxDistance * 255;
        }
    }
    spacer = 20;
    noLoop();
}

// ***** Draw function ***** //
function draw(){
    background(0);
    for (var x = 0; x < width; x += spacer){
        for (var y = 0; y < height; y += spacer){
            noStroke();
            fill(x, x, x)
            rect(x + spacer/2, y + spacer/2, 20, 20);
        }
    }
}

