var circx = 200;
var circy = 200;
var direction = -1;
var myNewShape;
var myShapeArray = [];
var myAnimations;
var SingleImage;
var deadAnimations = [];
var idleAnimations = [];
var walkAnimations = [];
var count = 5; 
var worldTimer = 30;
var timerInterval;
var speed = 5;
var myTimer;
var eatcount = 0;

function preload() {
  makeOurShapes();
  
  let x = random(0, 300);
  let y = random(0, 300);

  for (var i = 0; i < 10; i++) {
    deadAnimations[i] = new individualFrame(x, y, "assets/images/Dead (" + (i + 1) + ").png");
    idleAnimations[i] = new individualFrame(x, y, "assets/images/Idle (" + (i + 1) + ").png");
    walkAnimations[i] = new individualFrame(x, y, "assets/images/Walk (" + (i + 1) + ").png");
  }
  borger = new individualFrame(x, y, "assets/images/borger.webp");
}

function setup() {
  createCanvas(400, 400);
  myTimer = setInterval(timeIt, 100);
  timerInterval = setInterval(timeTimer, 1000);
  myAnimations = new animations(200, 200, 5);
  
}

function timeIt() {
  count++;
  
  // Prevent going past array length
  if (count >= myAnimations.walkImages.length) {
    count = 0;
  }
}

function draw() {
  background(220);

  // Draw borger at the food position
  borger.x = circx;
  borger.y = circy;
  borger.resizeImage();
  borger.drawImage();

  displayShapes();
  fill(0);
  text("Time Left: " + worldTimer, 10, 20);
text ("Borger Eaten: " + eatcount, 10, 40);
  // Collision check with borger
  if (myAnimations.collision(borger)) {
    circx = random(0, 300);
    circy = random(0, 300);
    eatcount++;
  }

  myAnimations.resizeImages();
if (worldTimer > 0) {
  moveAround();
}
  if (worldTimer <= 0) {;
    if (eatcount >= 10) {
      
      text("You Win! Final Score: " + eatcount, 110, 200);
    }
    else {
      
      text("Game Over - Try to get 10 next time! Final Score: " + eatcount, 75, 200);
    }
    
  }
} // end of draw

function moveAround() {

  let moving = false;

  if (keyIsDown(65)) { // A
    myAnimations.x -= speed;
    moving = true;
  }

  if (keyIsDown(68)) { // D
    myAnimations.x += speed;
    moving = true;
  }

  if (keyIsDown(87)) { // W
    myAnimations.y -= speed;
    moving = true;
  }

  if (keyIsDown(83)) { // S
    myAnimations.y += speed;
    moving = true;
  }

  // Boundaries
  myAnimations.x = constrain(myAnimations.x, 0, 375);
  myAnimations.y = constrain(myAnimations.y, 0, 320);

  if (moving) {
    image(myAnimations.walkImages[count], myAnimations.x, myAnimations.y);
  } else {
    image(myAnimations.idleImages[count], myAnimations.x, myAnimations.y);
  }
}

function timeTimer() {
  
  console.log(worldTimer);
  
  if (worldTimer > 0) {
    worldTimer--;}
  if (worldTimer <= 0) {
    clearInterval(timerInterval);
    clearInterval(myTimer);
  }}

function makeOurShapes() {

  for (var i = 0; i < 5; i++) {
    myNewShape = new makeShapes(random(0, 400), random(0, 400), 50, 50, 0, random(30, 70), random(0, 255), random(0, 255), random(0, 255));
    myShapeArray.push(myNewShape);

  }
}

function displayShapes() {
  for (var i = 0; i < myShapeArray.length; i++) {

    myShapeArray[i].drawStuff();
  }
}

