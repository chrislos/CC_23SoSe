let chord = [];
let choose;



function setup() {
  createCanvas(windowWidth, windowHeight);
  chord = ["Cmaj7", "G", "F", "Am7"];
  choose = int(random(chord.length));

}

function draw() {
  background(220);


  textAlign(CENTER, CENTER);
  stroke(100);
  textSize(100);
  //console.log(choose);

  text(chord[choose], width/2, height/2);


}


function mousePressed(){
  
  choose = int(random(chord.length));

}