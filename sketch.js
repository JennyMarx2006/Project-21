
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
    
	groundObj=new Ground(width/2,670,width,20);
    leftSide=new Ground(1100,600,20,120);
	rightSide=new Ground(700,600,20,120);
	ball=new Ball(30,20,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


groundObj.display();
leftSide.display();
rightSide.display();
ball.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,{x:0,y:0},{x:130,y:-350})
	}
}



