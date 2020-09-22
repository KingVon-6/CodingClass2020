let xpos = 200;
let ypos = 300;
let ballspeed = 1;

 function setup() {

  createCanvas(windowWidth,windowHeight);

}
function draw() {

  background(200,10,120)
  fill(0,0,200);
  circle(xpos,ypos,100);

if(keyIsPressed & keycode === Up_Arrow) {
     ypos = ypos + ballspeed;
}

if(keyIsPressed & keycode === Down_Arrow){
     xpos = xpos + ballspeed;
}

if(keyIsPressed & keycode === Left_Arrow){
     xpos = xpos - ballspeed;
}
if(keyIsPressed & keycode === Right_Arrow){
     xpos = xpos - ballspeed;
}








}
