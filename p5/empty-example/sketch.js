let grid;
let score = 0;
let gamestatus =false;

function setup() {
  createCanvas(400, 400);
  noLoop();
  grid = [[0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ];
  updateCanvas();
  addNumber();
  addNumber();
  updateCanvas();

}


function addNumber (){
	let options = [];
  for (let i=0; i<4;i++){
  	for (let j=0; j<4;j++){
      if (grid[i][j] === 0){
      	options.push({x: i, y:j});
      }
    }
  }
  if (options.length >0){
  	let spot = random(options);
    let r = random(1);
    grid[spot.x][spot.y] = r>0.5?2:4;
    
  }

  

}

function updateCanvas() {
  background(255);
  drawGrid();
  select("#score").html(score);
  
}

function slide(row){
  let arr = row.filter(val=>val);
  let missing = 4 - arr.length;
  let zeros = Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
	
}


function drawGrid(){
	let w =100;
  
  for (let i=0; i<4;i++){
  	for (let j=0; j<4;j++){
      noFill();
      strokeWeight(2);
      stroke(0);
			rect(i*w,j*w,w,w);
      
      let val = grid[j][i];
      
      if (val!=0){
        textAlign(CENTER,CENTER);
		let s = ""+val;
		let len = s.length-1;
		let sizes = [64,64,32,16,8];
        textSize(sizes[len]);
        fill(0);
        noStroke();
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

function compare(a,b){
	for (let i=0; i<4;i++){
		for (let j=0; j<4;j++){
			if(a[j][i] != b[j][i]){
				return true;
			}
		}
	}
	return false
}

function rotateGrid(grid){
	let temp = [
	 [0,0,0,0],
	 [0,0,0,0],
     [0,0,0,0],
     [0,0,0,0]
    ];
	for (let i=0; i<4;i++){
		for (let j=0; j<4;j++){
			temp[i][j]=grid[j][i];
		
		}
	}
	for (let i=0; i<4;i++) {
		temp[i].reverse()
	}
	return temp
}

function flipGrid(grid,flipmode){
	for (let k = 0; k<flipmode; k++){
		grid = rotateGrid(grid);

	}
	return grid
}


function keyPressed(){
	let flipmode = 0;
	if (keyCode === RIGHT_ARROW){
		flipmode = 0;
	} else if(keyCode === LEFT_ARROW) {
		flipmode = 2;
	}
	else if(keyCode === UP_ARROW) {
		flipmode = 1;
	}
	else if(keyCode === DOWN_ARROW) {
		flipmode = 3;
	}else {flipmode = -1;}
	if (flipmode >=0 ){
		let past = copyGrid(grid);
		grid = flipGrid(grid,flipmode);
		for (let i =0; i<4;i++){
			grid[i] = operate(grid[i]);
		}
		grid = flipGrid(grid,4 - flipmode);
		let changed = compare(past,grid);
		if (changed){
			addNumber();
		}
	}
	updateCanvas();
	let gameover = isGameOver();
	if (gameover){
		console.log("Gameover");
	}
	gamestatus = isGameWon();
	if (gamestatus){
		console.log("Congrats! You win!");
	}
}



function operate(row){
	row = slide(row);
	row = combine(row);
	row = combine(row);
	row = slide(row);
	return row;
}	


function combine(row){
  for (let i=3; i>=1; i--){
  	let a = row[i];
    let b = row[i-1];
    if (a ==b){
      row[i] = a+b;
	  score += a+b;
      row[i-1] = 0;
      
    }
  }
  return row;
}


function isGameOver() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] == 0) {
        return false;
      }
      if (i !== 3 && grid[i][j] === grid[i + 1][j]) {
        return false;
      }
      if (j !== 3 && grid[i][j] === grid[i][j + 1]) {
        return false;
      }
    }
  }
  return true;
}

function isGameWon() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] == 2048) {
        return true;
      }
    }
  }
  return false;
}
  
  
  
  