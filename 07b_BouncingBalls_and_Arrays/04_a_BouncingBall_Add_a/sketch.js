// instad of one Ball we define an empty array "balls"
let balls = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220,20);

  // frome here we iterate through the whole array and call our Class-Functions
  // note: i < balls.legth. (Last position of array is balls[balls.length-1])
  for (let i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].draw();
  }
}

function mousePressed(){
  // add an instance entry to the last position of the array via push.
  let ball = new Ball(mouseX, mouseY, random(-3,3), random(-3,3));
  ball.r = random(255);
  balls.push(ball); 
}











class Ball {
  constructor(_posX, _posY, _speedX, _speedY) {
    // we need an internal x,y and speed offsets
    this.posX = _posX;
    this.posY = _posY;

    this.speedX = _speedX;
    this.speedY = _speedY;

    // as well as some colours
    this.r = random(100);
    this.g = 200;
    this.b = random(200);
  }


  update(){
    if(this.posX >= width || this.posX <= 0){       // if we reach the x border of the canvas we want to swap + to - et vice versa 
      this.speedX *= -1;
    }
    if(this.posY >= height || this.posY  <= 0){     // same logic on our y axis
      this.speedY *= -1;
    }
    this.posY += this.speedY;                       // assign current speeds to final positions of the Instance
    this.posX += this.speedX;
  }
  
  
  draw(){
    noStroke();
    fill(this.r,this.g,this.b,200);
    circle(this.posX,this.posY,40);                 // draw current values on screen
  }




}

