
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg;
var mango1, mango2, mango3, mango4, mango5;
var stone, ground;
var boy;
var slingshot;
function preload()
{
	boyImg = loadImage("images/boy.png");	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(100,550,10);

	boy = createSprite(150,550,10,10);
	boy.addImage(boyImg);
	boy.scale=0.1;

	mango1 = new Mango(500,400,10,10);
	mango2 = new Mango(600,350,10,10);
	mango3 = new Mango(550,300,10,10);
	mango4 = new Mango(750,370,10,10);
	mango5 = new Mango(670,300,10,10);

	tree = new Tree(600,420,10,10);

	ground = new Ground(400,650,900,100);
	slingshot = new SlingShot(stone.body,{x:100, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  stone.display();
  slingshot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body); 
	}
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}