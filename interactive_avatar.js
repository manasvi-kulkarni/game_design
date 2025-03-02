/* VARIABLES */
let eyeWidth = 50;
let eyeLength = 40;
let pupilWidth = 22;
let pupilLength = 25;
/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 
  print(width);
  //sets the background color
  background(255,249,226); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //Face
  fill("#e5d5ba")
  ellipse(width/2,height/2,175,200);
  
  //Eyes
  if (mouseIsPressed){
    fill("Black");
    ellipse(170, 170, eyeWidth, eyeLength/8);
    ellipse(230, 170, eyeWidth, eyeLength/8);
  }else{
    fill(255,255,255)
    ellipse(170, 170, eyeWidth, eyeLength);
    ellipse(230, 170, eyeWidth, eyeLength);
    fill(0,0,0)
    ellipse(170, 170, pupilWidth, pupilLength);
    ellipse(230, 170, pupilWidth, pupilLength);
  }
  

  //Nose
  fill("#7B3F00")
  triangle(200, 200, 190, 221, 210, 221)

  //Mouth
  fill("Tomato")
  arc(200, 230, 50, 50, 0, 180)

  //hair
  fill("Black")
  rect(115,205,20,150)
  rect(285,205,20,150)
  arc(200, 140, 165, 80, 180, 0)

  //Earrings
  fill("Gold")
  ellipse(115,200,15,15)
  ellipse(285,200,15,15)
  
  //Text
  fill(0,0,0)
  text("My name is Manasvi Kulkarni\nand this is my avatar! I wear\nearrings everyday so I decided to include\nit in my avatar! :)",20,20)
}