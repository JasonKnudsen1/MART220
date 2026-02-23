class makeShapes {

    // properties
    x;
    y;
    d;
    r;
    g;
    b;
    r2;
    g2;
    b2; 

    // constructs the object
    constructor(x, y, d, r, g, b, r2, g2, b2) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = r;
        this.g = g;
        this.b = b;
        this.r2 = r2;
        this.g2 = g2;
        this.b2 = b2;

    }

    // functions
    drawStuff() {
      fill(this.r, this.g, this.b);
        circle(this.x, this.y, this.d);
      fill(this.r2, this.g2, this.b2);
        ellipse(this.x, this.y, this.d + 5, this.d / 3)
    }
}