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
      this.speedX = this.speedX * -1;

    }
    if(this.posY >= height || this.posY <= 0){
      this.speedY = this.speedY *-1 ;
    }
    this.posY = this.posY + this.speedY;
    this.posX = this.posX + this.speedX;

  }

}

let balls = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220,20);
  for (let i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].draw();
  }


  console.log(balls.length);


}

function mousePressed(){
  

  let blablibub = new Ball(mouseX, mouseY, random(0.5,1.5));

  balls.push(blablibub);


//   for (let ball of balls){
//     ball.r = random(255);
//     ball.b = random(255);
//     ball.g = random(255);
//   }

//   balls[0].r = 255;
//   balls[0].b = 0;   
//   balls[0].g = 0;   
// }

}


// callback that takes action as soon as window has been resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createArt();
}
  
