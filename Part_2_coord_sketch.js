/* VARIABLES */

/* SETUP RUNS ONCE */
function setup() {
    //sets the screen size
    createCanvas(400, 400); 
  
    //sets the background color
    background(255,249,226);  
  }
  
  /* DRAW LOOP REPEATS */
  function draw() {
    
    // Draw an ellipse
    ellipse(60,320,100,150);
  
    // Draw a line
    line(350,375,200,375);
    
    // Draw a rectangle 
    rect(150,200,100,30);
    
    // Draw an arc
    angleMode(DEGREES)
    arc(300, 100, 50, 50, 0, 180);
    
    // Sign your name
    textSize(15)
    text("Manasvi K.",200,370);
    
    // Add a short description
    textSize(15)
    text("This is a piece of art\n we created to practice\n drawing shapes and text\n to p5.js sketch",20,20)
  }