
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	 ground=new Ground(650,300,250,10);
   box1=new Box(650,290);
   box5=new Box(640,290);
   box8=new Box(660,290);
   box11=new Box(630,290);
   box13=new Box(670,290);
   box15=new Box(620,290);
	
	 box4=new Box(650,260);
	 
   box3=new Box(650,270);
	 box7=new Box(640,270);
   box10=new Box(660,270);

   box2=new Box(650,280);
   box6=new Box(640,280);
	 box9=new Box(660,280);
	 box12=new Box(630,280);
	 box14=new Box(670,280);
	 box16=new Box(680,280);
		
	 
   ground2=new Ground(1000,200,250,10);  
   box17=new Box(1000,190);
   box18=new Box(990,190);
   box19=new Box(1010,190);
   box20=new Box(980,190);


   box21=new Box(1000,180);
	 box22=new Box(990,180);
	 box23=new Box(1010,180);
   box24=new Box(1020,180);
   
   box25=new Box(1000,170);
             
	 polygon=new Polygon(50,200,20);

	 
	 
     rope1=new Launcher(polygon.body,{x:300,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("saddlebrown");

  ground.display();
  ground2.display();
  stroke("black")
  fill("skyblue");
  box1.display();
  box5.display();
  box8.display();
  box11.display();
  box13.display();
  box15.display();
  box16.display();

  fill("grey")
  box4.display();
  
  fill("Aqua");
  box3.display();
  box7.display();
  box10.display();
  fill("pink");
  box2.display();
  box6.display();
  box9.display();
  box12.display();
  box14.display();
  



  polygon.display();
  rope1.display();
  



  fill("skyblue");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box24.display();
  fill("Aqua")
  
  box21.display();
  box22.display();
  box23.display();

  fill("pink"); 
  box25.display();
 
    
  
 
  textSize(22);
  fill("tyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);



  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  rope1.fly();
}

function keyPressed(){
	if(keyCode===32){
		rope1.attach(polygon.body);
	}
}
