
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2 ,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(900,150,30);
	mango3 = new mango(1000,50,30);
	mango4 = new mango(1111,40,30);
	mango5 = new mango(1060,70,30);
	mango6 = new mango(1050,200,30);
	mango7 = new mango(1050,150,30);
	mango8 = new mango(1200,170,30);
	mango9 = new mango(970,130,30);
	mango10 = new mango(1150,200,30);
	mango11 = new mango(970,230,30);
	
	

	stone = new Stone(230,410)
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	 chain = new Chain(stone.body,{x:240,y:270})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,200,200,300);
 

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  

  stone.display();
  chain.display();

  groundObject.display();
}

function mouseReleased(){
	chain.fly();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function keyPressed(){
	if(keyCode === 32){
		chain.attach(stone.body);
	}
}