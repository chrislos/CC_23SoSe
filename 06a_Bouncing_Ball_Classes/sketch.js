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

  // function within Class Ball that can be called by instanceName.draw();
  draw(){
  noStroke();
  fill(this.r,this.g,this.b,200);
  circle(this.posX,this.posY,40);
  }


  update(){
    if(this.posX >= width || this.posX <= 0){
      let choose 

      this.speedX = this.speedX * -1 + random(-1.5,1.5);

    }
    if(this.posY >= height || this.posY <= 0){
      this.speedY = this.speedY *-1 + random(-1.5,1.5);
    }
    this.posY = this.posY + this.speedY;
    this.posX = this.posX + this.speedX;

    console.log(this.posY );
    console.log(this.speedY );



  }

}


let ball1, ball2, ball3, ball4, ball5;

function setup() {
  createCanvas(windowWidth, windowHeight);


  // initiale new Ball instances (looks a bit redundant right? ;-) 
  ball1 = new Ball(random(width), random(height), random(10));
  // ball2= new Ball(random(width), random(height), random(10));
  // ball3 = new Ball(random(width), random(height), random(10));
  // ball4 = new Ball(random(width), random(height), random(10));
  // ball5 = new Ball(random(width), random(height), random(10));

  

}

function draw() {
  background(220,20);

  // ugh looks ugly
  ball1.update();
  // ball2.update();
  // ball3.update();
  // ball4.update();
  // ball5.update();

  ball1.draw();
  // ball2.draw();
  // ball3.draw();
  // ball4.draw();
  // ball5.draw();



}

function mousePressed(){
  ball1.r = random(255);
  // ball2.r = random(255);
  // ball3.r = random(255);
  // ball4.r = random(255);
  // ball5.r = random(255);
}



// callback that takes action as soon as window has been resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createArt();
}
  
