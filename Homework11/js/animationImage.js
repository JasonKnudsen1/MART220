class animationImage {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.currentAnimation;
        this.createAnimation();
        this.direction = "";
    }

    // create getter and setter for x and y
    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    // set the sprite
    createAnimation() {
        this.currentAnimation = new Sprite(this.x,this.y, this.w, this.h);
    }

    // add the animation to the sprite
    loadAnimation(animationType, fileNames) {

        this.currentAnimation.addAni(animationType, fileNames);
        this.currentAnimation.scale = 0.5;
        
    }

    // display the animation
    drawAnimation(animationType) {
         this.currentAnimation.rotationSpeed = 0;
        
        this.currentAnimation.changeAnimation(animationType);
        if (animationType == 'walk' && this.direction == 'forward') {
             this.currentAnimation.scale.x = 0.5;
            this.currentAnimation.velocity.x = 3;

        }
        else if (animationType == 'walk' && this.direction == 'up') {
             //this.currentAnimation.scale.x = 0.5;
           
             this.currentAnimation.velocity.y = -3;

        }
        else if (animationType == 'walk' && this.direction == 'down') {
            // this.currentAnimation.scale.x = 0.5;
         
            this.currentAnimation.scale.y = 0.5;
            this.currentAnimation.velocity.y = 3;

        }
        else if (animationType == 'walk' && this.direction == 'reverse') {
            this.currentAnimation.scale.x = -0.5;
            this.currentAnimation.velocity.x = -3;
        }
        else {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
        }
    }

    updatePosition(direction) {
        this.direction = direction;  
    }

    isColliding(myImage) {
        return this.currentAnimation.collide(myImage);
    }

}