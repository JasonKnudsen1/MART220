class animations {

    // properties
    idleImages = [];
    walkImages = [];
    jumpImages = [];
    x;
    y;
    speed;
    count;
    constructor(x, y, speed) {
        for (var i = 0; i < 10; i++) {
            this.idleImages[i] = loadImage("assets/images/Idle (" + (i + 1) + ").png");
            this.walkImages[i] = loadImage("assets/images/Walk (" + (i + 1) + ").png");
            this.jumpImages[i] = loadImage("assets/images/Jump (" + (i + 1) + ").png");

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

    moveAround() {
        if (keyIsPressed) {
            if (key == "a") {

                this.x -= this.speed;
                image(this.walkImages[this.count], this.x, this.y);
            }
            if (key == "w") {
                this.y -= this.speed;
                image(this.walkImages[this.count], this.x, this.y);
            }
            if (key == "d") {
                this.x += this.speed;
                image(this.walkImages[this.count], this.x, this.y);
            }
            if (key == "s") {

                this.y += this.speed;
                image(this.walkImages[this.count], this.x, this.y);
            }
        }
        else {
            image(this.idleImages[this.count], this.x, this.y);
        }
    }

    collision(makeShapesObject) {
        if (dist(this.x, this.y, makeShapesObject.x, makeShapesObject.y) < 50) {
            return true;
        }
        else {
            return false;
        }

    }

}