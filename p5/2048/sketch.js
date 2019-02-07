


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



function updateCanvas() {
  background(255);
  drawGrid();
  select("#score").html("Score: "+score);
  select("#step").html("Step: "+step);
  
}






  
  
  
  