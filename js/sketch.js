
//variables
var balls = []; // Particules array
var mic; // Microphone library


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  //allow microphone
  mic = new p5.AudioIn(); 
  mic.start();
  
  for(i = 0; i < 0; i++){
	  balls[i] = new ball();
  } // create balls array
  
}

//delete balls
function mousePressed(){
  
	//balls.push(new ball(random(0, width), height)); // Add a new ball object
  balls.splice(balls.length-1,1); // Delete the last ball object
}

function draw() {

	textSize(25)
	text("Make noise to generate, move mouse to change color and click to delete", windowWidth/2-400, 70);
  
  background(0,0,0,10);
  
  var vol = mic.getLevel();
  if (vol > 0.1) {
  balls.push(new ball(random(0, width), height));  
  } // Create new ball object when the audio threshold level is crossed
  
  // RGB color with respect to mouse position on the canvas
  var r = map(mouseY, 0, height, 0, 255);
  var g = map(mouseX, 0, width, 0, 255);
  var b = map(mouseY, 0, height, 0, 255);
  fill(r, g, 255-b);
  stroke(r, g, 255-b);
  
  // ball creation
  for(i=0;i<balls.length;i++){
  balls[i].display();
  balls[i].move();
  }
    
}

function ball (X, Y){ // ball object
  
  this.x = random(0, width);
  this.y = height;
  
  this.display = function(){
    
  	ellipse(this.x,this.y,20,20);
  }
	this.move = function(){
  	this.x = this.x + random(-0.5, 0.5);
  	this.y = this.y - 1;
    if (this.y > 0) {
    	this.y = this.y - 1;
  	} else {
    	this.y = height;
  	}
  }
  
}
