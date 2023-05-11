let circleX, circleY, circleR;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width/2;
  circleY = height/2;
  circleR = 200;
}

function draw() {
  background(10);

  // we have a circle
  ellipseMode(RADIUS);                    // ellipsemode needs to be radius, so we can catch a mousehover correctly at the end of draw().
  circle(circleX, circleY, circleR);      

  // and we have a mouseposition relative to that circle
  stroke(0,255,255)
  strokeWeight(3);
  line(mouseX, mouseY, circleX, circleY);
 
  textAlign(CENTER);
  textSize(18);
  fill(0,0,200);
  noStroke();

  text("("+mouseX + " / " + mouseY+")", mouseX,mouseY-20);            //mouseposition
  text("("+circleX + " / " + circleY+")", circleX,circleY+20);        //center of circle

  stroke(200,100);
  strokeWeight(1);
  line(circleX,circleY,mouseX,circleY);                               // length on x axis
  line(mouseX,circleY,mouseX, mouseY);                                // length on y axis

  // what is my actual distance for each dimension?
  let x_length = abs(circleX-mouseX);
  let y_length = abs(circleY-mouseY);

  // good old pythagoras: a^2 + b^2 = c^2 ---> c = sqrt(a^2 + b^2);
  let distance = int(sqrt(x_length*x_length+y_length*y_length));

  // draw length values on screen at correct centered position
  fill(255);
  text("a ("+x_length+")", circleX+(mouseX-circleX)/2, circleY+20);
  text("b ("+y_length+")", mouseX+20, circleY-(circleY-mouseY)/2, );
  text("c ("+distance+")", circleX+(mouseX-circleX)/2-10, circleY-(circleY-mouseY)/2-10);
  
  // draw math function
  fill(255)
  textAlign(LEFT);
  textSize(20);
  text("What is my Distance from (CircleX / CircleY) to (mouseX / mouseY)?", 20, 30);
  text("a^2 + b^2 = c^2", 20, 50);
  text("c = sqrt(" +x_length +"^2 + "+ y_length +"^2) = "+ distance, 20, 70);

  // 🎉 dist() is giving us pythagoras for free! *yay
  let result = dist(mouseX, mouseY, circleX, circleY);
  if (result <= circleR) fill(200,0,200); 
  else fill(10);


}
