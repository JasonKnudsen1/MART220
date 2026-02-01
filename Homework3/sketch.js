var s = 83;
var w = 87;
var a = 65;
var d = 68;
var x = 70;
var y = 70;
var tr = 50
var tg = 50
var tb = 50
var timer = 6
var starx = 750
var stary = 5
function setup() {
    createCanvas(700, 500)
}

function draw() {
    background(10, 0, 20);
    StarGen()
    noStroke();
    fill(20, 10, 30)
    ellipse(x, y, 140, 140);
    fill(40, 30, 50)
    ellipse(x, y, 130, 130);
    fill(80, 80, 50)
    ellipse(x, y, 120, 120);
    fill(150, 150, 50)
    ellipse(x, y, 110, 110);
    fill(200, 200, 50)
    ellipse(x, y, 90, 90);
    fill(250, 250, 50)
    stroke(255)
    ellipse(x, y, 50, 50);
    fill(0, 100, 200)
    ellipse(350, 500, 1000, 500);
    noStroke()
    fill(0, 200, 0)

    PlayerMove();
    // continent 1
    fill(0, 200, 0)
    ellipse(400, 330, 150, 50);
    ellipse(400, 330, 50, 80);
    ellipse(380, 300, 90, 60);
    rect(350, 300, 80, 100, 20);
    // continent 2
    noStroke()
    quad(120, 310, 160, 300, 90, 400, 50, 380);
    ellipse(160, 350, 120, 90);
    ellipse(230, 320, 200, 90);
    rect(290, 300, 75, 40)
    // river 1
    stroke('blue');
    strokeWeight(3);
    line(424, 307, 399, 311);
    line(399, 311, 391, 321);
    line(391, 321, 376, 325);
    line(376, 325, 373, 341);
    line(373, 341, 382, 345);
    line(382, 345, 390, 335);
    line(390, 335, 400, 341);
    line(400, 341, 402, 354);
    line(402, 354, 390, 371);
    // river 2
    line(376, 325, 353, 315);
    line(353, 315, 341, 325);
    line(341, 325, 331, 315);
    line(331, 315, 319, 312);
    line(319, 312, 306, 317);
    line(306, 317, 298, 324);
    line(298, 324, 277, 315);
    line(277, 315, 254, 323);
    line(254, 323, 261, 338);
    line(261, 338, 224, 335);
    line(224, 335, 211, 312);
    // Text
    stroke('black');
    strokeWeight(1);
    fill(tr, tg, tb)
    textSize(25)
    // text('X: ' + mouseX + ' Y: ' + mouseY, 300, 30);
    text('Jason Knudsen', 575, 450);
    text('Earf', 50, 50);


    textAlign(CENTER, CENTER);
    textSize(100);
    // while (timer > 0) {  // this doesn't work because it's all happening at the same time
    //   timer --;
    // }

    // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
    // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
    // this can be used to determine if the number on the left is divisible by the number on the right

    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer--;
    }
    if (timer == 0) {
        starx = random (700, 750)
        stary = random (40, 90)
        timer += random (3,7)
    }

}


function mouseClicked() {
    tr = random(50, 251);
    tg = random(50, 251);
    tb = random(50, 251);
}

function StarGen() {

    fill(205)
    circle(starx, stary, 30)
    fill(255)
    circle(starx, stary, 15)
    starx -= random(10,20)
    stary += random (5, 10)

}


function PlayerMove() {
    if (keyIsDown(d)) {
        x += 5;
    }
    if (keyIsDown(a)) {
        x -= 5;
    }
    if (x >= 675) {
        x = 675;
    }
    if (x <= 25) {
        x = 25;
    }
    if (keyIsDown(s)) {
        y += 5;
    }
    if (keyIsDown(w)) {
        y -= 5;
    }
    if (y >= 575) {
        y = 575;
    }
    if (y <= 25) {
        y = 25;
    }
}