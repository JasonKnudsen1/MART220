var pumpkinImages = [];
var tomatoImages = [];
var count = 0;
var tomatox = [];
var tomoatoy = [];
var x = 10;
var y = 10;
var pumpkinCount = 3;
var tomatoCount = 3;

// getting images preloaded
function preload() {


   for (let i = 0; i < pumpkinCount; i++) {
    pumpkinImages[i] = loadImage("assets/food/pumpkin" + (i + 1) + ".png");
  }

  for (let i = 0; i < tomatoCount; i++) {
    tomatoImages[i] = loadImage("assets/food/tomato" + (i + 1) + ".png");
  }
}

function setup() {
  createCanvas(900, 800);
  for (var i = 0; i < pumpkinImages.length; i++) {
  }
}
// not sure why it all crashes if this setInterval is in function setup?
setInterval(timeIt, 500);
function draw() {

  // keeps images the right size
  for (var i = 0; i < pumpkinImages.length; i++) {
    pumpkinImages[i].resize(0, 200);
    tomatoImages[i].resize(0, 200);
  }

  background(220);
  
  // circle(height / 2, width / 2, 200) // makes sure the draw function is still working, if nothing else is.

  image(pumpkinImages[count], x, y);
  for (var i = 0; i < tomatoImages.length; i++) {
    image(tomatoImages[i], 100 + i * 220, 400);
  }
  textAlign(CENTER, CENTER);
  textSize(20);
  text ("Pumpkin animation cycle array", 150, 250);
    text ("Tomato multi-image display array", 500, 650);
}

function timeIt() {
  count++;
  if (count >= pumpkinImages.length) {
    count = 0;
  }
}