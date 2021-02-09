class Monster{
    constructor(x, y, width, height){
        var options = {
            density: 20,
            restitution: 0.8,
            friction: 1
        }

        this.body = Bodies.rectangle(x, y, width/2, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/monster.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill(255);
        image(this.image, pos.x, pos.y, this.width, this.height);

    }

}