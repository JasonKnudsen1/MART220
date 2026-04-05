let img;
let img2;
//let angle = PI;
let x = 0;
let y = 0;
let z = 0;
function preload() {
    img = loadImage("images/brain.png");
    img2 = loadImage("images/cat.jpg");
    font = loadFont('assets/fonts/Megrim-Regular.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textureMode(NORMAL);
    //angleMode(DEGREES);
    
}

function draw() {
    background(255);

// Add lighting
    ambientLight(150);        // soft global light
    directionalLight(255, 255, 255, 0.5, 1, -0.5); // directional light

    // Enable orbiting with the mouse.
    //orbitControl();

    drawBox(80, 0, 0, 0, img);

    //drawBox(50, 200, 0, 0, img);

    //drawBox(100, x, y, z, img2);

    drawSphere();

    drawCyclinder();

    drawCone();

    drawTorus();
    drawText();
}

function keyPressed() {
    if (key === 'd') {
        x += 10;
    }
    else if (key === 'a') {
        x -= 10;
    }
    else if (key === 'w') {
        y -= 10;
    }
    else if (key === 's') {
        y += 10;
    }
    else if (key === 'q') {
        z += 10;
    }
    else if (key === 'e') {
        z -= 10;
    }
}

function drawCone() {
    push();
    translate(100, 100);
    //rotateX(PI/4);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.03);
    cone(40, 70);
    pop();
}

function drawCyclinder() {
  push();
    specularMaterial(150,20,200);
    shininess(50);
    translate(-50, 100);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    //texture(img);
    cylinder(20, 50, 24, 16, false, false);
    pop();
}
function drawSphere() {
    push();
    normalMaterial();
    translate(-100, -100, 300);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(24);
    pop();
}

function drawBox(size, translateX, translateY, translateZ, img) {
    push();
    if (img != undefined)
        texture(img);
    else
        fill('#f92e06');

    translate(translateX, translateY, translateZ);
    rotateY(PI/4 * .01 * frameCount);
   
     rotateX(frameCount * 0.01);
   // rotateY(frameCount * 0.02);
    box(size);
  pop(); 

}

function drawTorus() {
    push();
    ambientMaterial(0,255,2550);
    translate(150, 20, -301);
        rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(50, 20);
    pop();
}

function drawText() {
  push();
  textFont(font);
  textSize(32);
  fill(0);
  translate(0, -150, 0);
  rotateY(frameCount * 0.01);
  text("\"hello 3d\"", -50, 0);
  text("Jason Knudsen", -50, 50);
  pop();
}