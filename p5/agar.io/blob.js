

function Blob(x,y,r){
	this.pos = createVector(x,y,r);
	this.radius = r ;

	
	this.show = function(){
		ellipse(this.pos.x,this.pos.y,this.radius*2,this.radius*2);
	}
	
	this.update = function(){
		var vel = createVector(mouseX,mouseY);
		vel.sub(this.pos);
		vel.setMag(3);
		this.pos.add(vel);
	}
	
	
	
}