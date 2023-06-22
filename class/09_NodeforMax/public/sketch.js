let socket;
let inp;

let textReply;

function setup() {
  createCanvas(windowWidth, windowHeight);

  socket = io.connect("http://localhost:3000");    // connect to node server
  socket.on("fromMax", maxText);

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
  textSize(30);
  textAlign(CENTER, CENTER);
  text(textReply, width/2, height/2);
}



function maxText(data){


  if (data == "clearNode"){
      textReply ="";
  } else {
    textReply = textReply + data  + " ";
  }
  console.log(textReply);
}


