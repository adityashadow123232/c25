class Log {
    constructor(x, y, height,width, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
      this.image = loadImage("dustbingreen.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
     
     
     
     
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);

      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("green");
     
      pop();
    }
  };