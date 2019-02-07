function Cell(i,j){
	this.i = j ;
	this.j = i ;
	this.walls = [true,true,true,true];
	this.visited = false;
	
	this.hightlight = function(){
		var x = this.i*w;
		var y = this.j*w;
		noStroke();
		fill(0,255,0);
		rect(x,y,w,w);
	}
	
	this.checkNeighbors = function(){
		var neighbors = [];
		
		var top = grids[index(i-1,j)];
		var right = grids[index(i,j+1)];
		var bottom = grids[index(i+1,j)];
		var left = grids[index(i,j-1)];
		
		
		if ( top && ! top.visited){
			neighbors.push(top);
		}
		
		if (right && ! right.visited){
			neighbors.push(right);
		}
		
		if (bottom && ! bottom.visited){
			neighbors.push(bottom);
		}
		
		if (left && ! left.visited){
			neighbors.push(left);
		}
		
		if (neighbors.length >0){
			var r = floor(random(0,neighbors.length));
			return neighbors[r];
		}else{
			return undefined;
		}
		
	}	
	
	this.show = function(){
		var x = this.i*w;
		var y = this.j*w;
		stroke(255);
		if (this.walls[0]){
			line(x,y,x+w,y);
		}
		
		if (this.walls[1]){
			line(x+w,y,x+w,y+w);
		}
		
		if (this.walls[2]){
			line(x+w,y+w,x,y+w);
		}
		
		if (this.walls[3]){
			line(x,y+w,x,y);
		}
		
		if(this.visited){
			noStroke();
			fill(255,0,255,100);
			rect(x,y,w,w);
		}
	}	
}