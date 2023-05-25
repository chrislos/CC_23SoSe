let socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  // send data to following server:
  socket = io.connect("http://localhost:3000"); // either you're working on localhost or you put in your network adress for multiple devices

  // liston to incoming messages:
  socket.on('serverMousePos', ghostPainter);
  noStroke();

  
  

}

function draw() {
  //background(220);
}

function mousePressed() {
  fill(100,20,200);
  circle(mouseX,mouseY,100);
}


function touchMoved() {
  circle(mouseX,mouseY,100);
  let data = {
    x : mouseX,
    y : mouseY
  }
  // let data = [mouseX, mouseY]; <--- this would also work

  socket.emit('mousePosition', data);
  return false; // sobald p5js ein false statement aus touchMoved bekommt 
                //verhindert es das Default-Behavior eines Phones(in diesem Fall Scrolling)
}


function ghostPainter(msg){
fill(255,0,0);
circle(msg.x,msg.y,100);
}

