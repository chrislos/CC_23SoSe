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
    balls[i].paintHover();
  }
}

function mousePressed(){
  // let's build a logic that checks if I clicked within an ball instance and if NOT I draw a new ball

  // First we need to intrudice a global parameter that initially says: I didn't hit any of my Instances in my Array
  let hit = false;

  // Now I walk through my Array and check all my entries
  // if I hit a ball pressed() will internally change it's alpha colour and gradient.
  for (let ball of balls){
    if (ball.pressed()){
      // and my global variable will switch to true, since we hit something
      hit = true;
    } else { 
      // note. this else needs to be empty because if I hit one this means I didn't any of the others
      // so hit would be most of the time = false. 
      // by ignoring else we create a kind of a one shot logic.
    }
  }

  // if we didn't hit anyting. Add a new instance to my array.
  if (hit == false) {
    // add an Instannce of Ball to array.
    let ball = new Ball(mouseX, mouseY, random(-3,3), random(-3,3));
    ball.r = random(255);
    balls.push(ball); 
  }
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

    this.a = 200;

    // radius of our circles
    this.radius = 30;


    // block hover counter on the exactly as many steps (radius pixels (eg 30px))
    // as long as we might intefere with our mouseposition (hover would stay active all the time)
    this.block = 0;
    
  }

  //bouncing ball logic
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
  
  
  // draw result
  draw(){
    noStroke();
    fill(this.r,this.g,this.b,this.a);
    ellipseMode(RADIUS);                            // we need RADIUS mode to check for correct radius on hover()
    circle(this.posX,this.posY,this.radius);        // draw current values on screen
  }


  // this is a helper function to determine if my mouse is within the radius of my Instance.
  hover(){
    let distance = dist(mouseX, mouseY, this.posX, this.posY);
    if (distance <= this.radius){
      return true;
    } else return false;
  }

  pressed(){
    // my block counter starts at 0.
    // as long as it smaller than my radius my mouse still has the change to stay within the radius
    // (at least as long as my speed value is +1 /-1);
    if(this.block>=this.radius){
      // as soon as my block counter reached at least radius we can freely check for hover

      // note: the following hover() is dependent to pressed() that only gets excecuted if our Mouse has been clicked 
      // ---> it comes straight from global function mousePressed() 
      // nevertheless we need to block the click moment othervise paintHover() in draw() would immediatly overwrite our 
      // mousePressed statement.
      if(this.hover()){
        this.a = 5;
        this.r = random(200);
        this.g = 0;
        this.b = random(255);
        this.radius = 20;

        // I need to "re-block" that particular element again until it moved out of my mouse 
        // otherwise hovered() would kick in and recolour my Instance
        this.block = 0;  
        return true;
      } else false;
    } else this.block++;     // if block is still smaller than radius just add one increment. (at some point we'll reach it!)

  }

  paintHover(){

    // my block counter starts at 0.
    // as long as it smaller than my radius my mouse still has the change to stay within the radius
    // (at least as long as my speed value is +1 /-1);
    if(this.block>=this.radius){
    // as soon as my block counter reached at least radius we can freely check for hover
      if(this.hover()){       
        this.r = 0;           //  re-colourize our Instance.
        this.g = 220;
        this.b = 255;
        this.radius = 40;    // make radius larger 
      }
    } else this.block++;      // if block is still smaller than radius just add one increment. (at some point we'll reach it!)


  }





}

