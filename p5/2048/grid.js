let grid;

function drawGrid(){
	let w =100;
  
  for (let i=0; i<4;i++){
  	for (let j=0; j<4;j++){
	  noFill();
	  let val = grid[j][i];
	  let s = val.toString();
	  if (val!=0){
		stroke(0);
		fill(colorSizes[s].color);

	  }else{
		  noFill();
	   }		
	  if (gridBlank[j][i] ==1) {
		  strokeWeight(15);
	      stroke(200,0,0);
	  }else{
	      strokeWeight(2);
	   stroke(0);
	  }
	  rect(i*w,j*w,w,w,30);
	  if (val!=0){
		  textAlign(CENTER,CENTER);
		  textSize(colorSizes[s].size);
		  noStroke();
		  fill(0);
      	  text(val,i*w+w/2,j*w+w/2)
      }
    }
}
}

function copyGrid(grid){
	let extra = [
	 [0,0,0,0],
	 [0,0,0,0],
     [0,0,0,0],
     [0,0,0,0]
    ];
	for (let i=0; i<4;i++){
		for (let j=0; j<4;j++){
			extra[i][j] = grid[i][j];
		}
	}
	return extra;
}