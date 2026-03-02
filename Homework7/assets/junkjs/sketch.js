

var numberOfCircles = 5;

var direction = -1;

var myNewShape;

var myShapeArray = [];

var myAnimations;

var SingleImage;

var deadAnimations = [];
var idleAnimations = [];
var walkAnimations = [];

var count = 0;
var speed = 5;
var myTimer;

function preload() {

  // do something with our class here
 // myAnimations = new animations(random(0, 300), random(0, 300), 5);
 let x = random(0, 300);
 let y = random(0, 300);

 for (var i = 0; i < 10; i++) {
    deadAnimations[i] = new individualFrame(x,y, "assets/images/Dead (" + (i + 1) + ").png");
    idleAnimations[i] = new individualFrame(x,y, "assets/images/Idle (" + (i + 1) + ").png");
    walkAnimations[i] = new individualFrame(x,y, "assets/images/Walk (" + (i + 1) + ").png");
    
 }
 // SingleImage = new individualFrame(random(0, 300), random(0, 300), "assets/images/Dead (1).png");
}

function setup() {
  createCanvas(400, 400);
 // makeOurShapes();
  myTimer = setInterval(timeIt, 100);
}

function draw() {
  background(220);
  //displayShapes();

  for (var i = 0; i < idleAnimations.length; i++) {
    idleAnimations[i].resizeImage(0, 100);
    walkAnimations[i].resizeImage(0, 100);
  }

  moveAround();
  //for (var i = 0; i < deadAnimations.length; i++) {
    
  //}
  //SingleImage.resizeImage();
  //SingleImage.drawImage();

  //myAnimations.resizeImages();

  //console.log(frameCount);
  //if (frameCount % myAnimations.idleImages.length == 0) {
  //   count = (count + 1) % myAnimations.idleImages.length;
  //}

  //myAnimations.moveAround();


  for (var i = 0; i < myShapeArray.length; i++) {
  var didICollide = myAnimations.collision(myShapeArray[i]);
  
  if(didICollide){
    // remove the shape from the array
    myShapeArray.splice(i, 1);
    i--; // adjust the index after removing an element
  }
}

 
} // end of draw

function moveAround() {
        if (keyIsPressed) {
            if (key == "a") {
              walkAnimations[count].drawImage(); 
              for (var i = 0; i < walkAnimations.length; i++) {
              walkAnimations[i].x -= speed;
              idleAnimations[i].x -= speed;
              }
            }
            if (key == "w") {
              walkAnimations[count].drawImage();
               }
            if (key == "d") {
              for (var i = 0; i < walkAnimations.length; i++) {
              walkAnimations[i].x += speed;
              idleAnimations[i].x += speed;
              }

              walkAnimations[count].drawImage();

               }
            if (key == "s") {
              walkAnimations[count].drawImage();

               }
        }
        else {
            idleAnimations[count].drawImage();
        }
    }


function timeIt() {
 
  console.log(count);
  count++;
  if (count >= idleAnimations.length) {
    count = 0;
    //clearInterval(myTimer);
  }

   
}

function makeOurShapes() {

  for (var i = 0; i < 5; i++) {
    myNewShape = new makeShapes(random(0, 400), random(0, 400), 50, 50, 0, random(20, 100), random(0, 255), random(0, 255), random(0, 255));
    myShapeArray.push(myNewShape);

  }
}

function displayShapes() {
  for (var i = 0; i < myShapeArray.length; i++) {

    myShapeArray[i].drawStuff();
  }
}

