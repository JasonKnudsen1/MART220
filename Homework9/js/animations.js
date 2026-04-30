class animations {

    // properties
    idleImages = [];
    walkImages = [];
    jumpImages = [];
    borger;
    x;
    y;
    speed;
    count;
    constructor(x, y, speed) {
        for (var i = 0; i < 10; i++) {
            this.idleImages[i] = loadImage("assets/images/Idle (" + (i + 1) + ").png");
            this.walkImages[i] = loadImage("assets/images/Walk (" + (i + 1) + ").png");
            this.jumpImages[i] = loadImage("assets/images/Jump (" + (i + 1) + ").png");
            this.borger = loadImage("assets/images/borger.png");

        }
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.count = 0;
    }

    // functions
    resizeImages() {
        for (var i = 0; i < this.idleImages.length; i++) {
            this.idleImages[i].resize(0, 100);
            this.walkImages[i].resize(0, 100);
            this.jumpImages[i].resize(0, 100);
        }
    }

   

    collision(makeShapesObject) {
        if (dist(this.x+20, this.y+30, makeShapesObject.x, makeShapesObject.y) < 40) {
            return true;
        }
        else {
            return false;
        }

    }

}