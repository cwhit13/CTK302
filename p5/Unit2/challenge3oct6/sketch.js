let names;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
//array is below
  names = ["barrett", "jenny", "donte'", "vanna", "chloé", "russell", "royce"]
}

function draw() {
  //background (220);

}
function mouseReleased (){
  stroke(random(100, 300), 0, 0);
  strokeWeight (random(10, 50));
  fill(random(200, 252), 0, 0);
  ellipse(mouseX, mouseY, random(100, 150));
noStroke();
fill(0);

  text(random(names), mouseX, mouseY);

}
