class Ball {
  constructor(posX, posY, speed) {
    this.posX = posX;
    this.posY = posY;

    this.speedX = speed;
    this.speedY = speed;

    this.r = random(100);
    this.g = 200;
    this.b = random(200);
 
  }

  
  draw(){
  noStroke();
  fill(this.r,this.g,this.b,200);
  circle(this.posX,this.posY,40);
  }

  update(){
    if(this.posX >= width || this.posX <= 0){
      this.speedX *= -1;
    }
    if(this.posY >= height || this.posY  <= 0){
      this.speedY *= -1;
    }
    this.posY += this.speedY;
    this.posX += this.speedX;


  }

}


let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i <= 100; i++){
    balls[i] = new Ball(random(width), random(height), random(10));
  }

}

function draw() {
  background(220,20);
  for (let i = 0; i <= 100; i++){
    balls[i].update();
    balls[i].draw();

  }


}

function mousePressed(){
  for (let i = 0; i <= 100; i++){
    balls[i].r = random(255);
  }

}