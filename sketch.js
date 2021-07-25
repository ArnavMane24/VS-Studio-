var sprite1
var sprite2

function setup() {
  createCanvas(800,400);
 sprite1=createSprite(200,200,10,50)
 sprite1.shapeColor="black"
 sprite2=createSprite(100,100,50,80)
}

function draw() {
  background("red"); 
  sprite2.x=mouseX
  sprite2.y=mouseY
  isTouching()
  drawSprites();
}
function isTouching() {
  if(sprite2.x-sprite1.x<=sprite1.width/2+sprite2.width/2&&
    sprite1.x-sprite2.x<=sprite1.width/2+sprite2.width/2&&
    sprite2.y-sprite1.y<=sprite1.height/2+sprite2.height/2&&
    sprite1.y-sprite2.y<=sprite1.height/2+sprite2.height/2){
    sprite2.shapeColor="orange"
  }
  else{
    sprite2.shapeColor="blue"
  }
}