

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1300,600);
  background(0);
  noStroke();
}


function draw(){
  let r = map(mouseX,0,width,0,255);
  let g = map(mouseY,0,width,0,255);
  let b = map(mouseX,0,width,0,255);
  let c = color('rgb(r,g,b)');

  background(rgb(r,g,b));
/*background(r);
background(g);
background(b);
*/

  ellipse(mouseX,mouseY,25,25,0,0);

  drawSprites();
}