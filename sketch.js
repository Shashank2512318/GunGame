  var bow , arrow,  background;
  var bowImage, arrowImage, green_balloonImage, red_balloonImage,            pink_balloonImage ,blue_balloonImage, backgroundImage;

var ag, rg, gg, pg, bg;

  var Score=0;

  function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("images-removebg-preview.png");
  bowImage = loadImage("gun-removebg-preview.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

   function setup() {
  createCanvas(600, 600);
  

  
  //creating background
  background1 = createSprite(0,0,600,600);
  background1.addImage(backgroundImage);
  background1.scale = 3.0
  
  // creating bow to shoot arrow
  bow = createSprite(520,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.8;
  ag= new Group();
  
     
    rg= new Group();
   
    gg= new Group();
   
   pg= new Group();
     
     bg =new Group();

}

  function draw() {  
  background("lightblue");
  
  
  // moving ground
    background1.velocityX = -3 

    if (background1.x < 0){
      background1.x = background1.width/2;
    }
    
    if(ag.isTouching(rg)) {
      ag.destroyEach();
      rg.destroyEach();
      Score=Score+1;
    }
    
    if(ag.isTouching(gg)) {
      ag.destroyEach();
      gg.destroyEach();
      Score=Score+1;
    }
    
    if(ag.isTouching(bg)) {
      ag.destroyEach();
      bg.destroyEach();
      Score=Score+1;
    }
    
    if(ag.isTouching(pg)) {
      ag.destroyEach();
      pg.destroyEach();
      Score=Score+1;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();
  }
  
  var color = Math.round(random(1,4));
  
  if (World.frameCount % 80 === 0) {
    if (color === 1) {
      redBalloon();
    } else if (color === 2) {
      greenBalloon();
    } else if (color === 3) {
      blueBalloon();
    } else if (color === 4) {
      pinkBalloon();
    }
    }
  
  
  drawSprites();
  text("Score-"+Score, 500, 50);
  }


  function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)),  10,     10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 210;
  red.scale = 0.1
  rg.add(red);  
  }
 
  function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)),     10,     10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 210;
  blue.scale = 0.1
  bg.add(blue);  
  }

  function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)),   10,     10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 210;
  green.scale = 0.1
  gg.add(green);  
  }

  function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)),     10,     10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 210;
  pink.scale = 1.2;
  pg.add(pink);  
  }


// Creating  arrows for bow
  function createArrow() {
  arrow= createSprite (570, mouseY, 10, 10);
  arrow.addImage(arrowImage); 
  arrow.velocityX= -3;
  arrow.lifetime= 210; 
  arrow.scale= 0.3;
  ag.add(arrow);  
  }
