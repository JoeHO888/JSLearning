
var bird;
var pipes = [];
var score = 0 ;

function setup() {
  createCanvas(400, 400);
  bird = new Bird();
  pipes.push(new Pipe());

}



function draw() {
	select("#score").html(score);
	background(255);
	bird.show();
	bird.update();
	if (frameCount % 100 ==0){
		pipes.push(new Pipe());
		score += 1;
	}
	for (var i = pipes.length-1; i>=0; i--){
		pipes[i].show();
		pipes[i].update();
		if (pipes[i].offscreen()){
			pipes.splice(i,1);
		}
		if(pipes[i].hits(bird)){
			pipes = [];
			bird = new Bird();
			endGame();
		}
	}

}

function keyPressed(){
	if (key == ' '){
		bird.up();
	}
	if (key == 'P'){
		alert("Pause!");
	}
}

function endGame(){
	if (window.confirm("Game Over! Do you want to restart?")) { 
		location.reload();
	}else{
		window.close();
	}
}





  
  
  
  