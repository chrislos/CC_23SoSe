let flower = [
  {x: 4, y: 0, rgb: [135,206,235]},  // Sky
  {x: 3, y: 0, rgb: [135,206,235]},  // Sky
  {x: 2, y: 0, rgb: [135,206,235]},  // Sky
  {x: 1, y: 0, rgb: [135,206,235]},  // Sky
  {x: 0, y: 0, rgb: [135,206,235]},  // Sky
  {x: 4, y: 1, rgb: [135,206,235]},  // Sky
  {x: 3, y: 1, rgb: [135,206,235]},  // Sky
  {x: 2, y: 1, rgb: [255,0,0]},      // Flower
  {x: 1, y: 1, rgb: [135,206,235]},  // Sky
  {x: 0, y: 1, rgb: [135,206,235]},  // Sky
  {x: 4, y: 2, rgb: [135,206,235]},  // Sky
  {x: 3, y: 2, rgb: [255,0,0]},      // Flower
  {x: 2, y: 2, rgb: [255,255,0]},    // Flower center
  {x: 1, y: 2, rgb: [255,0,0]},      // Flower
  {x: 0, y: 2, rgb: [135,206,235]},  // Sky
  {x: 4, y: 3, rgb: [135,206,235]},  // Sky
  {x: 3, y: 3, rgb: [135,206,235]},  // Sky
  {x: 2, y: 3, rgb: [255,0,0]},      // Flower
  {x: 1, y: 3, rgb: [135,206,235]},  // Sky
  {x: 0, y: 3, rgb: [135,206,235]},  // Sky
  {x: 4, y: 4, rgb: [34,139,34]},    // Ground/Stem
  {x: 3, y: 4, rgb: [34,139,34]},    // Ground/Stem
  {x: 2, y: 4, rgb: [34,139,34]},    // Ground/Stem
  {x: 1, y: 4, rgb: [34,139,34]},    // Ground/Stem
  {x: 0, y: 4, rgb: [34,139,34]}     // Ground/Stem
];

let pixelSize = 80; // Size of the pixel

function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
}

function draw() {
background(220);
for(let pixel of flower) {
  fill(pixel.rgb);
  rect(pixel.x * pixelSize, pixel.y * pixelSize, pixelSize, pixelSize);
}
}
