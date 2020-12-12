
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function detectCollision(){
detectcollision(StoneObj,mango1);
detectcollision(StoneObj,mango2);
detectcollision(StoneObj,mango3);
detectcollision(StoneObj,mango4);
detectcollision(StoneObj,mango5);
}

function keyPressed(){
if(keyCode === 32){
Mater.Body.setPosition(stoneObj.body, {x:234, y:420})
launcherOblect.attach(stoneObj.body)	
}	
}
