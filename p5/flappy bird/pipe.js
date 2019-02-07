function Pipe() {
	this.top = random(height/3);
	this.bottom = random(height/3);
	this.x = width;
	this.w = 20;
	this.speed = 2;

	this.hits = function(bird){
		if (bird.y<this.top || bird.y >height-this.bottom){
			if (bird.x > this.x && bird.x<this.x + this.w){
				this.hightlight = true;
				return true;
			}
		}
	}
	
	this.red = random(255);
	this.green = random(255);
	this.blue = random(255);
	
	this.show = function() {
		fill(this.red,this.green,this.blue);
		rect(this.x,0,this.w,this.top+40);
		rect(this.x,height-this.bottom,this.w,this.bottom);
	}
	
	this.update = function() {
		this.x -= this.speed;
	}
	
	this.offscreen = function(){
		if (this.x < - this.w){
			return true;
		}else{
			return false;
		}
	}
	
	

}