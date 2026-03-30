class Particle {

  constructor(x,y,r,g,b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g; 
    this.b = b;
    this.vx = random(-1,1);
    this.vy = random(-2,-1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {

    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    ellipse(this.x, this.y, 20);
  }
}