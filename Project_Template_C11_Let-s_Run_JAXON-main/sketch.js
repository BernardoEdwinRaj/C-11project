var path,pathing
var runner,runnering
var leftboundary
var rightboundary
function preload(){
  //pre-load images
  pathing=loadImage("path.png")
  runnering=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathing)
  path.velocityY=7
  //creating the boy animation
  Runner=createSprite(180,340);
  Runner.addAnimation("Runner",runnering)
  Runner.scale=0.1
  //creating the two boundary
  leftboundary=createSprite(0,200,30,400);
  rightboundary=createSprite(400,200,20,400);
  //creating 
  leftboundary.visibile=false;
  rightboundary.visibile=false;
}

function draw() {
  background(0);
  if (path.y>400){
     path.y=200
  }
  Runner.x=World.mouseX
  Runner.collide(leftboundary);
  Runner.collide(rightboundary);
  drawSprites()
}
