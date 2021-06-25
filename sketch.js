var BgImg, canvas;
var cat, catImg, catImg1, catImg2;
var mouse, mouseImg, mouseImg1, mouseImg2;

function preload() {
    //load the images here 
    BgImg = loadImage("images/garden.png")
    catImg = loadAnimation("images/cat1.png")
    mouseImg = loadAnimation("images/mouse1.png")
    catImg1 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg1 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catImg2 = loadAnimation("images/cat4.png")
    mouseImg2 = loadAnimation("images/mouse4.png")
}

function setup(){
    canvas = createCanvas(1000,1000);
    //create tom and jerry sprites here
    cat = createSprite(300,200);
    cat.addAnimation("catSleeping",catImg);
    cat.scale=0.2;

    mouse = createSprite(200,300);
    mouse.addAnimation("mouseStanding",mouseImg);
    mouse.scale=0.15;


}

function draw() {

    background(BgImg);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < cat.width/2 - mouse.width/2){
        cat.velocitX = 0;
        cat.addAnimation("catImage2",catImg2);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catImg2");
        mouse.addAnimation("mouseImg2", mouseImg2);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseImg2"); 
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg1);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing",mouseImg1);
      mouse.frameDelay = 25;
      mouse.changeAnimation("mouseTeasing");
      

      
        
  }

}