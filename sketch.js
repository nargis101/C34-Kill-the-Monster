const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var PLAY;
var END;
var gameState = PLAY;

var engine, world;
var monster, hero, fly, backgroundImg;
var box1, box2, box3, box4, box5, box6; 
var box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18, box19, box20;

var log1, myFont;


function preload(){
  backgroundImg = loadImage("images/bg.png");
  myFont = loadFont("myFont.ttf");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  //2500, 1000
  engine = Engine.create();
  world = engine.world;
  

  ground = new Ground(displayWidth/2 - 220, displayHeight/2 + 120, 850, 20);
  hero = new Hero(displayWidth/4 - 180, 400, displayWidth/2 - 450, displayHeight/4 - 70);
  monster = new Monster(displayWidth/2, displayHeight/2, displayWidth/4 - 50, displayHeight/4 + 50);

  box1 = new Box(displayWidth/2 - 150, displayHeight/2, 60, 60);
  box2 = new Box(displayWidth/2 + 150, displayHeight/2, 60, 60);

  box3 = new Box(displayWidth/2 - 150, displayHeight/2-50, 60, 60);
  box4 = new Box(displayWidth/2 + 150, displayHeight/2-50, 60, 60);

  box5 = new Box(displayWidth/2 - 150, displayHeight/2-100, 60, 60);
  box6 = new Box(displayWidth/2 + 150, displayHeight/2-100, 60, 60);

  box7 = new Box(displayWidth/2 - 150, displayHeight/2-150, 60, 60);
  box8 = new Box(displayWidth/2 + 150, displayHeight/2-150, 60, 60);

  box9 = new Box(displayWidth/2, displayHeight/2-200, 300, 30);

}


function draw() {
  background("lightblue");
  rectMode(CENTER);
  Engine.update(engine);
  image(backgroundImg, displayWidth/2, displayHeight/2, displayWidth, displayHeight);

  if(gameState === PLAY){

  ground.display();
  hero.display();
  monster.display();

  textSize(90);
  fill(0);
  textFont(myFont);
  text("Kill The Monster!!", 770, 900);

  fill(159, 137, 218)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  if(monster.body.position.y > displayHeight){
    fill(0);
    textSize(40);
    text("Good Job, you killed the monster!", 200, 200);
    text("Press 'space' and 'ctrl' key to play again", 200, 250);
}
  } 

  if(keyCode === 32){
    setup();
  gameState = PLAY;
  } 

}

function reset(){
  
}