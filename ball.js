class Box {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.2,
        'friction':1.0,
        'density':1.0,
       isStatic: false
    }
    this.body = Bodies.circle(x, y, radius);
    this.radius = radius ;
    this.radiusY=height;
    World.add(world, this.body);
    this.image = loadImage("paper.png");
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("green");
    fill(0,247,0);
    
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);

    pop();
  }
};