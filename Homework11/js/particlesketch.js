const particles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  // add new particles
  for (let i = 0; i < 5; i++) {
    let p = new Particle(250,250);
    particles.push(p);
  }

  // update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}