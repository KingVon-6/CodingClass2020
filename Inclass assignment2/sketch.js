let xpos = 500;
let ypos = 0;
let xballspeed = 10;
let yballspeed = 15;
let cirlcesize = 10;

 function setup() {
    //put setup code here
  createCanvas(windowWidth,windowHeight);
  circlesize = random(10,100);
}
function draw() {
     // put draw code here
  background(0,120,0)
  fill(0,0,200);

  if (dist(xpos,ypos,mouseX,mouseY) < 500) {

  }

  
  circle(xpos,ypos,100);

   xpos = xpos + xballspeed;
   ypos = ypos + yballspeed;

   // check for x position
   // check when ball cross right side of the canvas
   if(xpos > width){
     xballspeed = -xballspeed;
   }
   //check when ball cross left side of the canvas
   if(xpos < 0){
     xballspeed = -xballspeed;
   }



   // check for y position

   //check when ball crosses the botrom of the Canvas
   if(ypos > height){
     yballspeed = -yballspeed;
   }
   //check when ball crosses top of the canvas
   if(ypos < 0){
     yballspeed = -yballspeed;
   }
}
