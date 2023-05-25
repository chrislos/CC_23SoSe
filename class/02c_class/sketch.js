class Ball {

  constructor(ix, ypsilon, _speed){
    this.x = ix;
    this.y = ypsilon;

    this.xSpeed = _speed;
    this.ySpeed = _speed;
  }

  paint() {
    fill(0);
    circle(this.x,this.y,30);
  }

  update(){

    if(this.x <= 0 || this.x >= width) {
      this.xSpeed *= -1;
    }

    if(this.y <= 0 || this.y >= height) {
      this.ySpeed *= -1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;

  }
}


let ball1, ball2, ball3;

function setup() {
  createCanvas(400, 400);

  ball1 = new Ball(100,100,2);
  ball2 = new Ball(230,100,random(-3.3));
  ball3 = new Ball(50,100,3);



}

function draw() {
  background(220,50);

  ball1.paint();
  ball1.update();


  ball2.paint();
  ball2.update();


  ball3.paint();
  ball3.update();


}
