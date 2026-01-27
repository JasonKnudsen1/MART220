function setup() {
createCanvas(700, 500)
}

function draw() {
    background (10, 0, 20);
    noStroke();
    fill (20, 10, 30)
    ellipse (70, 70, 140, 140);
    fill (40, 30, 50)
    ellipse (70, 70, 130, 130);
    fill (80, 80, 50)
    ellipse (70, 70, 120, 120);
    fill (150, 150, 50)
    ellipse (70, 70, 110, 110);
    fill (200, 200, 50)
    ellipse (70, 70, 90, 90);
    fill (250,250,50)
    stroke(255)
    ellipse (70, 70, 50, 50);
    fill (0,100,200)
    ellipse(350, 500, 1000, 500);
    noStroke() 
    fill (0,200,0)
// continent 1
    ellipse (400, 330, 150, 50);
    ellipse (400, 330, 50, 80);
    ellipse (380, 300, 90, 60);
    rect (350, 300, 80, 100, 20);
// continent 2
    noStroke()
    quad(120, 310, 160, 300, 90, 400, 50, 380);
    ellipse (160, 350, 120, 90);
    ellipse(230, 320, 200, 90);
    rect (290, 300, 75, 40)
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
  // Display mouseX and mouseY
  noStroke();
  fill (0)
  text('X: ' + mouseX + ' Y: ' + mouseY, 300, 30);

  }
