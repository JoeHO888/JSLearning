// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// KNN Classification with Feature Extractor
// 1: https://youtu.be/###########
// 2: https://youtu.be/###########
// 3: https://youtu.be/###########

let video;
let features;
let knn;
let labelP;
let ready = false;


function setup() {

  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320,240);
  video.hide();
  features = ml5.featureExtractor("MobileNet",modelReady);
  knn = ml5.KNNClassifier();
  labelP = createP("need training Data");
  //labelP.style("font-size","32pt")
}

function keyPressed(){
  const logits = features.infer(video);

  if (keyCode === LEFT_ARROW) {
    knn.addExample(logits,"left");
  } 
  else if (keyCode === RIGHT_ARROW) {
    knn.addExample(logits,"right");
  }
  else if (keyCode === UP_ARROW) {
    knn.addExample(logits,"up");
  }
  
  //console.log(logits.dataSync());
}

/*
function mousePressed(){
  const logits = features.infer(video);
  if (knn.getNumLabels()>0){
    knn.classify(logits,gotResult);
  }
}
*/

function modelReady(){

  console.log("model ready");

}


function draw() {
  image(video,0,0);

  if (!ready && knn.getNumLabels()>0){
    goClassify();
    ready = true;
  }
}

function goClassify(){
  
  const logits = features.infer(video);
  knn.classify(logits,function (error,result){

    if (error){
      console.log(error);
    }
    else{
      labelP.html(result.label);
      //goClassify();
    }
    
  });

}

