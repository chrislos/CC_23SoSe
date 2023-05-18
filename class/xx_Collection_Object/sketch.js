let dict = {
  x : 100,
  y : 120,
  info: "ein bischen infotext",
  nested : {
    width : 200,
    height : 100,
  }
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(100);
  rect(dict.x, dict.y, dict.nested.width,dict.nested.height);
}
