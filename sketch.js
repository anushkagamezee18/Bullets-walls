var thickness,wall;
var bullet,speed,weight;
var bulletRightEdge,bulletLefttEdge,wallRightEdge,wallLefttEdge;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 120, 10);
  bullet.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor =color(80,80,80);
  
  speed = random(55,90);
  weight = random(400,1500);
  bullet.velocityX = speed;


  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(200,120,48); 
  if(wall.x - bullet.x < bullet.width/2+wall.width/2){
    bullet.velocityX = 0;
    wall.shapeColor=color(255,0,0);
    
   }
  
  drawSprites();
} 
  
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x + bullet.width/2;
  wallLeftEdge=wall.x
 
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
     return false;
     

     if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed* speed/thickness * thickness * thickness;
      if(damage>10){
        wall.shapeColor = "red";
      }
      if(damage<10){
        wall.shapeColor = "green";
      }
     }
}




  
