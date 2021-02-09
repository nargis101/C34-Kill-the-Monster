class Hero{
    constructor(x, y, width, height){
        var options = {
            'restitution': 0.5,
            'friction': 1.0,
            'density': 15
        }

        this.body = Bodies.rectangle(x, y, width, height/1.5, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/hero.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        imageMode(CENTER);
        fill(255);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}