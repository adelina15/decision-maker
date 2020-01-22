var r = 80;
var g = 50;
var b = 190;
var rectY=0;

function setup() {
   createCanvas(600,600);
}

function draw() {
for (var i=0; i < 15; i++){
    noStroke();
    fill(r, g, b)
  rect(0, rectY, width, height/15);
  rectY += height/15;
  r += 14;
  b -= 10;
  fill(255,255,255)
    rect( 270, 500, 50,50);
}
}