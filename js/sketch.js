var circleSize = 50;

function setup(){
	createCanvas(500,500);
	var i = 0;
	while(i < 100){
		var x = 2;
		print(i);
		i++;
	}
	print(x);
}


function draw(){
//	background(0, 100, 100);

	if(mouseIsPressed){
		fill(255);
	}
	else {
		fill(0);
	}

	stroke(200, 0, 50);
	strokeWeight(1);
	ellipse(mouseX, mouseY, circleSize, circleSize);
}