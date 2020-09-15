
let xpos = 0;
let ypos = 0;

let xpos2 = 200;
let ypos2 = 200;

let xpos3 = 100;
let ypos3 = 100;

 function setup() {
  createCanvas(500,500);

  angleMode(DEGREES);
}

function draw() {
  background(0,100,100)
  triangle(xpos,ypos,50,20,86,75);
  xpos = xpos + 5;
  ypos = ypos + 5;

  triangle(xpos2,ypos2,50,25,86,75);
  xpos2 = xpos2 + 3;
  ypos2 = ypos2 + 1;

  triangle(xpos3,ypos3,50,30,86,75);
  xpos3 = xpos3 + 6;
  ypos3 = ypos3 + 6;
}
