
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1
var bob2
var bob3
var bob4 
var bob5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(230,450,70)
	bob2 = new Bob(270,450,70)
	bob3 = new Bob(340,450,70)
	bob4 = new Bob(410,450,70)
	bob5 = new Bob(350,450,70)
	roof= new Roof(350,20,420,50)
	rope1= new Rope(bob1.body,roof.body,-140,0)
	rope2= new Rope(bob2.body,roof.body,-70,0)
	rope3= new Rope(bob3.body,roof.body,0,0)
	rope4= new Rope(bob5.body,roof.body,70,0)
	rope5= new Rope(bob4.body,roof.body,140,0)
	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode ===UP_ARROW){

        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:385})   

	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



