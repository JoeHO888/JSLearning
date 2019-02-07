function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(51);
  translate(width/2,height/2);

  var a = 100;
  var b = 100;
  var n = 4;
  
  stroke(255);
  noFill();

  beginShape();
  for (var angle = 0; angle<TWO_PI; angle += 0.1 ){

  	var na = 2 / n;
  	var x = pow(abs(cos(angle)),na) * a * sgn(cos(angle));
  	var y = pow(abs(sin(angle)),na) * a * sgn(sin(angle));
  	vertex(x,y);

  }
  endShape(CLOSE);
}

function sgn(x){
	if (x > 0){
		return 1
	}else if( x < 0){
		return -1
	}else {
		return 0
	}
}