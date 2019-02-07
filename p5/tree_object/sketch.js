
var tree = [];

var count = 0;
var leaves = [];

var angle = 0 ;

function setup() {
	createCanvas(1000, 1000);
	var a = createVector(width/2,height);
	var b = createVector(width/2,height-200);
	tree.push(new branch(a,b));
	slider = createSlider(0, TWO_PI, PI/4, 0.01);
}



function draw() {
	background(255);
	for (var i = 0; i<tree.length; i++) {
		var delta1 = random(-1,1);
		var delta2 = random(-1,1);
		
		tree[i].end.x += delta1;
		tree[i].end.y += delta2;
		
		tree[i].show();
		
		tree[i].end.x -= delta1;
		tree[i].end.y -= delta2;
	}
	
	for (var i = 0; i<leaves.length; i++) {
		fill(255,0,100,100);
		noStroke();
		ellipse(leaves[i].x,leaves[i].y,8,8);
	}
}



function mousePressed(){
	var red = random(255);
	var green = random(255);
	var blue = random(255);	
	
	angle = slider.value();
	
	for (var i = 0; i<tree.length; i++) {
		tree[i].angle = angle;
	}
		

	for (var i = tree.length-1; i>=0; i--) {
		if (!tree[i].hasBranch){
			var temp = tree[i].branch();
			
			temp[0].red = red;
			temp[0].green = green;
			temp[0].blue = blue;
			
			temp[1].red = red;
			temp[1].green = green;
			temp[1].blue = blue;
			
			tree.push(temp[0]);
			tree.push(temp[1]);
		}
	}
	if (leaves){
		leaves =[];
	}
	
	if (count >= 5){
		for (var i = tree.length-1; i>=0; i--) {
			if (!tree[i].hasBranch){
				var leaf = tree[i].end.copy();
				leaves.push(leaf);
			}
		}
	}
	count ++ ;

}





  
  
  
  