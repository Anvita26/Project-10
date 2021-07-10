var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9fb661fd-c762-4591-828e-a9c7fb5abad4","df4e7b8b-ca38-4599-b213-11502bbb8ccb","0d58e260-8b95-48e9-b52d-8838fc901bed","4dba7d23-2aac-46ef-8259-b18eafe40bd5","a9ee064b-c1ec-4a98-82db-b9055f0dd63f"],"propsByKey":{"9fb661fd-c762-4591-828e-a9c7fb5abad4":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png","frameSize":{"x":264,"y":370},"frameCount":1,"looping":true,"frameDelay":2,"version":"DK8.stYcZlziAImCg36Fa7yHu1S4LUhW","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":370},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png"},"df4e7b8b-ca38-4599-b213-11502bbb8ccb":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"0d58e260-8b95-48e9-b52d-8838fc901bed":{"name":"sam2","sourceUrl":"assets/api/v1/animation-library/gamelab/mu4y9wHym.md7dourxlOW2.aYA1vODrc/category_people/green_shirt_one_arm_crossed.png","frameSize":{"x":109,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"mu4y9wHym.md7dourxlOW2.aYA1vODrc","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":109,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mu4y9wHym.md7dourxlOW2.aYA1vODrc/category_people/green_shirt_one_arm_crossed.png"},"4dba7d23-2aac-46ef-8259-b18eafe40bd5":{"name":"kid","sourceUrl":"assets/api/v1/animation-library/gamelab/SCx.ulQQFsDzgGPaGZ0rdecmoiBgLn4v/category_people/kid_14_side.png","frameSize":{"x":180,"y":291},"frameCount":1,"looping":true,"frameDelay":2,"version":"SCx.ulQQFsDzgGPaGZ0rdecmoiBgLn4v","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":291},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SCx.ulQQFsDzgGPaGZ0rdecmoiBgLn4v/category_people/kid_14_side.png"},"a9ee064b-c1ec-4a98-82db-b9055f0dd63f":{"name":"kid2","sourceUrl":"assets/api/v1/animation-library/gamelab/6JewnaaEkHaL4bWJeGP6QuOT..cTBDT7/category_people/kid_12_side.png","frameSize":{"x":206,"y":341},"frameCount":1,"looping":true,"frameDelay":2,"version":"6JewnaaEkHaL4bWJeGP6QuOT..cTBDT7","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":341},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6JewnaaEkHaL4bWJeGP6QuOT..cTBDT7/category_people/kid_12_side.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "ForestGreen";
 sam.setAnimation("kid2");
  sam.scale=0.09;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "IndianRed";
  car1.setAnimation("car");
  car1.scale=0.2;
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "IndianRed";
  car2.setAnimation("car");
  car2.scale=0.2;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "IndianRed";
  car3.setAnimation("car");
  car3.scale=0.2;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "IndianRed";
  car4.setAnimation("car");
  car4.scale=0.2;
  
 //add the velocity to make the car move.
 car1.velocityX=0;
 car1.velocityY=8;
 car2.velocityX=0;
 car2.velocityY=8;
 car3.velocityX=0;
 car3.velocityY=-8;
 car4.velocityX=0;
 car4.velocityY=-8;

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
 car1.bounceOff(boundary1);
 car1.bounceOff(boundary2);
 car2.bounceOff(boundary1);
 car2.bounceOff(boundary2);
 car3.bounceOff(boundary1);
 car3.bounceOff(boundary2);
 car4.bounceOff(boundary1);
 car4.bounceOff(boundary2); 
   
//Add the condition to make the sam move left and right

if(keyDown(LEFT_ARROW)){
 sam.x=sam.x-2;
}
if(keyDown(RIGHT_ARROW)){
 sam.x=sam.x+2;
}
//Add the condition to reduce the life of sam if it touches the car.
 
 if(sam.isTouching(car1)|| sam.isTouching(car2)|| sam.isTouching(car3)||sam.isTouching(car4)){
  sam.x=20;
  sam.y=190;
  life=life+1;
 }


 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
