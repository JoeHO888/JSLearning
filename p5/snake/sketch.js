var snake;

var food;

function setup() {
 createCanvas(400,400);
 snake = new Snake();
 frameRate(5);
 food = createVector(random(width),random(height));
}

function draw() {
  background(0);
  
  
  snake.die();
  snake.update();
  snake.show();

  if (snake.eat(food)){
	food = createVector(random(width),random(height));
  }	  
  
  fill(255,0,0);
  rect(food.x,food.y, 10,10);
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		snake.dir(0,-1);
	}
	if(keyCode == DOWN_ARROW){
		snake.dir(0,1);
	}
	if(keyCode == RIGHT_ARROW){
		snake.dir(1,0);
	}
	if(keyCode == LEFT_ARROW){
		snake.dir(-1,0);
	}
}



