function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawGridAdv(xWidth(), yWidth());
}



function drawGrid(){

  noStroke();
  fill(0);
  for (let x=0; x < width; x += 50){
    for(let y = 0; y < height; y += 50){
      rect(x, y, 20, 20);
    }
  }

  console.log("done!");

}


function drawGridAdv(breite, hoehe){

  let offset = 50;
  let w = breite;
  let h = hoehe;


  noStroke();
  fill(0);
  for (let x=0; x < width; x += offset){
    for(let y = 0; y < height; y += offset){
      rect(x, y, w, h);
    }
  }

  console.log("done!");

}


function xWidth(){

  let myReturnValue = map(mouseX, 0, width, -20, 20);

  return myReturnValue;
}


function yWidth(){
  return map(mouseY, 0, height, -20, 20);
}
