let superMeatBoy;
let SMBTexture;
let mousex = 200;
let mousey = 0;
let SMBFont;
let img;
function preload() {

  img = loadImage("images/brain.png")

  evao = loadModel('models/HW9.obj', true);

  SMBTexture = loadImage('models/MI_MummyPast_Body.png');

  SMBFont = loadFont('fonts/BJ_Cree,Bungee,Orbitron/BJ_Cree/BJCree-Bold.ttf');
}

function setup() {
  createCanvas(900, 900, WEBGL);
}


function draw() {
  let shapes = [
    drawSphere,
    drawCyclinder,
    drawCone,
    drawTorus,
    drawBox,
  ];

  background(200);

  ambientLight(150);        // soft global light
  directionalLight(255, 255, 255, 0.5, 1, -0.5); // directional light
  displayText("Jason H Knudsen", 0, -200, SMBFont);
  displayText("Evao Head Model", 0, -150, SMBFont);
  displayModel(evao, 0, 0, SMBTexture);

push();

// Rotate over time (this creates orbit motion)
rotateY(frameCount * 0.01);

for (let i = 0; i < shapes.length; i++) {
  push();

  let speed = ((i / 2) * 0.01) + 0.02;

  // Each shape rotates itself around center
  rotateY(frameCount * speed);

  // Offset starting position
  rotateY((TWO_PI / shapes.length) * i);

  // Move outward (orbit radius)
  translate(mousex, 0, 0);

  shapes[i]();

  pop();
}

pop();
  orbitControl();

}


function displayText(myText, x, y, myFont, myTextSize = 14) {
  push();
  translate(x, y, 0);
  textFont(myFont);
  textSize(myTextSize);
  textAlign(CENTER, CENTER)
  fill(0);


  text(myText, 0, 0);
  pop();
}

function displayModel(myModel, x, y, myTexture) {
  push();
  scale(1);
  translate(x, y, 0);
  rotateY(PI / 2);
  rotateZ(PI)
  normalMaterial();
  texture(myTexture);
  model(myModel);

  pop();
}

function mousePressed() {
  mousex = random(100, 300);

  console.log(mousex + ":" + mousey);
}

function drawCone() {
  push();
  cone(40, 70);
  pop();
}

function drawCyclinder() {
  push();
  specularMaterial(150, 20, 200);
  shininess(50);
  cylinder(20, 50, 24, 16, false, false);
  pop();
}
function drawSphere() {
  push();
  normalMaterial();
  sphere(24);
  pop();
}

function drawBox() {
  push();
  texture(img);
  box(30);
  pop();

}

function drawTorus() {
  push();
  ambientMaterial(0, 255, 2550);
  torus(50, 20);
  pop();
}