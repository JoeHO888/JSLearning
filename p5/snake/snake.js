function Snake(x,y) {
	this.x = 0;
	this.y = 0;
	
	
	this.xspeed = 1;
	this.yspeed = 0;
	
	this.total = 0;
	this.tail = [];
	
	this.update = function(){
		if (this.total === this.tail.length){
			for (var i = 0;i<this.tail.length-1;i++){
				this.tail[i] = this.tail[i+1];
			}
		}
		if (this.total >=1){
			this.tail[this.total-1] = createVector(this.x,this.y);
		}
		this.x += this.xspeed*10;
		this.y += this.yspeed*10;
		
		this.x = constrain(this.x, 0, width-10);
		this.y = constrain(this.y, 0, height-10);
	}
	
	this.show = function(){
		fill(255);
		rect(this.x,this.y,10,10);
		for (var i = 0;i<this.tail.length;i++){
			fill(255);
			rect(this.tail[i].x,this.tail[i].y,10,10);
		}
		
	}
	
	this.die = function(){
		for (var i = 0;i<this.tail.length;i++){
			var pos = this.tail[i];
			var d = dist(this.x,this.y,pos.x,pos.y);
			if (d<10){
				this.total = 0;
				this.tail = [];
			}
		}
	}
	
	this.dir = function(xspeed,yspeed){
		this.xspeed = xspeed ;
		this.yspeed = yspeed ;
	}
	
	
	this.eat = function(food){
		if (dist(this.x,this.y,food.x,food.y)<10){
			this.total ++;
			return true;
		}
		else{
			return false;
		}
		
	}
}