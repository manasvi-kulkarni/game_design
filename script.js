//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let seed, growing, growing1, grown, sadPlant, water1, water2;
let score = 0;
let backgroundImg, seedImg, growingImg, growing1Img, grownImg, sadImg, waterImg, waterImg2;
let isSad = false;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImg = loadImage("assets/Sun.png");
  seedImg = loadImage("assets/Seed.png");
  growingImg = loadImage("assets/Growing.png");
  growing1Img = loadImage("assets/Growing1.png");
  grownImg = loadImage("assets/Grown.png");
  sadImg = loadImage("assets/sadPlant.png");
  waterImg = loadImage("assets/Water.png");
  waterImg2 = loadImage("assets/Water.png");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);  
  //Resize images
  backgroundImg.resize(50, 0);
  seedImg.resize(100,0)
  growingImg.resize(100,0)
  growing1Img.resize(100,0)
  grownImg.resize(100,0)
  sadImg.resize(100,0)
  waterImg.resize(75,0)
  waterImg2.resize(75,0)
  //Create catcher 
  seed = new Sprites(seedImg,200,350,100,20);
  seed.color = color(95,158,160);
  seed.collider = "k"
 // madMinion = new Sprite(madminionImg, 200,350,100,20)
 // madMinion.color = color(95,158,160)
 // madMinion.collider ="k"

  //Create falling object
  water1 = new Sprites(waterImg,100,0,10);
  water1.color = color(0,128,128);
  water1.vel.y = 2;
  water2 = new Sprites(waterImg2,100,0,10);
  water2.color = color(0,128,128);
  water2.vel.y = 2;
}

/* DRAW LOOP REPEATS */
function draw() {
  background("gray");

  //draw background image
  image(backgroundImg,350,75)
  // Draw directions to screen
  fill(0);
  textSize(12);
  fill("white")
  text("Move the \nminion with the \nleft and right \narrow keys to \ncatch the falling \nbananas.\n#DespicableMe4", width-100, 20);

  //If fallingObject reaches bottom, move back to random position at top
  if (water1.y >= 400){
    water1.y = 0;
    water1.x = random(width);
    water1.vel.y = random(1,5)
    score = score-1
  }
  if (water2.y >= 400){
    water2.y = 0;
    water2.x = random(width);
    water2.vel.y = random(1,5);
    water2 = score-1
  }
  //Move catcher!
  if (kb.pressing("left")) {
    seed.vel.x = -3;
  }else if (kb.pressing("right")) {
    seed.vel.x = 3
  }else{
    seed.vel.x = 0
  }

  //Stop catcher at edge of the screen
  if (seed.x < 50){
    seed.x = 50;
  } else if (seed.x > 350){
    seed.x = 350;
  }
  //If banana collides with minion, move back to random position at top
  if (seed.collides(minion)){
    seed.y = 0;
    seed.x = random(width);
    seed.vel.y = random(1,5);
    seed.direction = "down";
    score = score + 1;

  }
  //If the 2nd banana collides with minion, move back to random position at top
  if (water2.collide(minion)){
    water2.y = 0;
    water2.x = random(width);
    water2.vel.y = random(1,5);
    water2.direction = "down";
    score = score + 2;

  }

  // Check if score is at or below -20
  if (score <= -5 && !isSad) {
    isSad = true;
    seed.img = sadImg;
  } else if (score > -5 && isSad) {
   // isMad = false;
    seed.img = seedImg;
    isSad=false;
  }
  //Draw the score to screen
  fill("Purple");
  textSize(20);
  text("Score = "+score, 10,30);
}