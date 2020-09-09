var f;
function setup() {
  createCanvas(800, 800);
  textAlign (CENTER);
  f = loadFont("assets1/AlfaSlabOne-Regular.ttf");
  textAlign (CENTER);
}

function draw() {
  background(158, 211, 255);
  noStroke();
  fill (11, 88, 212);
  rect(0, 200, 799, 900);
  textFont(f);
  textSize (68);
  text ("Brigid is a mermaid that collects trash in the ocean. She harnesses the power of friendship to turn that trash into a mighty spear. When she sees humans hunting endangered sea creatures she throws her spear at them, and her spear never misses.", width/2, height/2);




  text(mouseX + ', ' +mouseY, 10, 10);
}
