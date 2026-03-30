/* REFLECTION
The majority of the code here is things we worked on in-class. 
I used some examples from other code bases (like p5js website) 
and googled/ai summarized answers as well.
A primary challenge has been remembering to translate from normal p5js stuff to p5play stuff.
Overall pretty doable though, and fun to learn!

*/



var eatencount = 5;
var braincount = 0;
let timer = 30000;
let hitCooldown = 0;
let idleAnimation;
let walkAnimation;
let attackAnimation;
let catImage;
let idlePaths = [];
let walkPaths = [];
let attackPaths = [];
let myAnimation;
let particles = [];
let health = 10;
function preload() {

    for (var i = 0; i < 15; i++) {
        idlePaths[i] = "images/idle/Idle (" + (i + 1) + ").png";

    }
    for (var j = 0; j < 10; j++) {
        walkPaths[j] = "images/walk/Walk (" + (j + 1) + ").png";

    }

    for (var j = 0; j < 8; j++) {
        attackPaths[j] = "images/attack/Attack (" + (j + 1) + ").png";

    }


}

function setup() {

    new Canvas(600, 600);

    //compact way to add an image
    catImage = new Sprite();
    catImage.image = 'images/broccoli.png';
    catImage.pos.x = 200;
    catImage.pos.y = 300;
    catImage.scale = 0.05;
    catImage.width = 100;
    catImage.height = 100;
    catImage.collider = 'rectangle';
    catImage.debug = true;

    // brains
    brainImage = new Sprite();
    brainImage.image = 'images/brain.png';
    brainImage.pos.x = 400;
    brainImage.pos.y = 300;
    brainImage.scale = 0.05;
    brainImage.width = 100;
    brainImage.height = 100;
    brainImage.collider = 'rectangle';
    brainImage.debug = true;

    catImage.collider = 'none';
    brainImage.collider = 'none';
    myAnimation = new animationImage(100, 300, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.loadAnimation('attack', attackPaths);
    myAnimation.debug = true;
}
// display all the frames using the draw function as a loop


function update() {
 
 clear();
    if (timer > 0) {
        timer -= deltaTime; // subtract real elapsed time
    }

    let secondsLeft = ceil(timer / 1000);
    fill(255);
    textSize(20);
    text("defeat broccoli, eat brains! time remaining: " + secondsLeft, 20, 50);


    if (kb.pressing('d')) {

        // particles.splice(0, particles.length);
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');

        /*if (myAnimation.isColliding(catImage)) {
            catImage.remove();
         }*/
    }
    else if (kb.pressing('a')) {
        //particles.splice(0, particles.length);
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');

    }
    else if (kb.pressing('w')) {
        //particles.splice(0, particles.length);
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');

    }
    else if (kb.pressing('s')) {
        //particles.splice(0, particles.length);
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');

    }

    else {
        myAnimation.drawAnimation('idle');


    }

    if (mouse.pressing()) {
        myAnimation.animationType = 'attack';
        myAnimation.drawAnimation('attack');
    }
    else {
        myAnimation.animationType = 'notAttack';
    }

    let eatRange =
    dist(
        myAnimation.currentAnimation.position.x,
        myAnimation.currentAnimation.position.y,
        brainImage.position.x,
        brainImage.position.y
    ) < 200;

    if (eatRange && myAnimation.animationType === 'attack') {
        braincount += 10;
        console.log("brain eaten! score: " + braincount);
        brainImage.position.x = random(0, width);
        brainImage.position.y = random(0, height);
    }
    let inRange =
    dist(
        myAnimation.currentAnimation.position.x,
        myAnimation.currentAnimation.position.y,
        catImage.position.x,
        catImage.position.y
    ) < 200;

if (inRange && myAnimation.animationType === 'attack' && hitCooldown <= 0) {
    health -= 1;
    console.log ("Health: " + health);

    // spawn particles ONCE
    createParticles(catImage.position.x, catImage.position.y, 0, 255, 0);

    hitCooldown = 10; // frames of delay (adjust as needed)
}

if (health <= 0) {
    health = 10;
    catImage.position.x = random (0, width);
    catImage.position.y = random (0, height);
    console.log("vegetables destroyed!");
    eatencount -= 1;
}
if (eatencount <= 0) {
    text("you win!", 200, 100);
    noLoop();
}
    fill(255, 0, 0);
    textSize(30);
    text("evil vegetables remaining: " + eatencount, 200, 200);
    text("brain score:" + braincount, 200, 250);

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();

        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }

    if (hitCooldown > 0) {
    hitCooldown--;
}

if (timer <= 0) {
fill(255, 255, 255, 255);
text("time's up! you lose!", 200, 100);
noLoop();
}

function createParticles(x, y, r = 255, g = 255, b = 255) {
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(x, y, r, g, b));
    }
}
}