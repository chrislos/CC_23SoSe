

let chord;
let c_x, c_y, c_w, c_h, c_color;
// let y = 0;
let r, g, b;


function setup() {
  createCanvas(windowWidth, windowHeight);


  //init values
  chord = "Cmaj7";      // chord stores our current chord as a String

  c_x = width/2;
  c_y = 0; // c_y starts at 0. because we use it as kind of a counter for each chord event
  c_w = random(300,700);
  c_h = random(250,500); 

  //colors
  r = 100;
  g = random(255);
  b = 20;
}


function draw() {
  background(220);

 
  // as soon c_y starts to increment (from 0 to ...) we check it it reached the bottom. 
  // because we start our drawing at height/2+y we reach the bottom as soon y = 0.5*height
  if ( c_y > 0.5*height) { 
     // choose defines a random parameter to distinguish between different chords later on
    let choose = random(0,100);

   if (chord == "Cmaj7") {      // if my actual chord == Cmaj7 then AWLAYS jump to F and change some colors + dimensions of the rect.
  
      chord = "F";

      c_w = random(300,700);
      c_h = random(250,500); 
      r = random(255);


    }

    else if (chord == "F") {    
      if (choose >= 80 && choose <= 100){       // if chord is is F on the incoming cycle we switch with 20 % certanty (>80) back to Cmaj7
        chord = "Cmaj7";
        
        c_w = random(400,800);
        c_h = random(250,400); 

        g = random(255);
      } else {
        chord = "G";        // .. and with a 80 percent certanty (else) to G
        c_w = random(600,300);
        c_h = random(300,400); 
        
        b = random(255);
      }
    }
    else if (chord == "G") { 
      if (choose > 50){     // here it'w 50/50 between tonika Cmaj7 and minor-paralell Am7 etc ....
        chord = "Cmaj7";

        c_w = random(400,250);
        c_h = random(300,200); 
        
        g = random(255);
      } else {
        chord = "Am7";

        c_w = random(400,600);
        c_h = random(200,250); 

        r = random(255);
        g = random(255);
      }
    }
    else if (chord == "Am7") {
      if (choose > 70){
        chord = "F";

        c_w = random(250,400);
        c_h = random(100,200); 

        r = random(255);

      } else {
        chord = "G";

        c_w = random(600,300);
        c_h = random(300,400); 

        b = random(255);
      }
    }


    // Important: whatever I chose:
    // After I have chosen my chord I Jump back to the middle height of the screen by changing my offset
    // back to zero: eg (height/2 + 0)
    c_y  = 0;      
  }


  // here I draw the large background rect, that follows the mouseYposition
  fill(255,100);
  rectMode(CORNER);
  rect(0, 0, width, mouseY);
  

  // here I declare the alpha values depending on the c_y offset. (the higher the more alpha I want)
  let alpha =  map(c_y ,0,0.5*height, 255, 0);          //y range from 0 to -half of the screen heigt because it is an offster of height/2
  let light_alpha =  map(c_y ,0,0.5*height, 50, 0);     // that alpha version is a bit softer and starts at a high range of 50
  
  //draw rec
  fill(r,g,b,light_alpha);
  noStroke();
  rectMode(CENTER);
  rect(c_x, height/2+c_y -40, c_w, c_h, 30);  // 40 is just a correction to behave a bit better with text. 30 = roundness of the edges

  // Draw Text + Shadow
  textAlign(CENTER);
  textSize(100);

  //shadow text
  fill(0,light_alpha);
  text(chord, width/2+5, height/2+c_y +5); // position is 5px offsetted

  //white text
  fill(255,alpha);
  text(chord, width/2, height/2+c_y );



  // here we update our c_y offset. note that it always takes the old c_y in account
  // and only adds an increment of 0 – 10 depending on the mouseY range of the screen. 
  c_y  = c_y  + map(mouseY,0,height, 0, 10) ;



}


