var myShapeArray = [];
var idleCount = 10;
var idleImages = [];
var walkImages = [];
var count = 0;
var x = 10;
var y = 10;
var speed = 10;

function preload() {
  for (let i = 0; i < idleCount; i++) {
    idleImages[i] = loadImage("assets/images/idle (" + (i + 1) + ").png");
    walkImages[i] = loadImage("assets/images/walk (" + (i + 1) + ").png");
  }
}


function setup() {
  createCanvas(900, 800);
  for (var i = 0; i < 5; i++) {
    myNewShape = new makeShapes(25 + i * 75, 25 + i * 75, 40 + i * 10, 198 + random(10, 30), 137 + random(10, 30), 88 + random(10, 30), 150 + random(10, 30), 74 + random(10, 30), 47 + random(10, 30));
    myShapeArray.push(myNewShape);
  }
}

setInterval(timeIt, 50);
function draw() {
  background(220);

  for (var i = 0; i < idleImages.length; i++) {
    idleImages[i].resize(0, 200);
    walkImages[i].resize(0, 200);
  }

  for (var i = 0; i < myShapeArray.length; i++) {
    myShapeArray[i].drawStuff();
  }
  

  if (keyIsPressed) {
    if (key == "a") {
      x -= speed;
     image(walkImages[count], x, y);
    }
  
    if (key == "w") {
        y -= speed;
     image(walkImages[count], x, y);
    }
    
    if (key == "d") {
      x += speed;
     image(walkImages[count], x, y);
    }
    if (key == "s") {
         y += speed;
     image(walkImages[count], x, y);
    }
  }
else {
  image(idleImages[count], x, y);}
  
}
function timeIt() {
  count++;
  if (count >= idleImages.length) {
    count = 0;
  }
}
