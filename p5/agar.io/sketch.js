
var blob;

var blobs = [];
var temp;

function setup() {
	createCanvas(600, 600);
	
	var bigRadius = 64;
	var bigX = width/2;
	var bigY = height/2;
	
	blob = new Blob(bigX,bigY,bigRadius);
	
	for (var i = 0; i<10; i++){

		blobs[i] = new Blob(random(width),random(height),16);
	}
	
}



function draw() {
	background(0);
	translate(width/2 - blob.pos.x, height/2 - blob.pos.y);
	stroke(255);
	blob.show();
	blob.update();
	for (var i = 0; i<blobs.length; i++){
		blobs[i].show();
	}
}



