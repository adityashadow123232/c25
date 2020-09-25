var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1150, 400);


	engine = Engine.create();
	world = engine.world;


	log6=new Log(1000,400,20,120,-PI/2);
	ground = new dround(400,height,1200,20);
	log4 = new Log(1050,350,100,20, PI/7);
	log5 = new Log(950,350,100,20, PI/7);
	balll=new  Box(200,200,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250,250,250);
  ground.display();
  log4.display();
   log5.display();
   balll.display();
  //paSprite.display();
  log6.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(balll.body, balll.body.position, {x:-129,y:129})
	 }
   }



