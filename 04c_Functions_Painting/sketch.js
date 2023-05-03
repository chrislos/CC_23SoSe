// color
let black, red, yellow, white, blue;
let iterator;
let speed = 0.1;
let colors = [];
let lastColor;


function setup() {
  createCanvas(windowWidth, windowHeight);

  // define color set based on a pantone scheme;
  colors[0] = color(0, 0, 0);         // black
  colors[1] = color(190,30,45);       // red
  colors[2] = color(255,222,23);      // yellow
  colors[3] = color(255,245,200);     // white
  colors[4] = color(33,64,154);       // blue
  lastColor = colors[4];

  noStroke();
  createArt();
}

function draw() {
}


function mousePressed(){
  createArt();
}

function createArt(){
  refreshColors();
  createGrid();
  createQuarterCircle(width/3, height/3*2, random(180,220));
  createQuarterCircle(width/3*2, height/3, random(180,220));
  createTubes();
  createTriangles();
  createVerticalStripes(0,height/3*2, random(20,35));
  createHorizontalStripes(width/3*2,0, random(20,35));
  createLargeArcs();
}




// choose a new color and take care, that newColor won't be the same as LastColor
function pickRandomColor(){
    choose = colors[int(random(5))];

    while (choose == lastColor) {
      choose = colors[int(random(5))];
    }
    lastColor = choose;
    return choose;
}

// choose a new color iteratievly based on colors array;
let next = 0;
function pickNextColor(){
  if (next >= 4) next = 0;
  else next++;
  return colors[next];
}


// define color set based on pantone scheme;
function refreshColors(){
  colors[0] = color(random()*255, 0, 0); // black
  colors[1] = color(190,30,random()*255); // red
  colors[2] = color(255,222,random()*255); // yellow
  colors[3] = color(255,24,random()*255); // white
  colors[4] = color(random()*255,64,154); // blue
}


// draw 3 x 3 grid
function createGrid(){
    for (let x = 0; x < width; x += width/3){
      for (let y = 0; y < height; y += height/3){
        //row
        fill(pickNextColor());
        rect(x,y,width/3,height/3);
      }
    }
}



function createQuarterCircle(x, y, r){
  // quarter circles
  // Check for Einheitskreis Gradzahl vs Bogenmaß (radian)
  // umfang = 2*pi*r, beim einheitskreis ist r = 1, also 2pi
  fill(pickRandomColor());
  arc(x,y,r,r,0,HALF_PI);
  fill(pickRandomColor());
  arc(x,y,r,r,HALF_PI,PI);
  fill(pickRandomColor());
  arc(x,y,r,r,PI,PI+HALF_PI);
  fill(pickRandomColor());
  arc(x,y,r,r,PI+HALF_PI,TWO_PI);  
}

function createLargeArcs(){
    // large arcs
    let r_xl = width/3;
    let r_s = width/3/2;
    fill(pickRandomColor());
    arc(width/3,0,r_xl,r_xl,HALF_PI,PI);
  
    fill(pickRandomColor());
    arc(width/3*2,height,r_xl,r_xl,PI,PI+HALF_PI);
  
    fill(pickRandomColor());
    arc(width/3,0,r_s,r_s,HALF_PI,PI);
  
    fill(pickRandomColor());
    arc(width/3*2,height,r_s,r_s,PI+HALF_PI,TWO_PI);
}



function createTubes(){
  let t = width/4;
  let w = width/8;

  fill(pickRandomColor());
  arc(width,height/3*2,t,t,PI,PI+HALF_PI);
  fill(pickRandomColor());
  rect(width-w,height/3*2,w,height/3);

  fill(pickRandomColor());
  arc(0,height/3,t,t,0,HALF_PI);
  fill(pickRandomColor());
  rect(0,0,w,height/3);
}


function createTriangles(){
    // triangle
    fill(pickRandomColor());
    triangle(0,height/3*2,0,height/2,width/6,height/3*2);
    fill(pickRandomColor());
    triangle(width/3*2,0,width/3*2,height/6,width/2,0);
}

function createVerticalStripes(x,y,thick){
 fill(pickRandomColor());
 
 for(x; x <= width/6; x = x + (thick+10)){
  rect(x,y,thick,height/3);
 }

}

function createHorizontalStripes(x,y,thick){
  fill(pickRandomColor());
  for(y; y <= height/6; y = y + (thick+10)){
     rect(x,y,width/3,thick);
  }
}
 
// callback that takes action as soon as window has been resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createArt();
}
  

 