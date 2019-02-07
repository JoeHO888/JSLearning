

let col;
let row;
let rev = 20;




let model;
let optimizer;

let train_x ;
let train_y ;

let xs;

function setup() {
 createCanvas(400,400) ;
 
 col = height / rev ;
 row = width / rev ;
 
 createPredictionSet();
 console.log(xs);
 
 train_x = tf.tensor2d([[0,0],[1,0],[0,1],[1,1]]);
 train_y = tf.tensor2d([[1],[0],[0],[1]]);
 
 model = tf.sequential();
 model.add(tf.layers.dense({units: 4, batchInputShape: [null, 2],activation:'relu'}));
 model.add(tf.layers.dense({units: 1,activation:'sigmoid'}));
 
 
 optimizer = tf.train.adam(0.01);
 
 model.compile({optimizer:optimizer,loss:'meanSquaredError',metrics:'accuracy'});
 
 setTimeout(train, 10);

}

function draw() {
 background(100) ;
 
 paint_count = 0;
 
 tf.tidy(() => {
    // Get the predictions
    let ys = model.predict(xs);
    let y_values = ys.dataSync();

 
	for (var i = 0 ; i< col*row ;i++){
		paint_x = (floor(paint_count / row))*rev;
		paint_y = (paint_count%row)*rev;
		
		center_x = paint_x + rev/2;
		center_y = paint_y + rev/2;
		
		fill(y_values[paint_count]*255);
		rect(paint_x,paint_y,rev,rev);
		fill(255-(y_values[paint_count]*255));
		textAlign(CENTER,CENTER);
		textSize(8);
		text(nf(y_values[paint_count],1,2), center_x, center_y);
		
		paint_count++;
	}
});	

 }



function createPredictionSet(){
	var count = 0;
	xs = [];
	
	for (var i = 0 ; i< row ;i++){
	  for (var j = 0 ; j< col ;j++){
		  
		paint_x = (floor(count / row))*rev;
		paint_y = (count%row)*rev;
		
		center_x = paint_x + rev/2;
		center_y = paint_y + rev/2;
		
		xs.push([center_x / width , center_y / height]);
		count++;
	  }
	}
	xs = tf.tensor2d(xs);
}

function train() {
  trainModel().then(result => {
    console.log(result.history.loss[0]);
	//console.log(tf.memory().numTensors);
    setTimeout(train, 10);
  });
}

function trainModel() {
  return model.fit(train_x, train_y, {
    shuffle: true,
  });
}

