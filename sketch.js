var car1,car1Image;
var car2,car2Image;

var car1Group,car2Group;
var road,roadImage;
var player,playerImage;
var score;
var PLAY=1;
var END=0;
var gameState=PLAY;
var gameover,gameoverImage
var restart,restartImage
function preload(){
  
 
playerImage=loadImage("player.png");
  roadImage=loadImage("Road.jpg");
car1Image=loadImage("car-0.png");
  car2Image=loadImage("car-1.png");
   gameoverImage=loadImage("gameover.png");
  restartImage=loadImage("restart.png");

}

function setup() {
   createCanvas(550,600);
  
  road=createSprite(285,300,550,600);
 road.addImage(roadImage);
  road.scale=4.52;
  
 player=createSprite(270,530,30,30);
  player.addImage(playerImage);
  player.scale=0.3;
  
     gameover=createSprite(270,300,30,30);
  gameover.addImage(gameoverImage);
  gameover.scale=0.6;
  
  restart=createSprite(270,400,30,30);
  restart.addImage(restartImage);
  restart.scale=0.2;
  
  
  
    car1Group= new Group();
  car2Group= new Group();
 
  score=0;

  
}

function draw() {
  background("lightgreen");
  
   if(gameState===PLAY){
     
   
    road.velocityY=7;
     
     score= score + Math.round(getFrameRate()/30);
   console.log(frameCount)
     
     if (road.y> 650){
       road.y = road.height/2;
       
     }
     
     
   if(keyDown("right_arrow")){
    player.x= player.x+8;
  }
  
     
  if(keyDown("left")){
     player.x= player.x-8;
  }
     
    spawncar1();
     spawncar2();
     
     if(car1Group.isTouching(car2Group)){
       car2Group.destroyEach()
     }
  
  
 if(player.isTouching(car1Group)||player.isTouching(car2Group)){
   gameover.visible=true
   gameState=END
 }
     
     gameover.visible=false
     restart.visible=false
    
   }
  
  
  if(gameState===END){
     road.velocityY=0;
    car1Group.destroyEach();
    car2Group.destroyEach();
  
    player.visible=false;
    gameover.visible=true;
    restart.visible=true;
    
    if(mousePressedOver(restart)) {
      reset();
    }

  }
  
  drawSprites();
  
  fill("black");
  textFont(" black")
  textSize(20);
  text("Score: "+ score, 400,50);

}



  function reset(){
  gameState=PLAY
   
  gameover.visible=false;
  restart.visible=false;
  player.visible=true;
  score=0;

}




function spawncar1(){   


  if(frameCount%250===0){
 var car1=createSprite(100,-100,30,30);
    car1.addImage(car1Image);
    car1.scale=2;
    car1.velocityY=4;
    car1.x=Math.round(random(40,300));
     car1.lifetime=300;
    car1Group.add(car1);
  
}
}





function spawncar2(){
  
  if(frameCount%167===0){
 var car2=createSprite(100,-100,30,30);
    car2.addImage(car2Image);
    car2.scale=2
    car2.velocityY=5;
    car2.x=Math.round(random(250,500));
     car2.lifetime=300;
    car2Group.add(car2);
   }
  
}