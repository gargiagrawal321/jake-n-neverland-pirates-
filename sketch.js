const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

const START=0, PLAY=1,END=2,BEGIN=1;
var world,engine;
var jack;
var gameState=START;

// shopie,shopie images,
var sophie;
var shopieI;

// pixydust images allcharecters,
var jPixyDustI;
var shopieLocketPixyDustI;
var sThrowPixyDustI;
var pixyDustI;

//mr hooke ,mr hooke Image,

var HookeI;
var ground;

// bg1 image, bg2 image,
var bg2I,back;
var jack;
function preload(){
  /* jackHappyI=loadImage("images/jack happy.png");
    jackSwordI=loadImage("images/jack sword.png");
    shopieI=loadImage("images/shophie.png");
    jPixyDustI=loadImage("images/j pixy dust.jpeg");
    shopieLocketPixyDustI=loadImage("images/s pixy dust.jpeg");
    sThrowPixyDustI=loadImage("images/s throw pixy dust.jpeg");
    PixyDustI=loadImage("images/pixy dust.png");
    HookeI=loadImage("images/mr hooke.png");*/
  
    bg2I=loadImage("images/bg2.jpeg");
}
function setup(){
createCanvas(displayWidth,displayHeight);
engine=Engine.create();
world=engine.world;
Engine.run(engine)
back=createSprite(width/2,height/2);
back.addImage("bg2.jpeg",bg2I);
back.scale=1.5;


jack=new Man(100,100,170,200,"images/jack happy.png");
hooke=new Man(400,100,170,250,"images/mr hooke.png");
sophie=new Man(300,100,75,100,"images/shophie.png")
ground=new Ground(width/2,height-10,width,20);

}

function draw(){
  background("blue"); 
  drawSprites();
  if(gameState===BEGIN){
    Matter.Body.setPosition(hooke.body,{x:[]})
  }

if(gameState===START){
  textAlign(CENTER);
  fill("#CD5C5C");
  stroke("#F08080");
  strokeWeight(2);
  textSize(30);
  textFont("Optima")
  text("Mr. Hooke is trying to rob the city",width/2,height/2-50);
  text("please help the citizens and our prince jack to get back the coins and stop him.",width/2,height/2)
  text("Press S to start the game",width/2,height/2+50);
} else if(gameState===PLAY){
  back.velocityX=-2;
  if(back.x<220)
  {
    back.x=width/2;
  }
  jack.display();
  hooke.display();
  sophie.display();
  ground.display();
}

}
function keyPressed(){
  if (keyCode===83){
    gameState=PLAY;
  }
}