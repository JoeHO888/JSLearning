

var grids = [];
var w  = 40;
var current;

var rowCount;
var colCount;

var stack = [];



function setup() {
	createCanvas(800, 800);
	
	rowCount = 800 / w;
	colCount = 800 / w;
	
	for ( var i =0 ; i<rowCount; i++){
		for ( var j =0 ; j<colCount; j++){
			grids.push(new Cell(i,j));
		}
	}
	current = grids[0];
	frameRate(1000);
	
}



function draw() {
	background(0);
	for ( var i = 0; i < grids.length; i++){
		grids[i].show();
	}
	
	current.visited = true;
	current.hightlight();
	var next = current.checkNeighbors();
	if (next){
		
		next.visited = true;
		
		stack.push(current);
		
		removeWall(current,next);
		
		current = next ;
	}else if (stack.length >0 ){
		current = stack.pop();
	}
}


function removeWall(a,b){
	var x = b.i - a.i;
	var y = b.j - a.j;
	if (x==0){
		if (y==1){
			a.walls[2] = false;
			b.walls[0] = false;
		}else{
			a.walls[0] = false;
			b.walls[2] = false;
		}
	}else if (x == 1){
		a.walls[1] = false;
		b.walls[3] = false;
	}else {
		a.walls[3] = false;
		b.walls[1] = false;
		
	}
	

}

function index(i,j){
	if (i<0 || j<0 || i > rowCount-1 || j > colCount -1){
		return  -1;
	}else{
		return j + i * colCount;
	}
}


