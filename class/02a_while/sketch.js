function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);


  //

  noStroke();

  fill(0);
  for (let x=0; x < width; x += 50){
    for(let y = 0; y < height; y += 50){
      rect(x, y, 20, 20);
    }
  }





  fill(255);
  let x = 0;
  while (x <= width){
    rect(x, 400, 20, 20);
    x += 50;
  }

  for (let x=0; x < width; x += 50){
    rect(x, 0, 20, 20);
  }

  for(let y = 0; y < height; y += 50){
    rect(0, y, 20, 20);
  }

  console.log("done!");

}


