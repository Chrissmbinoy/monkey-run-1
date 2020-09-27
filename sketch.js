
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score=0,ground;

function preload(){
  
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);
background("aqua");
 
monkey = createSprite(50,325,20,20);  
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.17;  
  
ground = createSprite(200,380,1500,20);
ground.shapeColor  = ("black");
ground.x = ground.width/2;  
ground.velocityX = -4;  
  
  
 obstacleGroup = createGroup();
  foodGroup = createGroup();  
  
  
}


function draw() {
background("lightblue");
textSize(18);
textFont("algerian")  
fill("black");  
text("Score:"+score,450,50,100);   
  
if (ground.x < 0){
ground.x = ground.width/4;
}
    
//jump when the space key is pressed
if(keyDown("space")&& monkey.y >= 317) {
monkey.velocityY = -12;
}
    
    //add gravity
monkey.velocityY = monkey.velocityY + 0.45
score = score + Math.round(getFrameRate()/50);
  
  
  
  
  
  
  
  
obstacles();  
banana();  
  
monkey.collide(ground) 
  
drawSprites();
}

function banana(){
if ( frameCount%80 === 0){
var banana = createSprite(600,(random(120,200)),20,20)    
banana.addImage(bananaImage);
banana.scale = 0.15;  
banana.velocityX =  -4;    
banana.lifetime = 155;  
foodGroup.add(banana);  
    }
}

function obstacles(){
if( frameCount%300 === 0){
var obstacle = createSprite(600,350,20,20);
obstacle.addImage(obstacleImage);  
obstacle.scale = 0.2;    
obstacle.velocityX = -4;   
obstacle.lifetime = 155;    
    
obstacleGroup.add(obstacle)    
    } 
}



