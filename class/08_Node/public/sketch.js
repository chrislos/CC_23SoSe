let socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  noStroke();
  fill(100,20,200);

  socket = io.connect("http://10.235.8.10:3000");

  // listen to incoming messages.
  socket.on('serverMouse', ghostPainter);


}

function draw() {
  if (mouseIsPressed){
    circle(mouseX, mouseY, 90);

    let data = {
      x : mouseX,
      y : mouseY
    }
    
    //console.log(data);
    socket.emit('mouse', data);
  }
}


function ghostPainter(message){
  fill(255,0,0);
  circle(message.x, message.y, 90);
}

