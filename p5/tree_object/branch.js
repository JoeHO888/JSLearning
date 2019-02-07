

function branch(begin, end){
	
	this.begin = begin;
	this.end = end;
	this.hasBranch = false;
	this.red = 0;
	this.green = 0;
	this.blue = 0;
	
	this.angle = PI/4 ;
	
	this.show = function(){
		stroke(this.red,this.green,this.blue);
		line(this.begin.x,this.begin.y,this.end.x,this.end.y);
	}
	
	this.branch = function(){
		var dir1 = p5.Vector.sub(this.end, this.begin);
		var dir2 = p5.Vector.sub(this.end, this.begin);
		
		dir1 = p5.Vector.mult(dir1,0.67);
		dir2 = p5.Vector.mult(dir2,0.67);
		
		dir1.rotate(this.angle);
		dir2.rotate(-this.angle);
		
		var newEnd1 = p5.Vector.add(this.end, dir1);
		var newEnd2 = p5.Vector.add(this.end, dir2);
		
		this.hasBranch = true;
		return [new branch(this.end,newEnd1),new branch(this.end,newEnd2)]
	}
	
	this.jitter = function(){
		this.end.x +=random(-1,1);
		this.end.y +=random(-1,1);
	}

}