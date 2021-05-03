var fixRect,moveRect;
var c1,c2,c3,c4;
function setup() {
  createCanvas(1200,800);
 fixRect= createSprite(200, 200, 50, 80);
 fixRect.shapeColor="blue"
 fixRect.debug=true;

 moveRect = createSprite(400,200,80,30);
 moveRect.shapeColor="red"
 //moveRect.debug=true;

 c1=createSprite(100,100,50,50);
 c1.shapeColor="yellow"
 c2=createSprite(200,100,50,50);
 c2.shapeColor="grey"
c3=createSprite(300,100,50,50);
c3.shapeColor=color(34,139,34);
c4=createSprite(400,100,50,50);
c4.shapeColor=color(0,255,255);
}

function draw() {
  background("brown");  

  moveRect.x=World.mouseX
  moveRect.y=World.mouseY

if(isTouching(moveRect,c3)){
  moveRect.shapeColor="black"
  c3.shapeColor="black"
}
else{
  c3.shapeColor="blue"
  moveRect.shapeColor="red"
}


  
  drawSprites();
}

