var button, button_2,bg,background
 var gameState = "work"
 var gameState = "work_2"

function preload(){
 bg_1 = loadImage("images/bg_1.png");
 bg_2 = loadImage("images/bg_3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  

  
}

function draw() {
  background("WHITE");

  if( gameState === "work"){
    background(bg_1);
  }
  

  if(keyDown("ENTER"))
  {
    gameState === "work"
    
  }




if(keyDown("SPACE"))
  {
    gameState === "work_2"
    
  }
if( gameState === "work_2"){
  background(bg_2);
}
  drawSprites();
  }
  



  

 
  
  