var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var orangeImg
var redImage


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX


  drawSprites();
  gerarMaças();
  


}


function gerarMaças(){



  if(frameCount % 60 === 0){
    var x = (random(50,350))
    var maça = createSprite(x,0);
    maça.addImage(appleImg);
    maça.velocityY = 3
    maça.scale = 0.07 


  }




}






