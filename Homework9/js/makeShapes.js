class makeShapes {

    // properties
    x;
    y;
    w;
    h;
    l;
    d;
    r;
    g;
    b;

    // constructs the object
    constructor(x, y, w, h, l, d, r, g, b) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.l = l;
        this.d = d;
        this.r = r;
        this.g = g;
        this.b = b;

    }

    // functions
    drawStuff() {
       // fill(255, 0, 0);
        //square(this.x, this.y, this.w);
      // fill(random(0,255), random(0,255), random(0,255));
      fill(this.r, this.g, this.b);
        circle(this.x, this.y, this.d);
        //fill(0,255,0);
        //circle(this.x, this.y, this.d-10);
    }

    
}