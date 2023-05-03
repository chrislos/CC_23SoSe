function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200,200,255);
  angleMode(DEGREES)
  flower(width/2,height/2,random(5,10), random(5,30), random(1,2));

}

function draw() {
  if(mouseIsPressed){
  flower(mouseX,mouseY, random(5,20), random(5,30), random(1,2));
}
  
}


function flower(x, y, leg, amount,size){
  noStroke();

  fill(20,random(220,240),random(0,50));
  rectMode(CORNER);
  rect(x,y,leg, height);

  // HERE WE START TO MOVE THE DRAWING ACCORDING TO THE TRANSLATE XY COORDINATES
  // WE NEED TO DO THIS BECAUS ROTATE IS RELYING TO OUR SHAPE ORIGIN 
  // --> so if we rotate around point (0/0) we don't have any offsets.
  push();
  translate(x,y);

    ellipseMode(RADIUS);
    fill(random(200,255),random(240,255),random(200,255), 220);
    let w = 360/amount;
    for(let i = 0; i <= 180; i += w){
      ellipse(0,0,w,w*2*size);
      rotate(w);
    }
    
    fill(random(230,255),random(200,255),0);
    circle(0,0,w*size);
  pop();

}

function mousePressed(){
  //flower(mouseX,mouseY, random(200,500), random(5,30), random(1,2));
  
  
}