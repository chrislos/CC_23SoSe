let socket;
let inp;

function setup() {
  createCanvas(windowWidth, windowHeight);

  socket = io.connect("http://localhost:3000");    // connect to node server

  inp = createInput('');
  inp.position(0,0);
  inp.size(width);
  inp.changed(sendToOpenAI);

}

function sendToOpenAI(){
  //console.log(inp.value());
  socket.emit("incomingPrompt", inp.value());
}


function draw() {
  background(220);
}


