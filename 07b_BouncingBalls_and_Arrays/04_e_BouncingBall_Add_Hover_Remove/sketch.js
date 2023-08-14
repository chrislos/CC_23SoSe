let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200,20);
  fill(255);
  textSize(width/2);
  textAlign(CENTER, CENTER);
  text(balls.length, width/2, height/2);

  // Iterate through the balls array and call the update, draw, and paintHover methods for each ball
  for (let i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].draw();
    balls[i].paintHover();
  }
}

function mousePressed() {
  // Check if a ball was pressed. If not, add a new ball.
  let hit = false;

  for (let i = 0; i < balls.length; i++){
    if (balls[i].pressed()){
      // remove entry
      balls.splice(i, 1);
      hit = true;
    }
  }
  
  // If no ball was pressed, create a new ball at the mouse position
  if (!hit) {
    let ball = new Ball(mouseX, mouseY, random(-3,3), random(-3,3));
    balls.push(ball); 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Ball {
  constructor(_posX, _posY, _speedX, _speedY) {
    // Initialize ball properties like position, speed, color, and radius
    this.posX = _posX;
    this.posY = _posY;
    this.speedX = _speedX;
    this.speedY = _speedY;
    this.initial_r = random(100);
    this.initial_g = 200;
    this.initial_b = random(200);
    this.r = this.initial_r;
    this.g = this.initial_g;
    this.b = this.initial_b;
    this.a = 200;
    this.radius = 30;
    this.isHovered = false;
  }

  update() {
    // Handle ball's bouncing off the edges
    if(this.posX >= width || this.posX <= 0) {
      this.speedX *= -1;
    }
    if(this.posY >= height || this.posY <= 0) {
      this.speedY *= -1;
    }
    this.posY += this.speedY;
    this.posX += this.speedX;
  }
  
  draw() {
    // Draw the ball on the canvas
    noStroke();
    fill(this.r, this.g, this.b, this.a);
    ellipseMode(RADIUS);
    circle(this.posX, this.posY, this.radius);
  }

  paintHover() {
    // Change ball's color and size when hovered over
    if (this.hover()) {
      this.r = 0;
      this.g = 220;
      this.b = 255;
      this.radius = 40; 
    } else {
      this.r = this.initial_r;
      this.g = this.initial_g;
      this.b = this.initial_b;
      this.radius = 30;
    }
  }

  hover() {
    // Check if the mouse is within the ball's radius
    let distance = dist(mouseX, mouseY, this.posX, this.posY);
    return distance <= this.radius;
  }

  pressed() {
    // Check if the ball is pressed (i.e., if the mouse is within its radius)
    return this.hover();
  }
}
