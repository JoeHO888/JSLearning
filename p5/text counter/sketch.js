

var txt;
var counts = {};
var keys = [];



function preload() {
  txt = loadStrings('rainbow.txt');

}

function setup() {
  var allwords = txt.join("\n")
  var tokens = allwords.split(/\W+/);
  for (var i = 0 ; i < tokens.length; i++){
	var word = tokens[i].toLowerCase();
	if (!/\d+/.test(word)){
		if (counts[word]){
			counts[word]++;
		}else{
			counts[word] = 1;
		}
	}
  }
  keys = Object.keys(counts);
  keys.sort(compare);
  for (var i =0; i < keys.length;i++){
	var key = keys[i]
	if (counts[key] > 1){
		createDiv(key+" " +counts[key]);
	}
  }
  
  noCanvas();
}

function compare(a,b){
  var countA = counts[a];
  var countB = counts[b];
  return countB - countA
}

