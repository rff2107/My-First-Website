//***** GLobal Variables ****//

var refugeeTable;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 750;
var maxValue = 0;

function preload(){
	refugeeTable = loadTable("../data/RefugeesUNHCR.csv", "csv", "header");
	console.log("Done loading table");
}

function setup(){
	createCanvas(1000, 3000);
	textAlign(RIGHT, TOP);
	textSize(12);
	print(refugeeTable.getRowCount());
	print(refugeeTable.getColumnCount());
	for (var i = 0; i < refugeeTable.getRowCount(); i++){
		maxValue = max(maxValue, refugeeTable.getNum(i, "Total"));
		maxTotal = max(refugeeTable.getNum(i, "Total"), maxTotal);
		maxLabel = max(refugeeTable.getString(i, "Country").length, maxLabel);
	}
	print(maxValue);
}

// Draw function//
function draw(){
	background(255);
	fill(0);
	noStroke();
	for (var i = 0; i < refugeeTable.getRowCount(); i++){
		var rectLength = map(refugeeTable.getNum(i, "Total"), 0, maxValue, 0, maxLength);
		rect(200, 50 + 20*i, rectLength, 15);
	}
	for (var i = 0; i < refugeeTable.getRowCount(); i++) {
		text(refugeeTable.getString(i, "Country"), 195, 50+20*i);
	}
}
