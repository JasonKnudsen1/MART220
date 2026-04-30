var themesong;
var error;
var good;
var circx;
var circy;
var circevilx;
var circevily;
var borger;
var borgerEvil;
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
var health = 5;
var obstacles = [];

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
  borgerEvil = new individualFrame(x, y, "assets/images/borgerEvil.webp");
  themesong = loadSound("assets/sounds/theme.mp3");
  error = loadSound("assets/sounds/error.mp3");
  good = loadSound("assets/sounds/good.mp3");
}

function setup() {
  createCanvas(400, 400);
  themesong.setVolume(0.2)
  myTimer = setInterval(timeIt, 100);
  timerInterval = setInterval(timeTimer, 1000);
  myAnimations = new animations(20, 40, 5);
  circx = random(100, 300);
  circy = random(100, 300);
  circevilx = random(100, 300);
  circevily = random(100, 300);
  for (let i = 0; i < 3; i++) {
  obstacles.push({
    x: random(80, 100),
    y: random(60, 80),
    w: random(20, 40),
    h: random(20, 40)
  });
}
}

function mousePressed() {
  if (themesong.isPlaying()) {
    themesong.pause();
  } else {
    themesong.play();
  }
}

function keyPressed() {
  let v = themesong.getVolume();

  if (key === '+' || key === '=') {
    v = constrain(v + 0.05, 0, 1); // increase volume
    themesong.setVolume(v);
  }

  if (key === '-') {
    v = constrain(v - 0.05, 0, 1); // decrease volume
    themesong.setVolume(v);
  }
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
  drawObstacles();
  // Draw borger at the food position
  DrawBorgers();
  displayShapes();
  fill(0);
  text("Time Left: " + worldTimer + "  |  Score: " + (eatcount) + "  |  Health: " + health, 10, 20);
  text("(L-Click for music  |  Press + or - to adjust volume)", 10, 40);

  // Collision check with borger
  CollisionGood();
  CollisionBad();
  myAnimations.resizeImages();
  Score();
} // end of draw

function drawObstacles() {
  fill(150, 0, 0);
  for (let i = 0; i < obstacles.length; i++) {
    rect(obstacles[i].x, obstacles[i].y, obstacles[i].w, obstacles[i].h);
  }
}

function DrawBorgers() {
  borger.x = circx;
  borger.y = circy;
  borger.resizeImage();
  borger.drawImage();
  borgerEvil.x = circevilx;
  borgerEvil.y = circevily;
  borgerEvil.resizeImage();
  borgerEvil.drawImage();
}

function CollisionBad() {
  if (myAnimations.collision(borgerEvil)) {
    circevilx = random(0, 300);
    circevily = random(0, 300);
    health--;
    error.play();
  }
  if (health <= 0) {
    GameOver();
  }
}

function GameOver() {
  if (health == 0) {
    text("Game Over - You ate too many Evil Borger :/ Final Score: " + eatcount, 50, 200);
  }

}

function CollisionGood() {
  if (myAnimations.collision(borger)) {
    circx = random(0, 300);
    circy = random(0, 300);
    eatcount++;
    good.play();
  }
}

function Score() {
  if (worldTimer > 0 && health > 0) {
    moveAround();
  }
  if (worldTimer <= 0) {
    ;
    if (eatcount >= 10) {

      text("You Win! Final Score: " + eatcount, 110, 200);
    }
    else {

      text("Game Over - Try to get 10 next time! Final Score: " + eatcount, 75, 200);
    }

  }
}

function moveAround() {

  let nextX = myAnimations.x;
  let nextY = myAnimations.y;

  if (keyIsDown(65)) nextX -= speed; // A
  if (keyIsDown(68)) nextX += speed; // D
  if (keyIsDown(87)) nextY -= speed; // W
  if (keyIsDown(83)) nextY += speed; // S

  // Check collision BEFORE applying movement
  if (!collidesWithObstacle(nextX, myAnimations.y)) {
    myAnimations.x = nextX;
  }

  if (!collidesWithObstacle(myAnimations.x, nextY)) {
    myAnimations.y = nextY;
  }

  // Boundaries
  myAnimations.x = constrain(myAnimations.x, 0, 375);
  myAnimations.y = constrain(myAnimations.y, 0, 320);

  let moving = keyIsDown(65) || keyIsDown(68) || keyIsDown(87) || keyIsDown(83);

  if (moving) {
    image(myAnimations.walkImages[count], myAnimations.x, myAnimations.y);
  } else {
    image(myAnimations.idleImages[count], myAnimations.x, myAnimations.y);
  }
}

function timeTimer() {

  console.log(worldTimer);

  if (worldTimer > 0) {
    worldTimer--;
  }
  if (worldTimer <= 0) {
    clearInterval(timerInterval);
    clearInterval(myTimer);
  }
}

function collidesWithObstacle(x, y) {

  let playerSize = 40; // adjust to match your sprite size

  for (let i = 0; i < obstacles.length; i++) {
    let o = obstacles[i];

    if (
      x < o.x + o.w &&
      x + playerSize > o.x &&
      y < o.y + o.h &&
      y + playerSize > o.y
    ) {
      return true;
    }
  }

  return false;
}

function makeOurShapes() {

  for (var i = 0; i < 5; i++) {
    myNewShape = new makeShapes(random(0, 400), random(50, 400), 50, 50, 0, random(30, 70), random(0, 255), random(0, 255), random(0, 255));
    myShapeArray.push(myNewShape);

  }
}

function displayShapes() {
  for (var i = 0; i < myShapeArray.length; i++) {

    myShapeArray[i].drawStuff();
  }
}

