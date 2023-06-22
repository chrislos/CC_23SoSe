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

    this.bounce = false;
  }


  update(){
    this.bounce = false;
   
    if(this.posX >= width){       // if we reach the x border of the canvas we want to swap + to - et vice versa 
      this.speedX *= -1;
      this.bounce = true;
      // Oliver
      this.posX = width;

    }
    else if(this.posX <= 0){       // if we reach the x border of the canvas we want to swap + to - et vice versa 
      this.speedX *= -1;
      this.bounce = true;
      this.posX = 0;
    }
    else if(this.posY >= height){     // same logic on our y axis
      this.speedY *= -1 ;
      this.bounce = true;
      this.posY = height;
    }
    else if(this.posY  <= 0){     // same logic on our y axis
      this.speedY *= -1 ;
      this.bounce = true;
      this.posY = 0;
    }
    this.posY += this.speedY;                       // assign current speeds to final positions of the Instance
    this.posX += this.speedX; 
  }
  
  
  draw(){
    noStroke();
    fill(this.r,this.g,this.b,200);
    circle(this.posX,this.posY,40);                 // draw current values on screen
  }

  sendBounce(){
    if (this.bounce){
    socket.emit("sendBounce", {
        x: this.posX, 
        y: this.posY, 
        r: this.r, 
        g: this.g, 
        b: this.b
      } 
    );
    }
  }



}

// instead of one Ball we define an empty array "balls"
let balls = [];


// define our socket.io variable
let socket;


function setup() {
  createCanvas(900, 900);

  // send data to following server:
  socket = io.connect("http://localhost:3000"); // either you're working on localhost or you put in your network adress for multiple devices

  // Now we can define dynamically how many Instances of type Ball we would like to initialize
  for (let i = 0; i <= 100; i++){
    balls[i] = new Ball(random(width), random(height), random(3));
  }



}

function draw() {
  background(220,20);

  // frome here we iterate through the whole array and call our Class-Functions
  // note: i < balls.legth. (Last position of array is balls[balls.length-1])
  for (let i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].draw();
    balls[i].sendBounce();
  }


}

function mousePressed(){

  // change red color value on mousePressed
  //note: there's a simplified instruction version how to iterate through a complete array
  // this only works if we want to work with the whole array....
  for (let ball of balls) {
    ball.r = random(255);
    ball.g = random(100, 255);
   
  }

  socket.emit("mousePressed", {mousePressed: "bang"});
  // ---> this statement is the exact same:

  /*
  for (let i = 0; i < balls.length; i++){
     balls[i].r = random(255);
  }
  */


}