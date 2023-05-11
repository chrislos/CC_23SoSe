class Ball {
  constructor(posX, posY, speed) {
    // we need an internal x,y and speed offsets
    this.posX = posX;
    this.posY = posY;

    this.speedX = speed;
    this.speedY = speed;

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

// instad of one Ball we define an empty array "balls"
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Now we can define dynamically how many Instances of type Ball we would like to initialize
  for (let i = 0; i <= 100; i++){
    balls[i] = new Ball(random(width), random(height), random(10));
  }

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

  // change red color value on mousePressed


  //note: there's a simplified instruction version how to iterate through a complete array
  // this only works if we want to work with the whole array....
  for (let ball of balls) {
    ball.r = random(255);
  }

  // ---> this statement is the exact same:

  /*
  for (let i = 0; i < balls.length; i++){
     balls[i].r = random(255);
  }
  */


}