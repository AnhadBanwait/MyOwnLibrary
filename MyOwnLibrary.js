function isTouching(object1,object2){
    if(object1.x-object2.x<object1.width/2+object2.width/2&&
      object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){
     return true;
  
    }
  
    else{
      return false;
    }
  }

  function bounceOff(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2&&
      ob2.x-ob1.x<ob1.width/2+ob2.width/2&&
    ob1.y-ob2.y<ob1.height/2+ob2.height/2&&
    ob2.y-ob1.y<ob1.height/2+ob2.height/2){
    ob2.velocityY=(-1)*ob2.velocityY;
    ob1.velocityY=(-1)*ob1.velocityY;
  
    }
  }s